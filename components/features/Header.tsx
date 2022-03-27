import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import ALink from './ALink'
import { Web3Button } from './web3'

const Header = () => {
    const router = useRouter()
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        if (
            !localStorage.theme ||
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            setDarkMode(true)
        } else {
            setDarkMode(false)
        }
    }, [])

    const darkModeHandler = () => {
        setDarkMode(!darkMode)
        document.querySelector('html')?.classList.toggle('dark')
        if (localStorage.theme === 'dark') {
            localStorage.theme = 'light'
        } else {
            localStorage.theme = 'dark'
        }
    }

    return (
        <header className="header h-header sticky top-0 z-10 flex items-center justify-between bg-white px-5 shadow-md dark:bg-[#1D1328] dark:shadow-sm dark:shadow-dark-400">
            <div className="header-left flex items-center">
                <ALink href="/" className="relative block h-full w-32 sm:mr-5">
                    {darkMode ? (
                        <Image
                            src="/images/dark-logo.png"
                            alt="me"
                            layout="responsive"
                            width={4168}
                            height={3585}
                        />
                    ) : (
                        <Image
                            src="/images/logo.png"
                            alt="me"
                            layout="responsive"
                            width={4168}
                            height={3585}
                        />
                    )}
                </ALink>

                <div className="relative hidden text-gray-600 focus-within:text-gray-400 xl:block">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <button
                            type="submit"
                            className="focus:shadow-outline p-1 text-dark-100 focus:outline-none"
                        >
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                className="h-6 w-6"
                            >
                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </button>
                    </span>
                    <input
                        type="search"
                        name="q"
                        className="text-md h-12 w-96 rounded-full border-0 bg-dark-300 py-2 pl-10 placeholder-dark-100 shadow-none focus:border-0 focus:shadow-none focus:outline-none focus:ring-transparent dark:text-white"
                        placeholder="Search..."
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="header-right flex items-center">
                <ALink
                    href="/explore"
                    className={`hidden border-b-2 border-solid border-transparent py-2  px-4 text-lg font-medium hover:border-dark-500 dark:hover:border-pink-500 md:block ${
                        router.pathname == '/explore'
                            ? 'dark:border-pink-500'
                            : ''
                    }`}
                >
                    Explore
                </ALink>
                <ALink
                    href="/collection"
                    className={`hidden border-b-2 border-solid border-transparent py-2 px-4 text-lg font-medium hover:border-dark-500 dark:hover:border-pink-500 md:block ${
                        router.pathname == '/collection'
                            ? 'dark:border-pink-500'
                            : ''
                    }`}
                >
                    Collection
                </ALink>
                <ALink
                    href="/rewards"
                    className={`hidden border-b-2 border-solid border-transparent py-2 px-4 text-lg font-medium hover:border-dark-500 dark:hover:border-pink-500 md:block ${
                        router.pathname == '/rewards'
                            ? 'dark:border-pink-500'
                            : ''
                    }`}
                >
                    Rewards
                </ALink>

                <button
                    className="mr-4 inline-flex items-center rounded-full bg-dark-500 bg-opacity-50 py-[0.625rem] px-[0.625rem] font-bold text-dark-500 hover:bg-dark-500 dark:bg-dark-300 sm:mx-4 md:block"
                    onClick={darkModeHandler}
                >
                    {darkMode ? (
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M17.725 14.1062C17.0449 15.3868 16.0571 16.4784 14.8505 17.2827C13.644 18.087 12.2564 18.5789 10.8126 18.714C9.36888 18.8491 7.91416 18.6233 6.57929 18.0569C5.24442 17.4905 4.07125 16.6012 3.16526 15.469C2.25926 14.3368 1.64886 12.9972 1.38892 11.5706C1.12899 10.144 1.22767 8.67516 1.6761 7.29617C2.12454 5.91717 2.90865 4.67124 3.95796 3.6704C5.00726 2.66956 6.28885 1.94519 7.6875 1.56242C7.82292 1.51685 7.96987 1.51906 8.10386 1.56868C8.23786 1.6183 8.3508 1.71233 8.42389 1.83511C8.49697 1.95789 8.52578 2.102 8.50551 2.24344C8.48524 2.38489 8.41712 2.51511 8.3125 2.61242C7.34495 3.56958 6.68326 4.79237 6.41125 6.1259C6.13923 7.45943 6.26914 8.84369 6.78451 10.1033C7.29987 11.363 8.17751 12.4413 9.30624 13.2017C10.435 13.9622 11.764 14.3705 13.125 14.3749C14.4418 14.3802 15.7317 14.0024 16.8375 13.2874C16.9538 13.2139 17.0911 13.1807 17.2281 13.1932C17.3652 13.2056 17.4943 13.2629 17.5954 13.3562C17.6966 13.4495 17.7641 13.5736 17.7875 13.7092C17.811 13.8448 17.789 13.9843 17.725 14.1062V14.1062Z"
                                fill="white"
                            />
                        </svg>
                    ) : (
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.04163 3.44991L4.71663 3.12491C4.39163 2.79991 3.86663 2.80824 3.54997 3.12491L3.54164 3.13324C3.21664 3.45824 3.21664 3.98324 3.54164 4.2999L3.86663 4.6249C4.19163 4.9499 4.7083 4.9499 5.0333 4.6249L5.04163 4.61657C5.36663 4.2999 5.36663 3.76657 5.04163 3.44991ZM2.50831 8.74988H1.65831C1.19998 8.74988 0.833313 9.11655 0.833313 9.57488V9.58321C0.833313 10.0415 1.19998 10.4082 1.65831 10.4082H2.49997C2.96664 10.4165 3.3333 10.0499 3.3333 9.59155V9.58321C3.3333 9.11655 2.96664 8.74988 2.50831 8.74988ZM10.0083 0.458252H9.99994C9.53328 0.458252 9.16661 0.824917 9.16661 1.28325V2.08325C9.16661 2.54158 9.53328 2.90824 9.99161 2.90824H9.99994C10.4666 2.91658 10.8333 2.54991 10.8333 2.09158V1.28325C10.8333 0.824917 10.4666 0.458252 10.0083 0.458252ZM16.4583 3.13324C16.1333 2.80824 15.6083 2.80824 15.2833 3.12491L14.9583 3.44991C14.6333 3.77491 14.6333 4.2999 14.9583 4.61657L14.9666 4.6249C15.2916 4.9499 15.8166 4.9499 16.1333 4.6249L16.4583 4.2999C16.7832 3.9749 16.7832 3.45824 16.4583 3.13324ZM14.9499 15.7165L15.2749 16.0415C15.5999 16.3665 16.1249 16.3665 16.4499 16.0415C16.7749 15.7165 16.7749 15.1915 16.4499 14.8665L16.1249 14.5415C15.7999 14.2165 15.2749 14.2249 14.9583 14.5415C14.6249 14.8749 14.6249 15.3915 14.9499 15.7165ZM16.6666 9.57488V9.58321C16.6666 10.0415 17.0332 10.4082 17.4916 10.4082H18.3332C18.7916 10.4082 19.1582 10.0415 19.1582 9.58321V9.57488C19.1582 9.11655 18.7916 8.74988 18.3332 8.74988H17.4916C17.0332 8.74988 16.6666 9.11655 16.6666 9.57488ZM9.99994 4.58324C7.24162 4.58324 4.99996 6.82489 4.99996 9.58321C4.99996 12.3415 7.24162 14.5832 9.99994 14.5832C12.7583 14.5832 14.9999 12.3415 14.9999 9.58321C14.9999 6.82489 12.7583 4.58324 9.99994 4.58324ZM9.99161 18.7082H9.99994C10.4583 18.7082 10.8249 18.3415 10.8249 17.8832V17.0832C10.8249 16.6249 10.4583 16.2582 9.99994 16.2582H9.99161C9.53328 16.2582 9.16661 16.6249 9.16661 17.0832V17.8832C9.16661 18.3415 9.53328 18.7082 9.99161 18.7082ZM3.54164 16.0332C3.86663 16.3582 4.39163 16.3582 4.71663 16.0332L5.04163 15.7082C5.36663 15.3832 5.35829 14.8582 5.04163 14.5415L5.0333 14.5332C4.7083 14.2082 4.1833 14.2082 3.8583 14.5332L3.5333 14.8582C3.21664 15.1915 3.21664 15.7082 3.54164 16.0332Z"
                                fill="white"
                                fillOpacity="0.8"
                            />
                        </svg>
                    )}
                </button>

                <Web3Button />

                <Menu as="div" className="relative ml-4 ">
                    <div>
                        <Menu.Button className="inline-flex items-center rounded-full bg-dark-500 bg-opacity-50 py-[0.625rem] px-[0.625rem] font-bold text-dark-500 hover:bg-dark-500 dark:bg-dark-300 md:hidden">
                            <svg
                                viewBox="0 0 32 32"
                                focusable="false"
                                className="h-6 w-6 text-white"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4 24H28V26H4V24ZM4 12H28V14H4V12ZM4 18H28V20H4V18ZM4 6H28V8H4V6Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                            <span className="sr-only">Menu</span>
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="px-1 py-1 ">
                                <Menu.Item>
                                    {({ active }) => (
                                        <ALink
                                            href="/explore"
                                            className={`${
                                                active
                                                    ? 'mr-2 text-pink-500'
                                                    : 'mr-2 text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        >
                                            <svg
                                                viewBox="0 0 32 32"
                                                focusable="false"
                                                className="mr-2 h-6 w-6"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16ZM28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16ZM23 9L13.5 13.5L9 23L18.5 18.5L23 9ZM14.5 16C14.5 16.8284 15.1716 17.5 16 17.5C16.8284 17.5 17.5 16.8284 17.5 16C17.5 15.1716 16.8284 14.5 16 14.5C15.1716 14.5 14.5 15.1716 14.5 16Z"
                                                    fill="currentColor"
                                                ></path>
                                            </svg>
                                            Explore
                                        </ALink>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <ALink
                                            href="/collection"
                                            className={`${
                                                active
                                                    ? 'mr-2 text-pink-500'
                                                    : 'mr-2 text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        >
                                            <svg
                                                viewBox="0 0 32 32"
                                                focusable="false"
                                                className="mr-2 h-6 w-6"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M31 15H29V3H17V1H29C30.1046 1 31 1.89543 31 3V15ZM24 22H26V8C26 6.89543 25.1046 6 24 6H10V8H24V22ZM4 30H18C19.1046 30 20 29.1046 20 28V14C20 12.8954 19.1046 12 18 12H4C2.89543 12 2 12.8954 2 14V28C2 29.1046 2.89543 30 4 30ZM4 28V14H18V28H4Z"
                                                    fill="currentColor"
                                                ></path>
                                            </svg>
                                            Collections
                                        </ALink>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <ALink
                                            href="/rewards"
                                            className={`${
                                                active
                                                    ? 'mr-2 text-pink-500'
                                                    : 'mr-2 text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        >
                                            <svg
                                                viewBox="0 0 32 32"
                                                focusable="false"
                                                className="mr-2 h-6 w-6"
                                            >
                                                <path
                                                    d="M26 9.99999H23.2383C23.8892 9.03797 24.1416 7.86102 23.9426 6.71669C23.7435 5.57235 23.1083 4.54982 22.1708 3.86416C21.2332 3.17851 20.0663 2.88317 18.9154 3.04026C17.7646 3.19736 16.7195 3.79464 16 4.70649C15.2789 3.79915 14.2347 3.206 13.0861 3.05125C11.9375 2.89651 10.7736 3.19217 9.83811 3.87632C8.90261 4.56047 8.26809 5.58004 8.06745 6.72151C7.8668 7.86299 8.11558 9.03783 8.7617 9.99999H6C5.46977 10.0007 4.96145 10.2116 4.58652 10.5865C4.21159 10.9614 4.00066 11.4698 4 12V16C4.00066 16.5302 4.21159 17.0385 4.58652 17.4135C4.96145 17.7884 5.46977 17.9993 6 18V28C6.00066 28.5302 6.21159 29.0385 6.58652 29.4135C6.96145 29.7884 7.46977 29.9993 8 30H24C24.5302 29.9993 25.0386 29.7884 25.4135 29.4135C25.7884 29.0385 25.9993 28.5302 26 28V18C26.5302 17.9993 27.0386 17.7884 27.4135 17.4135C27.7884 17.0385 27.9993 16.5302 28 16V12C27.9993 11.4698 27.7884 10.9614 27.4135 10.5865C27.0386 10.2116 26.5302 10.0007 26 9.99999ZM17 7.49999C17 7.00554 17.1466 6.52219 17.4213 6.11107C17.696 5.69994 18.0865 5.37951 18.5433 5.19029C19.0001 5.00107 19.5028 4.95157 19.9877 5.04803C20.4727 5.14449 20.9181 5.38259 21.2678 5.73223C21.6174 6.08186 21.8555 6.52731 21.952 7.01227C22.0484 7.49722 21.9989 7.99989 21.8097 8.4567C21.6205 8.91352 21.3 9.30396 20.8889 9.57867C20.4778 9.85337 19.9945 9.99999 19.5 9.99999H17V7.49999ZM12.5 4.99999C13.1628 5.00079 13.7982 5.26443 14.2669 5.7331C14.7356 6.20177 14.9992 6.83719 15 7.49999V9.99999H12.5C11.837 9.99999 11.2011 9.7366 10.7322 9.26776C10.2634 8.79892 10 8.16303 10 7.49999C10 6.83695 10.2634 6.20107 10.7322 5.73223C11.2011 5.26338 11.837 4.99999 12.5 4.99999ZM6 12H15V16H6V12ZM8 18H15V28H8V18ZM24.0012 28H17V18H24L24.0012 28ZM17 16V12H26L26.0012 16H17Z"
                                                    fill="currentColor"
                                                ></path>
                                            </svg>
                                            Rewards
                                        </ALink>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </header>
    )
}

export default Header
