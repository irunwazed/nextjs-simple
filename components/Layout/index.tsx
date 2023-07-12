import Header from "../Header"
import Footer from "../Footer"
import { ReactNode } from "react"
import Head from "next/head"

interface LayoutProps {
    children: ReactNode,
    pageTitle: string
}

export default function Layout(props: LayoutProps){

    const {children, pageTitle} = props

    return(
        <>
            <Head>
            <title>{pageTitle}</title>
            <meta name="description" content="my home" />
            </Head>
            <Header />
            <div>{children}</div>
            <Footer />
        </>
    )
}