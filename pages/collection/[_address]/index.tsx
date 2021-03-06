/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import useSWR from 'swr'
import { Fragment, useEffect, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import Navbar from '~/components/features/navbars/Navbar'
import TokenCard from '~/components/features/TokenCard'
import TokenCardSkeleton from '~/components/features/TokenCardSkeleton'
import ALink from '~/components/features/ALink'
import Image from 'next/image'

const CollectionGroup: NextPage = () => {
    const [statusFilterEnabled, setStatusFilterEnabled] = useState(false)
    const [lowest, setLowest] = useState(0)
    const [highest, setHighest] = useState(0)
    const [sort, setSort] = useState('Select Sort')
    const [data, setData] = useState<any>([])
    const [isLoading, setLoading] = useState(true)
    const [hasMore, setHasMore] = useState(true)
    const [url, setUrl] = useState('')
    const [page, setPage] = useState(0)
    const router = useRouter()
    const perPage = 14

    const fetcher = (servicUrl: RequestInfo) =>
        fetch(servicUrl)
            .then((res) => res.json())
            .then((res) => {
                if (res.tokens && res.tokens.length > 0) {
                    if (page == 0) {
                        setData(res.tokens)
                    } else {
                        setData([...data, ...res.tokens])
                    }

                    setHasMore(res.hasMore)
                }

                setLoading(false)
            })

    useSWR(isLoading ? url : null, fetcher)

    useEffect(() => {
        if (router.query._address) {
            const params = new URLSearchParams({
                sort: sort,
                lowest: lowest.toString(),
                highest: highest.toString(),
                statusFilterEnabled: statusFilterEnabled.toString(),
                perPage: perPage.toString(),
                page: page.toString(),
            })

            setUrl(
                process.env.NEXT_PUBLIC_SERVER_URL +
                    'api/collections/' +
                    router.query._address +
                    '?' +
                    params.toString()
            )
            setLoading(true)
        }
    }, [
        sort,
        lowest,
        highest,
        statusFilterEnabled,
        page,
        router.query._address,
    ])

    const lowestPriceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target?.value
        setLowest(parseFloat(val))
        setPage(0)
    }

    const heighestPriceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target?.value
        setHighest(parseFloat(val))
        setPage(0)
    }

    const statusFilterEnabledHandler = (status: boolean) => {
        setStatusFilterEnabled(status)
        setPage(0)
    }

    const loadMoreHandler = () => {
        if (hasMore) {
            setPage(page + 1)
        }
    }

    const sortHandler = (text: string) => {
        setPage(0)
        const popOver = document.querySelector(
            '.sort-popover > button'
        ) as HTMLElement
        popOver?.click()
        setSort(text)
    }
    return (
        <div>
            <Head>
                <title>Jaypigs marketplace</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="min-h-screen">
                <div className="h-[190px] bg-dark-100 dark:bg-dark-400"></div>
                <div className="container px-4">
                    <div className="flex">
                        <div className="mr-8 inline-flex -translate-y-1/2 overflow-hidden rounded-full border border-dark-100 dark:border-dark-400">
                            <Image
                                width={120}
                                height={120}
                                src="/images/user.jpg"
                                alt="user"
                            />
                        </div>
                    </div>
                    <div className="justify-between lg:flex">
                        <div className="-mt-12 lg:w-1/2">
                            <h2 className="mb-2 flex items-center text-[40px]">
                                {data &&
                                    data.length > 0 &&
                                    data[0].collection.name}
                                {data &&
                                    data.length > 0 &&
                                    data[0].collection.isVerfied && (
                                        <svg
                                            viewBox="0 0 32 32"
                                            focusable="false"
                                            className="ml-4 h-6 w-6"
                                            aria-label="Verified collection"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M19.4171 3.24982L16.0007 1.33337L12.5842 3.24982L8.66732 3.29834L6.66684 6.66623L3.29895 8.66671L3.25043 12.5836L1.33398 16L3.25043 19.4165L3.29895 23.3334L6.66684 25.3338L8.66732 28.7017L12.5842 28.7503L16.0007 30.6667L19.4171 28.7503L23.334 28.7017L25.3345 25.3338L28.7024 23.3334L28.7509 19.4165L30.6673 16L28.7509 12.5836L28.7024 8.66671L25.3345 6.66623L23.334 3.29834L19.4171 3.24982ZM9.00065 16.5L14.0007 21.5L23.0007 12.6L21.4007 11L14.0007 18.4L10.6007 15L9.00065 16.5Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    )}
                            </h2>
                            <p className="mb-5 opacity-70">
                                Terraforms by Mathcastles. Onchain land art from
                                a dynamically gene...
                            </p>
                            <div className="mb-6 flex items-center">
                                <a
                                    href={
                                        'https://etherscan.io/addresss' +
                                        data.addresss
                                    }
                                    className="mr-2"
                                >
                                    <svg
                                        viewBox="0 0 32 32"
                                        focusable="false"
                                        className="mr-6 h-6 w-6"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M8.29427 14.9202C8.23713 15.0578 8.2077 15.2053 8.20767 15.3542H8.20745V22.4261C8.20724 22.6575 8.12207 22.8808 7.96813 23.0534C7.8142 23.226 7.60224 23.336 7.37256 23.3625C6.84438 23.4245 6.40013 23.4689 6.04332 23.5004C5.72393 23.529 5.40302 23.4657 5.11829 23.3181C4.83356 23.1704 4.59684 22.9445 4.43594 22.6669C3.5124 21.0575 2.93471 19.2729 2.73981 17.4272C2.54491 15.5815 2.73711 13.7154 3.3041 11.9483C3.87109 10.1812 4.80039 8.55204 6.03253 7.16507C7.26467 5.7781 8.77252 4.66385 10.4596 3.89362C12.1466 3.1234 13.9758 2.71416 15.8299 2.6921C17.6841 2.67004 19.5224 3.03565 21.2273 3.76552C22.9322 4.49539 24.466 5.57345 25.7308 6.93071C26.9955 8.28798 27.9632 9.89456 28.572 11.6477C28.6739 11.9444 28.7009 12.2619 28.6504 12.5716C28.6 12.8813 28.4737 13.1738 28.2829 13.4228C26.9677 15.1383 25.3104 16.5651 23.6752 17.7513V9.69882C23.6752 9.39858 23.5561 9.11063 23.3441 8.89823C23.1321 8.68583 22.8445 8.56635 22.5445 8.56606H20.6583C20.3582 8.56612 20.0704 8.68549 19.8582 8.89792C19.646 9.11034 19.5268 9.39843 19.5268 9.69882V19.4773C19.5267 19.663 19.4719 19.8446 19.3694 19.9993C19.2668 20.1541 19.121 20.2752 18.9501 20.3475C18.4902 20.5419 18.0179 20.7332 18.0179 20.7332V12.5306C18.0178 12.2302 17.8986 11.9421 17.6863 11.7297C17.4741 11.5173 17.1863 11.3979 16.8862 11.3978H14.998C14.6978 11.3979 14.41 11.5173 14.1977 11.7298C13.9855 11.9422 13.8663 12.2304 13.8663 12.5308V21.3683C13.8662 21.581 13.7944 21.7875 13.6624 21.9542C13.5305 22.121 13.3461 22.2382 13.1392 22.2869C12.8407 22.3573 12.5693 22.4243 12.3573 22.4872V15.3622C12.3573 15.0617 12.2381 14.7736 12.0258 14.5612C11.8136 14.3487 11.5257 14.2294 11.2256 14.2294L9.34313 14.2232C9.19429 14.2225 9.04677 14.2513 8.90906 14.3078C8.77134 14.3643 8.64614 14.4475 8.54064 14.5526C8.43513 14.6577 8.35141 14.7826 8.29427 14.9202ZM14.9547 29.2918C12.5037 29.0977 10.1541 28.2287 8.16595 26.781C15.4374 25.7463 24.4283 22.3481 29.2977 15.0789C29.3182 15.3811 29.3325 15.6841 29.3325 15.992C29.3329 18.4529 28.6532 20.866 27.3685 22.9642C26.0839 25.0624 24.2443 26.7641 22.0534 27.8808C19.8625 28.9976 17.4057 29.4859 14.9547 29.2918Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </a>
                                <a href="https://twitter.com">
                                    <svg
                                        viewBox="0 0 32 32"
                                        focusable="false"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M22.9997 20C21.4835 20.0076 20.0527 20.7028 19.1097 21.89L11.7997 17.32C12.0661 16.4602 12.0661 15.5398 11.7997 14.68L19.1097 10.11C20.6417 12.007 23.3185 12.5223 25.4452 11.3296C27.5719 10.137 28.5283 7.58426 27.7086 5.28784C26.889 2.99142 24.5325 1.62109 22.1313 2.04454C19.73 2.468 17.9844 4.56175 17.9997 7.00001C18.0044 7.44719 18.0717 7.8915 18.1997 8.32001L10.8897 12.89C9.56695 11.2248 7.33564 10.5786 5.32771 11.279C3.31977 11.9795 1.97461 13.8734 1.97461 16C1.97461 18.1266 3.31977 20.0205 5.32771 20.721C7.33564 21.4215 9.56695 20.7752 10.8897 19.11L18.1997 23.68C18.0717 24.1085 18.0044 24.5528 17.9997 25C17.9997 27.7614 20.2383 30 22.9997 30C25.7611 30 27.9997 27.7614 27.9997 25C27.9997 22.2386 25.7611 20 22.9997 20ZM22.9999 4C24.6567 4 25.9999 5.34315 25.9999 7C25.9999 8.65686 24.6567 10 22.9999 10C21.343 10 19.9999 8.65686 19.9999 7C19.9999 5.34315 21.343 4 22.9999 4ZM6.99986 19C5.343 19 3.99986 17.6569 3.99986 16C3.99986 14.3431 5.343 13 6.99986 13C8.65671 13 9.99986 14.3431 9.99986 16C9.99986 17.6569 8.65671 19 6.99986 19ZM22.9999 28C21.343 28 19.9999 26.6569 19.9999 25C19.9999 23.3431 21.343 22 22.9999 22C24.6567 22 25.9999 23.3431 25.9999 25C25.9999 26.6569 24.6567 28 22.9999 28Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center  bg-dark-100 p-4 dark:bg-dark-400 lg:w-1/2">
                            <div className="mr-1 flex-1 items-center">
                                <h4 className="font-medium">9,872</h4>
                                <h4 className="opacity-80">Items</h4>
                            </div>
                            <div className="mr-1 flex-1 items-center">
                                <h4 className="font-medium">9,872</h4>
                                <h4 className="opacity-80">Owners</h4>
                            </div>
                            <div className="mr-1 flex-1 items-center">
                                <h4 className="flex items-center font-medium">
                                    <svg
                                        viewBox="0 0 48 96"
                                        focusable="false"
                                        className="mr-2 h-6 w-3"
                                    >
                                        <path
                                            d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z"
                                            fill="#767676"
                                        ></path>
                                        <path
                                            d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z"
                                            fill="#8E8E8E"
                                        ></path>
                                        <path
                                            d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z"
                                            fill="#5F5F5F"
                                        ></path>
                                        <path
                                            d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z"
                                            fill="#8E8E8E"
                                        ></path>
                                        <path
                                            d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z"
                                            fill="#5F5F5F"
                                        ></path>
                                        <path
                                            d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z"
                                            fill="#767676"
                                        ></path>
                                    </svg>
                                    0.789
                                </h4>
                                <h4 className="opacity-80">Floor Price</h4>
                            </div>
                            <div className="flex-1 items-center">
                                <h4 className="flex items-center font-medium">
                                    <svg
                                        viewBox="0 0 48 96"
                                        focusable="false"
                                        className="mr-2 h-6 w-3"
                                    >
                                        <path
                                            d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z"
                                            fill="#767676"
                                        ></path>
                                        <path
                                            d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z"
                                            fill="#8E8E8E"
                                        ></path>
                                        <path
                                            d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z"
                                            fill="#5F5F5F"
                                        ></path>
                                        <path
                                            d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z"
                                            fill="#8E8E8E"
                                        ></path>
                                        <path
                                            d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z"
                                            fill="#5F5F5F"
                                        ></path>
                                        <path
                                            d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z"
                                            fill="#767676"
                                        ></path>
                                    </svg>
                                    2,852,269.4
                                </h4>
                                <h4 className="opacity-80">Total Vol</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-8 px-4 md:flex">
                    <Navbar
                        statusFilterEnabled={statusFilterEnabled}
                        lowest={lowest}
                        highest={highest}
                        setStatusFilterEnabled={statusFilterEnabledHandler}
                        lowestPriceHandler={lowestPriceHandler}
                        highestPriceHandler={heighestPriceHandler}
                    />
                    <div className="flex-1">
                        <div className="mb-4 flex items-center justify-between rounded-lg border border-solid border-dark-100 py-4 px-4 dark:border-dark-400">
                            <Popover className="sort-popover relative">
                                {({ open }) => (
                                    <>
                                        <Popover.Button
                                            className={`
                    ${open ? '' : 'text-opacity-90'}
                    round-sm flex w-56 justify-between border border-solid border-dark-100 py-2 px-4 dark:border-dark-400 dark:bg-dark-300`}
                                        >
                                            <span>{sort}</span>
                                            <svg
                                                viewBox="0 0 32 32"
                                                focusable="false"
                                                className="h-6 w-6"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M16 10L26 20L24.6 21.4L16 12.8L7.4 21.4L6 20L16 10Z"
                                                    fill="currentColor"
                                                ></path>
                                            </svg>
                                        </Popover.Button>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-56 -translate-x-1/2 transform px-4 sm:px-0">
                                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                    <div className="relative bg-white p-2">
                                                        <button
                                                            className="w-full rounded-lg p-2 text-left text-dark-400 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                                            onClick={() =>
                                                                sortHandler(
                                                                    'Price Ascending'
                                                                )
                                                            }
                                                        >
                                                            Price Ascending
                                                        </button>
                                                        <hr className="border-t border-dark-100 dark:border-dark-300" />
                                                        <button
                                                            className="w-full rounded-lg p-2 text-left text-dark-400 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                                            onClick={() =>
                                                                sortHandler(
                                                                    'Price Descending'
                                                                )
                                                            }
                                                        >
                                                            Price Decending
                                                        </button>
                                                        <hr className="border-t border-dark-100 dark:border-dark-300" />
                                                        <button
                                                            className="w-full rounded-lg p-2 text-left text-dark-400 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                                            onClick={() =>
                                                                sortHandler(
                                                                    'Recent Activity'
                                                                )
                                                            }
                                                        >
                                                            Recent Activity
                                                        </button>
                                                    </div>
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Popover>
                            <ALink
                                href="/explore/activity"
                                className="rounded-full border-0 bg-dark-500 bg-opacity-50 px-4 py-2 font-medium text-white hover:bg-dark-500 dark:bg-white dark:text-black"
                            >
                                Activity
                            </ALink>
                        </div>
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7">
                            {data.map((token: any, index: number) => (
                                <TokenCard token={token} key={index} />
                            ))}
                            {isLoading && <TokenCardSkeleton total={14} />}
                        </div>
                        {hasMore && (
                            <div className="mt-8 text-center">
                                <button
                                    className="mx-auto border-0 bg-dark-400 bg-opacity-50 px-4 py-2 font-medium text-white hover:bg-dark-300"
                                    onClick={loadMoreHandler}
                                >
                                    Load More
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default CollectionGroup
