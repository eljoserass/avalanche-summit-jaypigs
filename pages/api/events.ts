// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { events } from "../../json-server/data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let result = events;
  const { page, perPage, filters } = req.query;

  if (filters && filters.length > 0) {
    result = result.filter((event) => filters.includes(event.type));
  }

  const hasMore = result.length > (parseInt(String(page)) + 1) * parseInt(String(perPage));

  result = result.slice(
    parseInt(String(page)) * parseInt(String(perPage)),
    (parseInt(String(page)) + 1) * parseInt(String(perPage))
  );

  return res
    .status(200)
    .json({ events: result, hasMore: hasMore, filters: filters });
}
