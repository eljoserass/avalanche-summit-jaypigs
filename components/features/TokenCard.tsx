/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'
import ALink from './ALink'

const TokenCard = ({ token }: any) => {

    

    return (
        <div className="rounded-md border border-solid border-dark-100 p-2 dark:border-dark-400">
            <div className="mb-1 flex items-center truncate">
                {token.collection?.isVerified && (
                    <svg
                        viewBox="0 0 32 32"
                        focusable="false"
                        className="mr-1 h-4 w-4"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19.4171 3.24982L16.0007 1.33337L12.5842 3.24982L8.66732 3.29834L6.66684 6.66623L3.29895 8.66671L3.25043 12.5836L1.33398 16L3.25043 19.4165L3.29895 23.3334L6.66684 25.3338L8.66732 28.7017L12.5842 28.7503L16.0007 30.6667L19.4171 28.7503L23.334 28.7017L25.3345 25.3338L28.7024 23.3334L28.7509 19.4165L30.6673 16L28.7509 12.5836L28.7024 8.66671L25.3345 6.66623L23.334 3.29834L19.4171 3.24982ZM9.00065 16.5L14.0007 21.5L23.0007 12.6L21.4007 11L14.0007 18.4L10.6007 15L9.00065 16.5Z"
                            fill="currentColor"
                        ></path>
                    </svg>
                )}
                <span className="overflow-hidden text-ellipsis font-medium">
                    {token.collection?.name}
                </span>
            </div>
            <div className="relative mb-2 h-56">
                <ALink
                    href={`/collection/${token.collection.address}/${token.token_id}`}
                >
                    <Image
                        src={token.image_url}
                        layout="fill"
                        alt="token"
                        className="object-cover"
                    />
                </ALink>
            </div>
            <div className="-mx-2 mb-1 bg-dark-100 px-2 dark:bg-dark-400">
                <h3 className="mb-1 flex items-center justify-between">
                    <span>Make an offer</span>
                </h3>
                <h3 className="flex justify-between truncate text-lg font-medium">
                    <span className="overflow-hidden text-ellipsis">
                        <ALink
                            href={`/collection/${token.collection.address}/${token.token_id}`}
                        >
                            {token.name}
                        </ALink>
                    </span>
                    {token.collection.floorOrder &&
                    token.collection.floorOrder.price ? (
                        <span className="flex items-center">
                            <svg
                                viewBox="0 0 48 96"
                                focusable="false"
                                className="mr-1 h-4 w-4"
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
                            {token.collection.floorOrder.price /
                                1000000000000000000}
                        </span>
                    ) : token.bids.length > 0 && token.bids[0] ? (
                        <span className="flex items-center">
                            <svg
                                viewBox="0 0 48 96"
                                focusable="false"
                                className="mr-1 h-4 w-4"
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
                            {token.bids[0].price / 1000000000000000000}
                        </span>
                    ) : (
                        ''
                    )}
                </h3>
            </div>
            {token.bids.length > 0 && token.bids[0] && (
                <h3 className="flex items-center justify-end truncate">
                    <span className="mr-2 overflow-hidden text-ellipsis opacity-60">
                        Offer
                    </span>

                    <span className="flex items-center">
                        <svg
                            viewBox="0 0 48 96"
                            focusable="false"
                            className="mr-1 h-4 w-4"
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
                        {token.bids[0].price / 1000000000000000000}
                    </span>
                </h3>
            )}
        </div>
    )
}

export default TokenCard
