import React from "react";
import Head from "next/head";
import Link from "next/link";
import GlobalStyle from "./globalStyle";

const Layout = ( { children, title = "RSD-IITP" } ) => (
    <div>
        <Head>
            <title>{ title }</title>
            <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1" />
            <meta charSet="utf-8" />
            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400" rel="stylesheet" />
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        </Head>
        <header className="header section dark">
            <nav>
                <Link href="./index.html"><a className="navlink">Home</a></Link>
                <Link href="./index.html#about"><a className="navlink">About</a></Link>
                <Link href="./index.html#speakers"><a className="navlink">Speakers</a></Link>
                <Link href="./index.html#agenda"><a className="navlink">Agenda</a></Link>
                <Link href="./index.html#sponsors"><a className="navlink">Sponsors and Partners</a></Link>
                <Link href="./index.html#register"><a className="navlink">Register</a></Link>
                <Link href="./index.html#gallery"><a className="navlink">Gallery</a></Link>
                <Link href="./index.html#contact"><a className="navlink">Contact</a></Link>
            </nav>
            <GlobalStyle />
        </header>

        { children }
    </div>
);

export default Layout;
