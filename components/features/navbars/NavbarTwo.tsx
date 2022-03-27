import { Disclosure, Transition } from '@headlessui/react'
import { useState } from 'react'

interface NavbarProps {
    typeList: string[]
    handleTypeClick: (type: string) => void
}

const Navbar = ({ typeList, handleTypeClick }: NavbarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const toggleCollpase = () => {
        if (window.innerWidth > 768) {
            setCollapsed(!collapsed)
        }
    }

    const isInFilterList = (type: string) => {
        return typeList.includes(type)
    }

    return (
        <div
            className={`mb-4 md:mb-0 md:mr-4 ${
                collapsed ? '' : 'md:w-1/3 lg:w-1/4 xl:w-1/5'
            }`}
        >
            <div className="sticky top-[145px] rounded-lg border border-solid border-dark-100 dark:border-dark-400">
                <div
                    className="flex cursor-pointer items-center py-4 px-4 dark:bg-dark-400"
                    onClick={toggleCollpase}
                >
                    <svg
                        viewBox="0 0 32 32"
                        focusable="false"
                        className="h-6 w-6"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18 28H14C12.8954 28 12 27.1046 12 26V18.41L4.59 11C4.21441 10.6266 4.00223 10.1196 4 9.59V6C4 4.89543 4.89543 4 6 4H26C27.1046 4 28 4.89543 28 6V9.59C27.9978 10.1196 27.7856 10.6266 27.41 11L20 18.41V26C20 27.1046 19.1046 28 18 28ZM6 6V9.59L14 17.59V26H18V17.59L26 9.59V6H6Z"
                            fill="currentColor"
                        ></path>
                    </svg>
                    <span
                        className={`${
                            collapsed ? ' hidden ' : ''
                        } ml-2 font-medium`}
                    >
                        Filters
                    </span>
                    <svg
                        viewBox="0 0 32 32"
                        focusable="false"
                        className={`${
                            collapsed ? ' hidden ' : ''
                        } ml-auto h-6 w-6`}
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10 16L20 6L21.4 7.4L12.8 16L21.4 24.6L20 26L10 16Z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </div>
                <hr className="border-dark-100 dark:border-dark-300" />
                <Disclosure defaultOpen={true}>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full items-center py-4 px-4 dark:bg-dark-400">
                                <svg
                                    viewBox="0 0 32 32"
                                    focusable="false"
                                    className="h-6 w-6"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M10.2708 7.47121C9.93345 6.88642 9.90866 6.14255 10.2704 5.51582L11.7355 2.97737C12.275 2.04274 13.4697 1.72252 14.404 2.26213L21.1711 6.17032C22.1054 6.70992 22.4256 7.90503 21.8861 8.83966L20.421 11.3781C20.0597 12.0041 19.4043 12.3545 18.7302 12.3555L17.1346 15.12L28.9775 21.9597L28.0007 23.652L16.1578 16.8123L14.5613 19.5784C14.8976 20.1629 14.9219 20.9058 14.5606 21.5319L13.0954 24.0703C12.556 25.0049 11.3613 25.3252 10.4269 24.7856L3.65984 20.8774C2.7255 20.3378 2.40537 19.1426 2.94481 18.208L4.40993 15.6696C4.77167 15.0428 5.42807 14.6924 6.10302 14.6922L10.2708 7.47121ZM18.7295 10.4006L11.9633 6.49285L11.9625 6.49236L13.4273 3.95442L20.1944 7.86261L18.7295 10.4006ZM11.8321 8.67417L7.92546 15.4429L13.0008 18.374L16.9075 11.6053L11.8321 8.67417ZM4.63658 19.1851L6.1017 16.6466L12.8688 20.5548L11.4037 23.0933L4.63658 19.1851ZM29.0233 29H30V27.0459H29.0233H2.97674H2V29H2.97674H29.0233Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                                <span
                                    className={`${
                                        collapsed ? ' hidden ' : ''
                                    } ml-2 font-medium`}
                                >
                                    Item Status
                                </span>
                                <svg
                                    viewBox="0 0 32 32"
                                    focusable="false"
                                    className={`ml-auto h-6 w-6 ${
                                        collapsed ? 'hidden ' : ''
                                    } ${open ? '' : 'rotate-180 transform'}`}
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M16 10L26 20L24.6 21.4L16 12.8L7.4 21.4L6 20L16 10Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </Disclosure.Button>

                            <Transition
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                                className={`${collapsed ? 'hidden' : ''}`}
                            >
                                <Disclosure.Panel className="p-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <span
                                            className={`w-full cursor-pointer rounded-lg border border-dark-100 py-2 px-3 text-center  dark:border-dark-400 ${
                                                isInFilterList('Mint')
                                                    ? 'bg-dark-100 dark:bg-dark-400'
                                                    : ''
                                            }`}
                                            onClick={() =>
                                                handleTypeClick('Mint')
                                            }
                                        >
                                            Mint
                                        </span>
                                        <span
                                            className={`w-full cursor-pointer rounded-lg border border-dark-100 py-2 px-3 text-center  dark:border-dark-400 ${
                                                isInFilterList('Transfer')
                                                    ? 'bg-dark-100 dark:bg-dark-400'
                                                    : ''
                                            }`}
                                            onClick={() =>
                                                handleTypeClick('Transfer')
                                            }
                                        >
                                            Transfer
                                        </span>
                                        <span
                                            className={`w-full cursor-pointer rounded-lg border border-dark-100 py-2 px-3 text-center  dark:border-dark-400 ${
                                                isInFilterList('Sale')
                                                    ? 'bg-dark-100 dark:bg-dark-400'
                                                    : ''
                                            }`}
                                            onClick={() =>
                                                handleTypeClick('Sale')
                                            }
                                        >
                                            Sale
                                        </span>
                                        <span
                                            className={`w-full cursor-pointer rounded-lg border border-dark-100 py-2 px-3 text-center  dark:border-dark-400 ${
                                                isInFilterList('List')
                                                    ? 'bg-dark-100 dark:bg-dark-400'
                                                    : ''
                                            }`}
                                            onClick={() =>
                                                handleTypeClick('List')
                                            }
                                        >
                                            List
                                        </span>
                                        <span
                                            className={`w-full cursor-pointer rounded-lg border border-dark-100 py-2 px-3 text-center  dark:border-dark-400 ${
                                                isInFilterList('Offer')
                                                    ? 'bg-dark-100 dark:bg-dark-400'
                                                    : ''
                                            }`}
                                            onClick={() =>
                                                handleTypeClick('Offer')
                                            }
                                        >
                                            Offer
                                        </span>
                                        <span
                                            className={`w-full cursor-pointer rounded-lg border border-dark-100 py-2 px-3 text-center  dark:border-dark-400 ${
                                                isInFilterList('Cancel Listing')
                                                    ? 'bg-dark-100 dark:bg-dark-400'
                                                    : ''
                                            }`}
                                            onClick={() =>
                                                handleTypeClick(
                                                    'Cancel Listing'
                                                )
                                            }
                                        >
                                            Cancel Listing
                                        </span>
                                        <span
                                            className={`w-full cursor-pointer rounded-lg border border-dark-100 py-2 px-3 text-center dark:border-dark-400  ${
                                                isInFilterList('Cancel Offer')
                                                    ? 'bg-dark-100 dark:bg-dark-400'
                                                    : ''
                                            }`}
                                            onClick={() =>
                                                handleTypeClick('Cancel Offer')
                                            }
                                        >
                                            Cancel Offer
                                        </span>
                                    </div>
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    )
}

export default Navbar
