import type { NextPage } from 'next'
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'

import Footer from './features/Footer'
import Header from './features/Header'

const Layout: NextPage = ({ children }) => {
    useEffect(() => {
        if (
            !localStorage.theme ||
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            localStorage.theme = 'dark'
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [])

    return (
        <div className="bg-white text-dark-500 dark:bg-[#1D1328] dark:text-white">
            <Header />
            {children}
            <Footer />
            <ToastContainer
                hideProgressBar
                position="bottom-right"
                autoClose={2000}
            />
        </div>
    )
}

export default Layout
