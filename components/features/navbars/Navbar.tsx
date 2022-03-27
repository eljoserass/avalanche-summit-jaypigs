import { Disclosure, Transition } from '@headlessui/react'
import { Switch } from '@headlessui/react'
import { useState } from 'react'

interface NavbarProps {
    statusFilterEnabled: boolean
    setStatusFilterEnabled: (statusFilterEnabled: boolean) => void
    lowest: number | undefined
    highest: number | undefined
    lowestPriceHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
    highestPriceHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Navbar = ({
    statusFilterEnabled,
    lowest,
    highest,
    setStatusFilterEnabled,
    lowestPriceHandler,
    highestPriceHandler,
}: NavbarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const toggleCollpase = () => {
        if (window.innerWidth > 768) {
            setCollapsed(!collapsed)
        }
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
                                    className={`${
                                        collapsed ? 'hidden ' : ''
                                    } ml-auto h-6 w-6 ${
                                        open ? '' : 'rotate-180 transform'
                                    }`}
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
                                className={`${collapsed ? ' hidden ' : ''}`}
                            >
                                <Disclosure.Panel className="py-2 px-2">
                                    <div className="flex items-center justify-between py-4 px-2">
                                        <span className="font-medium">
                                            Buy Now
                                        </span>
                                        <Switch
                                            checked={statusFilterEnabled}
                                            onChange={setStatusFilterEnabled}
                                            className={`${
                                                statusFilterEnabled
                                                    ? 'bg-dark-400'
                                                    : 'bg-dark-300'
                                            } relative inline-flex h-7 w-[74px] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                                        >
                                            <span className="sr-only">
                                                Use setting
                                            </span>
                                            <span
                                                aria-hidden="true"
                                                className={`${
                                                    statusFilterEnabled
                                                        ? 'translate-x-9'
                                                        : 'translate-x-0'
                                                } pointer-events-none inline-block h-6 w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                            />
                                        </Switch>
                                    </div>
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
                <hr className="border-dark-100 dark:border-dark-300" />
                <Disclosure defaultOpen={true}>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full items-center py-4 px-4 dark:bg-dark-400">
                                <svg
                                    viewBox="0 0 64 64"
                                    focusable="false"
                                    className="h-6 w-6"
                                >
                                    <path
                                        d="M28 18C25.7909 18 24 19.7909 24 22V30C24 32.2091 25.7909 34 28 34H36V42H24V46H30V52H34V46H36C38.2091 46 40 44.2091 40 42V34C40 31.7909 38.2091 30 36 30H28V22H40V18H34V12H30V18H28Z"
                                        fill="currentColor"
                                    ></path>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M32 4C16.536 4 4 16.536 4 32C4 47.464 16.536 60 32 60C47.464 60 60 47.464 60 32C60 16.536 47.464 4 32 4ZM32 8C45.2548 8 56 18.7452 56 32C56 45.2548 45.2548 56 32 56C18.7452 56 8 45.2548 8 32C8 18.7452 18.7452 8 32 8Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                                <span
                                    className={`${
                                        collapsed ? ' hidden ' : ''
                                    } ml-2 font-medium`}
                                >
                                    Price Range
                                </span>
                                <svg
                                    viewBox="0 0 32 32"
                                    focusable="false"
                                    className={`${
                                        collapsed ? 'hidden ' : ''
                                    } ml-auto h-6 w-6 ${
                                        open ? '' : 'rotate-180 transform'
                                    }`}
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
                                className={`${collapsed ? ' hidden ' : ''}`}
                            >
                                <Disclosure.Panel className="py-2 px-2">
                                    <div className="flex items-center py-4 px-2">
                                        <div className="mb-4 mr-1 flex-1">
                                            <label className="mb-2 block text-sm font-bold text-dark-400 dark:text-white">
                                                Lowest
                                            </label>
                                            <input
                                                className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-black shadow focus:outline-none"
                                                type="number"
                                                step={0.01}
                                                placeholder="0"
                                                value={lowest}
                                                onChange={lowestPriceHandler}
                                            />
                                        </div>
                                        <div className="mb-4 mr-2 flex-1">
                                            <label className="mb-2 block text-sm font-bold text-dark-400 dark:text-white">
                                                Highest
                                            </label>
                                            <input
                                                className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-black shadow focus:outline-none"
                                                type="number"
                                                step={0.01}
                                                placeholder="0"
                                                value={highest}
                                                onChange={highestPriceHandler}
                                            />
                                        </div>
                                        <svg
                                            viewBox="0 0 96 96"
                                            focusable="false"
                                            className="mt-2 h-6 w-6"
                                        >
                                            <g clipPath="url(#eth-clip-1)">
                                                <path
                                                    d="M47.9907 0L47.3467 2.18771V65.6644L47.9907 66.307L77.4553 48.8902L47.9907 0Z"
                                                    fill="#757576"
                                                ></path>
                                                <path
                                                    d="M47.9912 0L18.5259 48.8902L47.9912 66.307V35.4971V0Z"
                                                    fill="#8E8E8E"
                                                ></path>
                                                <path
                                                    d="M47.9909 71.8882L47.6279 72.3309V94.9422L47.9909 96.0019L77.4735 54.4805L47.9909 71.8882Z"
                                                    fill="#5F5F5F"
                                                ></path>
                                                <path
                                                    d="M47.9912 96.0019V71.8882L18.5259 54.4805L47.9912 96.0019Z"
                                                    fill="#8E8E8E"
                                                ></path>
                                                <path
                                                    d="M47.9912 66.3059L77.4558 48.8892L47.9912 35.4961V66.3059Z"
                                                    fill="#5F5F5F"
                                                ></path>
                                                <path
                                                    d="M18.5259 48.8892L47.9912 66.3059V35.4961L18.5259 48.8892Z"
                                                    fill="#757576"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clipPath id="eth-clip-1">
                                                    <rect
                                                        width="96"
                                                        height="96"
                                                        fill="white"
                                                    ></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
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
