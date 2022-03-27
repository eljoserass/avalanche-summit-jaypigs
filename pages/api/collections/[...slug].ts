// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {tokenItems, collections} from '../../../json-server/data';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.slug.length == 1) {
    const firstItem = collections.find(item => item.addrs == req.query.slug[0]);

    if (! firstItem) return;
    let result: any[] = firstItem?.items;

    const { highest, lowest, sort, statusFilterEnabled, page, perPage } = req.query;
  
    const highPrice = parseFloat(String(highest));
    const lowPrice = parseFloat(String(lowest));
    let statusFilter = statusFilterEnabled;
    // let statusFilter = 'false';
  
    if (highPrice && highPrice !== 0) {
      if (lowPrice) {
        result = result.filter(
          (item) =>
            item.collection &&
            item.collection.floorOrder &&
            item.collection.floorOrder.price &&
            parseFloat(item.collection.floorOrder.price) >= lowPrice * 1000000000000000000
        );
      }
  
      result = result.filter(
        (item) =>
          item.collection &&
          item.collection.floorOrder &&
          item.collection.floorOrder.price &&
          parseFloat(item.collection.floorOrder.price) <= highPrice * 1000000000000000000
      );
    }
  
    if (sort == "Price Ascending") {
      result = result.sort((a, b) => {
        if (
          a.collection &&
          a.collection.floorOrder &&
          a.collection.floorOrder.price &&
          b.collection &&
          b.collection.floorOrder &&
          b.collection.floorOrder.price
        ) {
          return parseFloat(a.collection.floorOrder.price) - parseFloat(b.collection.floorOrder.price);
        }
  
        return 0;
      });
  
      statusFilter = "true";
    } else if (sort == "Price Descending") {
      result = result.sort((a, b) => {
        if (
          a.collection &&
          a.collection.floorOrder &&
          a.collection.floorOrder.price &&
          b.collection &&
          b.collection.floorOrder &&
          b.collection.floorOrder.price
        ) {
          return parseFloat(b.collection.floorOrder.price) - parseFloat(a.collection.floorOrder.price);
        }
  
        return 0;
      });
      statusFilter = "true";
    } else if (sort == "Recent Activity") {
      result = result.sort((a, b) => {
        if (
          a.bids &&
          a.bids.length > 0 &&
          a.bids[0].startTime &&
          b.bids &&
          b.bids.length > 0 &&
          b.bids[0].startTime
        ) {
          return (
            parseFloat(b.bids[0].startTime) - parseFloat(a.bids[0].startTime)
          );
        }
  
        return 0;
      });
    }
  
    if (statusFilter == "true") {
      result = result.filter(
        (item) => item.collection && item.collection.floorOrder && item.collection.floorOrder.price
      );
    }
  
    // if (statusFilterEnabled == "true") {
    //   result = result.filter(item => !(item.bids && item.bids.length))
    // }
  
    const hasMore = result.length > (parseInt(String(page)) + 1) * parseInt(String(perPage));
  
    result = result.slice(
      parseInt(String(page)) * parseInt(String(perPage)),
      (parseInt(String(page)) + 1) * parseInt(String(perPage))
    );
  
    return res.status(200).json({ tokens: result, hasMore: hasMore });
  } else {
    const token = tokenItems.find(item => item.token_id == req.query.slug[1])
    return res.status(200).json({token: token});
  }
}
