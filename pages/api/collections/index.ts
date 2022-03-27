// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { collections } from "../../../json-server/data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let result = collections;
  const { page, perPage, searchTerm, sorts } = req.query;

  if (String(searchTerm) !== "") {
    result = result.filter(item => (item.name.toUpperCase()).includes(String(searchTerm).toUpperCase()));
  }
  
  const sortObj = JSON.parse(String(sorts));
  if (sortObj.floor !== "none") {
    if (sortObj.floor == 'ascending') {
      result = result.sort((a, b) => {
        return parseFloat(a.floorOrder.price) - parseFloat(b.floorOrder.price);
      });
    } else {
      result = result.sort((a, b) => {
        return parseFloat(b.floorOrder.price) - parseFloat(a.floorOrder.price);
      });
    }
  } else if (sortObj.total !== "none") {
    if (sortObj.total == 'ascending') {
      result = result.sort((a, b) => {
        return parseFloat(a.volume.volumeAll) - parseFloat(b.volume.volumeAll);
      });
    } else {
      result = result.sort((a, b) => {
        return parseFloat(b.volume.volumeAll) - parseFloat(a.volume.volumeAll);
      });
    }
  } else if (sortObj.day !== "none") {
    if (sortObj.day == 'ascending') {
      result = result.sort((a, b) => {
        return parseFloat(a.volume.volume24h) - parseFloat(b.volume.volume24h);
      });
    } else {
      result = result.sort((a, b) => {
        return parseFloat(b.volume.volume24h) - parseFloat(a.volume.volume24h);
      });
    }
  } else if (sortObj.dayPercent !== "none") {
    if (sortObj.change24h == 'ascending') {
      result = result.sort((a, b) => {
        return a.volume.change24h - b.volume.change24h;
      });
    } else {
      result = result.sort((a, b) => {
        return b.volume.change24h - a.volume.change24h;
      });
    }
  }

  const hasMore = result.length > (parseInt(String(page)) + 1) * parseInt(String(perPage));

  result = result.slice(
    parseInt(String(page)) * parseInt(String(perPage)),
    (parseInt(String(page)) + 1) * parseInt(String(perPage))
  );

  return res.status(200).json({ collections: result, hasMore: hasMore });
}
