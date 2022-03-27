/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextPage } from 'next'
import {useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
// import { useState } from 'react'
import useSWR from 'swr'
import LoadingOverlay from '~/components/features/LoadingOverlay'
import ALink from '~/components/features/ALink'
import { timeDifference } from '~/utils'
import { ethers } from 'ethers'
import CoinbaseWalletSDK from "@coinbase/wallet-sdk"
import Web3Modal from "web3modal";
import {abi, contractAddress} from '~/contract';

const providerOptions = {
  "custom-walletlink": {
    display: {
      logo: "https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0",
      name: "Coinbase",
      description: "Connect to Coinbase Wallet (not Coinbase App)",
    },
    options: {
      appName: "Coinbase", // Your app name
      networkUrl: "https://rpc.ankr.com/avalanche_fuji-c",
      chainId: 43113,
    },
    package: CoinbaseWalletSDK,
    connector: async (_: null, options: any) => {
      const { appName, networkUrl, chainId } = options;
      const walletLink = new CoinbaseWalletSDK({
        appName,
      });
      const provider = walletLink.makeWeb3Provider(networkUrl, chainId);
      await provider.enable();
      return provider;
    },
  }
};


const nftAddress="0x0d454C3964fE08b9ba4CCa8cF4Bf1534C0B5B8f9";
const tokenId="0";
const price="100000";
const nftAbi=[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name_",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol_",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "baseURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenOfOwnerByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];


const Collection: NextPage = () => {

    const [price,setPrice]=useState();
    const [priceToBuy, setPriceToBuy]=useState();
    useEffect(()=>{showPrice();},);

    const approve = async ()=>{

      const web3Modal = new Web3Modal({
        providerOptions // required
      });
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      const signer = library.getSigner();
      let address = router.query._address!
      const contract = new ethers.Contract(address.toString(), nftAbi, signer);
      const transaction = await contract.setApprovalForAll(contractAddress,"1");
      await transaction.wait();

    }

    async function showPrice(){
      const web3Modal = new Web3Modal({
        providerOptions // required
      });
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      const signer = library.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      const priceToBuy= await contract.getPrice(router.query._address,router.query._tokenId);
      setPriceToBuy(priceToBuy.toString());
    }

    const priceChange = (e : any) => {
      setPrice(e.target.value);
    }

    const router = useRouter()
    const url =
        process.env.NEXT_PUBLIC_SERVER_URL +
        'api/collections/' +
        router.query._address +
        '/' +
        router.query._tokenId

    const fetcher = (servicUrl: RequestInfo) =>
        fetch(servicUrl).then((res) => res.json())

    const connectWallet = () => {
        const button = document.getElementById('wallet-connect') as HTMLElement
        button.click()
    }

    const list = async () => {

      const web3Modal = new Web3Modal({
        providerOptions // required
      });
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      const signer = library.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      const transaction = await contract.listAsset(router.query._address,router.query._tokenId, price);
      await transaction.wait();

    }

    const buy = async () => {
      const web3Modal = new Web3Modal({
        providerOptions // required
      });
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      const signer = library.getSigner();
      //const readOnlyContract= new ethers.Contract(contractAddress, abi, library);
      const contract = new ethers.Contract(contractAddress, abi, signer);
      const overrides = { value: priceToBuy};
      const transaction = await contract.buy(router.query._address,router.query._tokenId, overrides);
      await transaction.wait();
    }

    const { data } = useSWR(router.query._address ? url : null, fetcher)

    if (!data || !data.token) {
        return <LoadingOverlay />
    }

    return (
        <div>
            <Head>
                <title>Jaypigs collections page</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="my-8 min-h-screen">
                <div className="container">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 ">
                        <div className="border border-dark-100 py-6 px-4 dark:border-dark-400 lg:col-span-2">
                            <h2 className="mb-8 text-lg text-pink-500">
                                {data.token.collection.name}
                            </h2>
                            <h2 className="mb-6 text-[42px] font-medium">
                                {data.token.name}
                            </h2>
                            <div className="mb-4 bg-dark-100 p-4 dark:bg-dark-400">
                                <div className="flex items-center justify-between">
                                    <span>Price</span>
                                    <span>Time left 7h 15m</span>
                                </div>
                                <div className="mb-6 flex items-center">
                                    {priceToBuy} Avax
                                </div>
                                {data.token.bids.length > 0 &&
                                    data.token.bids[0] && (
                                        <div className="flex items-center">
                                            <span className="mr-3 dark:opacity-60">
                                                Top Offer
                                            </span>
                                            <svg
                                                viewBox="0 0 48 96"
                                                focusable="false"
                                                className="mr-1 h-5 w-2.5"
                                            >
                                                <path
                                                    d="M23.9913 8.91397L23.4668 10.6955V62.3857L23.9913 62.909L47.9848 48.7262L23.9913 8.91397Z"
                                                    fill="#DF5960"
                                                ></path>
                                                <path
                                                    d="M23.9942 8.91397L0 48.7262L23.9942 62.909V37.82V8.91397Z"
                                                    fill="#EE9398"
                                                ></path>
                                                <path
                                                    d="M23.9909 67.4524L23.6953 67.8128V86.2252L23.9909 87.0881L47.9985 53.2773L23.9909 67.4524Z"
                                                    fill="#DF5960"
                                                ></path>
                                                <path
                                                    d="M23.9935 87.0879V67.4522L0 53.2772L23.9935 87.0879Z"
                                                    fill="#EE9398"
                                                ></path>
                                                <path
                                                    d="M23.9941 62.9063L47.987 48.7239L23.9941 37.818V62.9063Z"
                                                    fill="#CF373E"
                                                ></path>
                                                <path
                                                    d="M0 48.7242L23.9935 62.9066V37.8183L0 48.7242Z"
                                                    fill="#DF5960"
                                                ></path>
                                            </svg>
                                            <span className="font-medium">
                                                {data.token.bids[0].price /
                                                    1000000000000000000}
                                            </span>
                                        </div>
                                    )}
                            </div>
                            {data.token.collection && (
                                <h3 className="mb-4">
                                    Owner: &nbsp;
                                    <ALink
                                        href={`/accounts/${data.token.collection.owner.address}`}
                                        className="text-pink-400"
                                    >
                                        {data.token.collection.owner.address.substr(
                                            2,
                                            5
                                        )}
                                    </ALink>
                                </h3>
                            )}
                            <div className="mb-8 text-right">

                                <button
                                    className="mx-auto mb-8 rounded-lg border-0 bg-dark-400 bg-opacity-50 px-12 py-4 font-medium text-white transition hover:bg-dark-300"
                                    onClick={approve}
                                >
                                    Approve
                                </button>
                                <br/>
                                <input  type="text" className="text-black" placeholder="Set Price"
                                value={price} onChange={priceChange} />
                                <button
                                    className="mx-auto mb-8 rounded-lg border-0 bg-dark-400 bg-opacity-50 px-12 py-4 font-medium text-white transition hover:bg-dark-300"
                                    onClick={list}
                                >
                                    List your token
                                </button>
                                <button
                                    className="mx-auto mb-8 rounded-lg border-0 bg-dark-400 bg-opacity-50 px-12 py-4 font-medium text-white transition hover:bg-dark-300"
                                    onClick={buy}
                                >
                                    Buy
                                </button>
                            </div>
                            <div>
                                <Tab.Group>
                                    <Tab.List
                                        className={
                                            'list nav nav-tabs flex flex-wrap items-center md:justify-start'
                                        }
                                    >
                                        <Tab
                                            className={({ selected }) =>
                                                (selected
                                                    ? 'border-pink-500 '
                                                    : 'border-transparent ') +
                                                'text-md group mr-2 flex items-center border-b px-2 py-2 font-medium'
                                            }
                                        >
                                            About
                                        </Tab>
                                        <Tab
                                            className={({ selected }) =>
                                                (selected
                                                    ? 'border-pink-500 '
                                                    : 'border-transparent ') +
                                                'text-md group mr-2 flex items-center border-b px-2 py-2 font-medium'
                                            }
                                        >
                                            Offers
                                        </Tab>
                                    </Tab.List>
                                    <div className="-mt-[1px] mb-4 border-b border-dark-100 dark:border-dark-400"></div>
                                    <Tab.Panels>
                                        <Tab.Panel>
                                            <p className="mb-6">
                                                {
                                                    data.token.collection
                                                        .description
                                                }
                                            </p>
                                            <h3 className="mb-4 text-lg font-medium">
                                                Properties
                                            </h3>
                                            {data.token.attributes.map(
                                                (
                                                    attribute: any,
                                                    index: number
                                                ) => (
                                                    <div
                                                        className="mb-2 grid grid-cols-4 gap-0 rounded-lg border border-dark-100 py-4 px-2 dark:border-dark-400"
                                                        key={index}
                                                    >
                                                        <div className="col-span-2">
                                                            <h4 className="text-sm">
                                                                {
                                                                    attribute.traitType
                                                                }
                                                            </h4>
                                                            <h3 className="font-medium">
                                                                {
                                                                    attribute.value
                                                                }
                                                            </h3>
                                                        </div>
                                                        <div className="col-span-1 text-right">
                                                            Ξ0.015
                                                        </div>
                                                        <div className="col-span-1 text-right">
                                                            <span className="font-medium">
                                                                {
                                                                    attribute.count
                                                                }
                                                            </span>
                                                        </div>
                                                    </div>
                                                )
                                            )}

                                            <div className="my-4 bg-dark-100 p-4 dark:bg-dark-400">
                                                <h3 className="mb-1 flex items-center justify-between overflow-hidden">
                                                    <span className="mr-4">
                                                        Token ID
                                                    </span>
                                                    <span className="truncate">
                                                        {data.token.tokenId}
                                                    </span>
                                                </h3>
                                                <h3 className="mb-1 flex items-center justify-between overflow-hidden">
                                                    <span className="mr-4">
                                                        Contract
                                                    </span>
                                                    <span className="truncate">
                                                        {
                                                            data.token
                                                                .collection
                                                                .address
                                                        }
                                                    </span>
                                                </h3>
                                                <h3 className="mb-1 flex items-center justify-between overflow-hidden">
                                                    <span className="mr-4">
                                                        Blockchain
                                                    </span>
                                                    <span className="truncate">
                                                        Avalanche
                                                    </span>
                                                </h3>
                                                <h3 className="mb-1 flex items-center justify-between overflow-hidden">
                                                    <span className="mr-4">
                                                        Token Standard
                                                    </span>
                                                    <span className="truncate">
                                                        {
                                                            data.token
                                                                .collection.type
                                                        }
                                                    </span>
                                                </h3>
                                            </div>
                                        </Tab.Panel>
                                        <Tab.Panel>
                                            {data.token.bids.length == 0 ? (
                                                <div className="flex flex-col items-center justify-center">
                                                    <svg
                                                        viewBox="0 0 32 32"
                                                        focusable="false"
                                                        className="mb-6 h-40 w-40 text-dark-100 dark:text-dark-400"
                                                    >
                                                        <g>
                                                            <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M16 18.5946C13.2546 18.5946 11.027 16.3692 11.027 13.6216C11.027 10.874 13.2546 8.64863 16 8.64863C18.7454 8.64863 20.973 10.874 20.973 13.6216C20.973 16.3692 18.7454 18.5946 16 18.5946ZM13.8378 13.6216C13.8378 14.8162 14.8064 15.7838 16 15.7838C17.1936 15.7838 18.1622 14.8162 18.1622 13.6216C18.1622 12.427 17.1936 11.4594 16 11.4594C14.8064 11.4594 13.8378 12.427 13.8378 13.6216Z"
                                                                fill="currentColor"
                                                            ></path>
                                                            <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M0 13.6282L9.51351 4.10809H22.4865L32 13.6282L16 29.6216L0 13.6282ZM23.3514 10.1621C19.3091 6.10213 12.6909 6.10215 8.64865 10.1621L5.18919 13.6216L8.64865 17.0811C12.6909 21.1411 19.3091 21.1411 23.3514 17.0811L26.8108 13.6216L23.3514 10.1621Z"
                                                                fill="currentColor"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                    <h3 className="font-medium">
                                                        No offers found
                                                    </h3>
                                                </div>
                                            ) : (
                                                <div>
                                                    {data.token.bids.map(
                                                        (
                                                            bid: any,
                                                            index: number
                                                        ) => (
                                                            <div
                                                                className="border-b border-dark-100 py-4 dark:border-dark-400"
                                                                key={index}
                                                            >
                                                                <div className="mb-4 flex items-center">
                                                                    <svg
                                                                        viewBox="0 0 48 96"
                                                                        focusable="false"
                                                                        className="mr-1 h-4 w-2.5"
                                                                    >
                                                                        <path
                                                                            d="M23.9913 8.91397L23.4668 10.6955V62.3857L23.9913 62.909L47.9848 48.7262L23.9913 8.91397Z"
                                                                            fill="#DF5960"
                                                                        ></path>
                                                                        <path
                                                                            d="M23.9942 8.91397L0 48.7262L23.9942 62.909V37.82V8.91397Z"
                                                                            fill="#EE9398"
                                                                        ></path>
                                                                        <path
                                                                            d="M23.9909 67.4524L23.6953 67.8128V86.2252L23.9909 87.0881L47.9985 53.2773L23.9909 67.4524Z"
                                                                            fill="#DF5960"
                                                                        ></path>
                                                                        <path
                                                                            d="M23.9935 87.0879V67.4522L0 53.2772L23.9935 87.0879Z"
                                                                            fill="#EE9398"
                                                                        ></path>
                                                                        <path
                                                                            d="M23.9941 62.9063L47.987 48.7239L23.9941 37.818V62.9063Z"
                                                                            fill="#CF373E"
                                                                        ></path>
                                                                        <path
                                                                            d="M0 48.7242L23.9935 62.9066V37.8183L0 48.7242Z"
                                                                            fill="#DF5960"
                                                                        ></path>
                                                                    </svg>
                                                                    <span className="mr-3 font-medium">
                                                                        {bid.price /
                                                                            1000000000000000000}
                                                                    </span>
                                                                    <span className="mr-4 flex items-center rounded-full border border-pink-400 px-3">
                                                                        <svg
                                                                            viewBox="0 0 32 32"
                                                                            focusable="false"
                                                                            className="mr-2 h-3 w-3"
                                                                        >
                                                                            <path
                                                                                fillRule="evenodd"
                                                                                clipRule="evenodd"
                                                                                d="M15.9997 17V18H13.9997V7.5C13.9997 6.94772 13.552 6.5 12.9997 6.5C12.4475 6.5 11.9997 6.94772 11.9997 7.5V21.9638L6.80648 18.1869C6.27698 17.8018 5.53034 17.962 5.2055 18.5305C4.94939 18.9787 5.03964 19.5447 5.42242 19.891L13.8521 27.5179C14.1951 27.8282 14.6411 28 15.1035 28H21.2272C23.863 28 25.9997 25.8633 25.9997 23.2274V12C25.9997 11.4477 25.552 11 24.9997 11C24.4494 11 24.0029 11.4445 23.9998 11.9941V18H23.9997H21.9998H21.9997V12L21.9998 11.9897V7C21.9998 6.44772 21.552 6 20.9998 6C20.4475 6 19.9998 6.44772 19.9998 7V16.5V18H17.9998V16.5V7V5C17.9998 4.44772 17.552 4 16.9998 4C16.4475 4 15.9998 4.44772 15.9998 5V17H15.9997ZM19.8947 4.21009C20.2367 4.07452 20.6095 4 20.9998 4C22.6566 4 23.9998 5.34315 23.9998 7V9.1707C24.3125 9.06015 24.6491 9 24.9997 9C26.6566 9 27.9997 10.3431 27.9997 12V23.2274C27.9997 26.9678 24.9676 30 21.2272 30H15.1035C14.1452 30 13.221 29.644 12.5103 29.001L4.08059 21.3741C3.00138 20.3977 2.74694 18.8018 3.46901 17.5382C4.38486 15.9355 6.48994 15.4837 7.98283 16.5694L9.99974 18.0362V7.5C9.99974 5.84315 11.3429 4.5 12.9997 4.5C13.3568 4.5 13.6993 4.56239 14.017 4.67685C14.1781 3.17197 15.4521 2 16.9998 2C18.3832 2 19.548 2.93647 19.8947 4.21009Z"
                                                                                fill="currentColor"
                                                                            ></path>
                                                                        </svg>
                                                                        Collection
                                                                    </span>
                                                                    {data.token
                                                                        .collection
                                                                        .floorOrder && (
                                                                        <span className="opacity-60">
                                                                            {Math.round(
                                                                                (parseInt(
                                                                                    bid.price
                                                                                ) *
                                                                                    100) /
                                                                                    parseInt(
                                                                                        data
                                                                                            .token
                                                                                            .collection
                                                                                            .floorOrder
                                                                                            .price
                                                                                    )
                                                                            )}
                                                                            %
                                                                            Below
                                                                            floor
                                                                        </span>
                                                                    )}
                                                                </div>
                                                                <div className="flex items-center">
                                                                    From
                                                                    <ALink
                                                                        href={`/accounts/${bid.signer}`}
                                                                        className="mr-8 ml-3 font-medium"
                                                                    >
                                                                        {bid.signer.substr(
                                                                            2,
                                                                            6
                                                                        )}
                                                                    </ALink>
                                                                    <span className="mr-5 opacity-60">
                                                                        {timeDifference(
                                                                            bid.startTime +
                                                                                '000'
                                                                        )}
                                                                    </span>
                                                                    <span className="mr-3 flex items-center opacity-60">
                                                                        Expires{' '}
                                                                        {timeDifference(
                                                                            bid.endTime +
                                                                                '000'
                                                                        )}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            )}
                                        </Tab.Panel>
                                    </Tab.Panels>
                                </Tab.Group>
                            </div>
                        </div>
                        <div className="relative border border-dark-100 py-6 px-4 dark:border-dark-400 lg:col-span-3">
                            <div className="sticky top-40 p-4">
                                <Image
                                    src={data.token.image_url}
                                    alt="token"
                                    className="sticky mx-auto"
                                    width={300}
                                    height={300}
                                    layout="responsive"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Collection
