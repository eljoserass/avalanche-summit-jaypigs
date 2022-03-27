// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
// import { tokenItems } from "../../json-server/data";
import { ethers } from "ethers";
import Web3Modal from "web3modal";



export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const tokenItems = [
    {
        id: '15958112',
        token_id: '1',
        image_url:
            'https://static.looksrare.org/0x88c3a90a8eaF00b8bEccA576A33eeB138C285eB0/744',
        name: 'Meebit #1',
        owner: {
            address: '',
            user: '',
            config: '',
        },
        description: 'Meebit #1',
        animation: null,
        last_sale: {
            price: '3610120000000000000',
            currency: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
        },
        collection: {
            name: 'Meebits',
            address: '0xe6A540246665a74758fe5d5F54456AF3CcFA71Dd',
            type: 'ERC721',
            isVerified: true,
            totalSupply: 19999,
            description:
                'The Meebits are 20,000 unique 3D voxel characters, created by a custom generative algorithm, then registered on the Ethereum blockchain.',
            owner: {
                address: '0x0000000000000000000000000000000000000000',
                name: null,
                isVerified: false,
                avatar: null,
            },
            floorOrder: { price: '3886900000000000000' },
        },
        bids: [
            {
                isOrderAsk: false,
                signer: '0x9a676E8Ca4Bb0b8b08C975e198f84366a63048C5',
                collection: {
                    address: '0xe6A540246665a74758fe5d5F54456AF3CcFA71Dd',
                },
                price: '3751000000000000000',
                amount: '1',
                strategy: '0x86F909F70813CdB1Bc733f4D97Dc6b03B8e7E8F3',
                currency: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
                nonce: '1684',
                startTime: '1646975226',
                endTime: '1647007626',
                minPercentageToAsk: '8500',
                params: null,
                signature:
                    '0x368267634c338433bef2bf490d5d456a8c36dcd95dca78bb71a1982f6655581a3b377858ed9ee239b53a477f4444291370258cf22f372a7e52fc8cadf0e82c371c',
                token: null,
                hash: '0x3b37fd73d40dd31cc56567d3a85d2a2551a2c930fcd54ba700eacb86d65a887a',
            },
            {
                isOrderAsk: false,
                signer: '0x97b5D56d02c0B97B02346D2EB61a1747b63a72d9',
                collection: {
                    address: '0xe6A540246665a74758fe5d5F54456AF3CcFA71Dd',
                },
                price: '3750000000000000000',
                amount: '1',
                strategy: '0x86F909F70813CdB1Bc733f4D97Dc6b03B8e7E8F3',
                currency: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
                nonce: '352',
                startTime: '1646974034',
                endTime: '1647060421',
                minPercentageToAsk: '8500',
                params: null,
                signature:
                    '0x50be65a535a946c27217a1847b2c7dc9f07a0f2ec2034876845975c4d7d0eaca4094be78aed485aa35ee834ee60ba0f44277e82ef8aee492490c140e3552b7291b',
                token: null,
                hash: '0xb0d0c67378c492ee23e5dfa8c71c316e6641f6e482fb5c1f26d23e92e4d95ca1',
            },
        ],
        attributes: [
            {
                traitType: 'Glasses',
                value: 'Frameless',
                displayType: 'string',
                count: 1339,
                floorOrder: { price: '5280000000000000000' },
            },
            {
                traitType: 'Hair Color',
                value: 'Dark',
                displayType: 'string',
                count: 11708,
                floorOrder: { price: '5280000000000000000' },
            },
            {
                traitType: 'Hair Style',
                value: 'Buzzcut',
                displayType: 'string',
                count: 3277,
                floorOrder: { price: '5080000000000000000' },
            },
            {
                traitType: 'Necklace',
                value: 'Gold Chain',
                displayType: 'string',
                count: 2161,
                floorOrder: { price: '5760000000000000000' },
            },
            {
                traitType: 'Pants',
                value: 'Regular Pants',
                displayType: 'string',
                count: 3293,
                floorOrder: { price: '5080000000000000000' },
            },
            {
                traitType: 'Pants Color',
                value: 'Denim',
                displayType: 'string',
                count: 3783,
                floorOrder: { price: '5350000000000000000' },
            },
            {
                traitType: 'Shirt',
                value: 'Skull Tee',
                displayType: 'string',
                count: 1972,
                floorOrder: { price: '5280000000000000000' },
            },
            {
                traitType: 'Shoes',
                value: 'Basketball',
                displayType: 'string',
                count: 1667,
                floorOrder: { price: '5080000000000000000' },
            },
            {
                traitType: 'Shoes Color',
                value: 'Gray',
                displayType: 'string',
                count: 2764,
                floorOrder: { price: '5550000000000000000' },
            },
            {
                traitType: 'Type',
                value: 'Human',
                displayType: 'string',
                count: 18880,
                floorOrder: { price: '5080000000000000000' },
            },
        ],
    },
    {
        id: '20434030',
        token_id: '0',
        image_url:
            'https://static.looksrare.org/0x88c3a90a8eaF00b8bEccA576A33eeB138C285eB0/744',
        name: 'Meebit #0',
        owner: {
            address: '',
            user: '',
            config: '',
        },
        description: 'Meebit #0',
        animation: null,
        last_sale: {
            price: '4990000000000000000',
            currency: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
        },
        collection: {
            name: 'Meebits',
            address: '0xe6A540246665a74758fe5d5F54456AF3CcFA71Dd',
            type: 'ERC721',
            isVerified: true,
            totalSupply: 19999,
            description:
                'The Meebits are 20,000 unique 3D voxel characters, created by a custom generative algorithm, then registered on the Ethereum blockchain.',
            owner: {
                address: '0x0000000000000000000000000000000000000000',
                name: null,
                isVerified: false,
                avatar: null,
            },
            floorOrder: { price: '3886900000000000000' },
        },
        bids: [
            {
                isOrderAsk: false,
                signer: '0x9a676E8Ca4Bb0b8b08C975e198f84366a63048C5',
                collection: {
                    address: '0xe6A540246665a74758fe5d5F54456AF3CcFA71Dd',
                },
                price: '3751000000000000000',
                amount: '1',
                strategy: '0x86F909F70813CdB1Bc733f4D97Dc6b03B8e7E8F3',
                currency: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
                nonce: '1684',
                startTime: '1646975226',
                endTime: '1647007626',
                minPercentageToAsk: '8500',
                params: null,
                signature:
                    '0x368267634c338433bef2bf490d5d456a8c36dcd95dca78bb71a1982f6655581a3b377858ed9ee239b53a477f4444291370258cf22f372a7e52fc8cadf0e82c371c',
                token: null,
                hash: '0x3b37fd73d40dd31cc56567d3a85d2a2551a2c930fcd54ba700eacb86d65a887a',
            },
            {
                isOrderAsk: false,
                signer: '0x97b5D56d02c0B97B02346D2EB61a1747b63a72d9',
                collection: {
                    address: '0xe6A540246665a74758fe5d5F54456AF3CcFA71Dd',
                },
                price: '3750000000000000000',
                amount: '1',
                strategy: '0x86F909F70813CdB1Bc733f4D97Dc6b03B8e7E8F3',
                currency: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
                nonce: '352',
                startTime: '1646974034',
                endTime: '1647060421',
                minPercentageToAsk: '8500',
                params: null,
                signature:
                    '0x50be65a535a946c27217a1847b2c7dc9f07a0f2ec2034876845975c4d7d0eaca4094be78aed485aa35ee834ee60ba0f44277e82ef8aee492490c140e3552b7291b',
                token: null,
                hash: '0xb0d0c67378c492ee23e5dfa8c71c316e6641f6e482fb5c1f26d23e92e4d95ca1',
            },
        ],
        attributes: [
            {
                traitType: 'Hair Color',
                value: 'Dark',
                displayType: 'string',
                count: 11708,
                floorOrder: { price: '5280000000000000000' },
            },
            {
                traitType: 'Hair Style',
                value: 'Pulled Back',
                displayType: 'string',
                count: 758,
                floorOrder: { price: '5500000000000000000' },
            },
            {
                traitType: 'Pants',
                value: 'Skirt',
                displayType: 'string',
                count: 2384,
                floorOrder: { price: '5350000000000000000' },
            },
            {
                traitType: 'Pants Color',
                value: 'Dark Gray',
                displayType: 'string',
                count: 3704,
                floorOrder: { price: '5350000000000000000' },
            },
            {
                traitType: 'Shirt',
                value: 'Oversized Hoodie',
                displayType: 'string',
                count: 1123,
                floorOrder: { price: '5350000000000000000' },
            },
            {
                traitType: 'Shirt Color',
                value: 'Red',
                displayType: 'string',
                count: 749,
                floorOrder: { price: '5698970000000000000' },
            },
            {
                traitType: 'Shoes',
                value: 'Canvas',
                displayType: 'string',
                count: 3808,
                floorOrder: { price: '5500000000000000000' },
            },
            {
                traitType: 'Shoes Color',
                value: 'Yellow',
                displayType: 'string',
                count: 1004,
                floorOrder: { price: '8000000000000000000' },
            },
            {
                traitType: 'Type',
                value: 'Human',
                displayType: 'string',
                count: 18880,
                floorOrder: { price: '5280000000000000000' },
            },
        ],
    },
    {
        id: '18372148',
        token_id: '0',
        image_url:
            'https://static.looksrare.org/0x88c3a90a8eaF00b8bEccA576A33eeB138C285eB0/744',
        name: 'dotdotdot 0',
        owner: {
            address: '',
            user: '',
            config: '',
        },
        description: null,
        animation: null,
        last_sale: null,
        collection: {
            name: 'dotdotdot',
            address: '0xd28dD4ddf3C0fdeBbdE14FC7eb2e98445AB4D557',
            type: 'ERC721',
            isVerified: true,
            totalSupply: 4870,
            description: null,
            owner: {
                address: '0x74B01c2371988F6bC173E7386F3e012790E57F8a',
                name: null,
                isVerified: false,
                avatar: null,
            },
            floorOrder: { price: '99000000000000000' },
        },
        bids: [
            {
                isOrderAsk: false,
                signer: '0x705DDE500E13467C3014feEEF9F92CFC8dea2C0e',
                collection: {
                    address: '0xd28dD4ddf3C0fdeBbdE14FC7eb2e98445AB4D557',
                },
                price: '60000000000000000',
                amount: '1',
                strategy: '0x86F909F70813CdB1Bc733f4D97Dc6b03B8e7E8F3',
                currency: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
                nonce: '36',
                startTime: '1646701090',
                endTime: '1647302283',
                minPercentageToAsk: '8500',
                params: null,
                signature:
                    '0x8f7797f8a9a5041b44519908f34e14d1b041e694d975a2b3179ffda6ed2e87514ceaa7a54f01a2d99c6088701adc753003655d012b3c17683f72b97e024c9fe41c',
                token: null,
                hash: '0xad36ab0ed2486d64440aa0bdb99b5a1cdcd40a8846a0301d7f08f21b69cf1874',
            },
            {
                isOrderAsk: false,
                signer: '0xD6bef05074F450a0aae3D89f5EA57ac77085B999',
                collection: {
                    address: '0xd28dD4ddf3C0fdeBbdE14FC7eb2e98445AB4D557',
                },
                price: '40000000000000000',
                amount: '1',
                strategy: '0x86F909F70813CdB1Bc733f4D97Dc6b03B8e7E8F3',
                currency: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
                nonce: '2464',
                startTime: '1645858214',
                endTime: '1648450208',
                minPercentageToAsk: '8500',
                params: null,
                signature:
                    '0x3dc0a1f5edbaa27d5ef72d91fedc686218acff18bbdf071e0e47c89992a76cd54cd6486c7f2bab060b3795a1ada860d0c8551dbc3b98b0a6cd250f194ad3d8a41b',
                token: null,
                hash: '0x3290b306785be9e1608b708e802188414d687cdc8e19507453d9c8436b8d7c1e',
            },
        ],
        attributes: [
            {
                traitType: 'Background',
                value: 'blizzard',
                displayType: 'string',
                count: 545,
                floorOrder: { price: '250000000000000000' },
            },
            {
                traitType: 'Garmet',
                value: 'luna',
                displayType: 'string',
                count: 232,
                floorOrder: { price: '250000000000000000' },
            },
        ],
    },
    {
        id: '26072894',
        token_id: '1',
        image_url:
            'https://static.looksrare.org/0x88c3a90a8eaF00b8bEccA576A33eeB138C285eB0/744',
        name: 'dotdotdot 1',
        owner: {
            address: '',
            user: '',
            config: '',
        },
        description: null,
        animation: null,
        last_sale: null,
        collection: {
            name: 'dotdotdot',
            address: '0xd28dD4ddf3C0fdeBbdE14FC7eb2e98445AB4D557',
            type: 'ERC721',
            isVerified: true,
            totalSupply: 4870,
            description: null,
            owner: {
                address: '0x74B01c2371988F6bC173E7386F3e012790E57F8a',
                name: null,
                isVerified: false,
                avatar: null,
            },
            floorOrder: { price: '99000000000000000' },
        },
        bids: [
            {
                isOrderAsk: false,
                signer: '0x705DDE500E13467C3014feEEF9F92CFC8dea2C0e',
                collection: {
                    address: '0xd28dD4ddf3C0fdeBbdE14FC7eb2e98445AB4D557',
                },
                price: '60000000000000000',
                amount: '1',
                strategy: '0x86F909F70813CdB1Bc733f4D97Dc6b03B8e7E8F3',
                currency: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
                nonce: '36',
                startTime: '1646701090',
                endTime: '1647302283',
                minPercentageToAsk: '8500',
                params: null,
                signature:
                    '0x8f7797f8a9a5041b44519908f34e14d1b041e694d975a2b3179ffda6ed2e87514ceaa7a54f01a2d99c6088701adc753003655d012b3c17683f72b97e024c9fe41c',
                token: null,
                hash: '0xad36ab0ed2486d64440aa0bdb99b5a1cdcd40a8846a0301d7f08f21b69cf1874',
            },
            {
                isOrderAsk: false,
                signer: '0xD6bef05074F450a0aae3D89f5EA57ac77085B999',
                collection: {
                    address: '0xd28dD4ddf3C0fdeBbdE14FC7eb2e98445AB4D557',
                },
                price: '40000000000000000',
                amount: '1',
                strategy: '0x86F909F70813CdB1Bc733f4D97Dc6b03B8e7E8F3',
                currency: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
                nonce: '2464',
                startTime: '1645858214',
                endTime: '1648450208',
                minPercentageToAsk: '8500',
                params: null,
                signature:
                    '0x3dc0a1f5edbaa27d5ef72d91fedc686218acff18bbdf071e0e47c89992a76cd54cd6486c7f2bab060b3795a1ada860d0c8551dbc3b98b0a6cd250f194ad3d8a41b',
                token: null,
                hash: '0x3290b306785be9e1608b708e802188414d687cdc8e19507453d9c8436b8d7c1e',
            },
        ],
        attributes: [
            {
                traitType: 'Background',
                value: 'jungle',
                displayType: 'string',
                count: 592,
                floorOrder: { price: '185000000000000000' },
            },
            {
                traitType: 'Garmet',
                value: 'coat',
                displayType: 'string',
                count: 305,
                floorOrder: { price: '240000000000000000' },
            },
        ],
    },
]
  let result = tokenItems;
  console.log(tokenItems)
  const { highest, lowest, sort, statusFilterEnabled, page, perPage } =
    req.query;

  const highPrice = parseFloat(String(highest));
  const lowPrice = parseFloat(String(lowest));
  let statusFilter = statusFilterEnabled;

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
}
