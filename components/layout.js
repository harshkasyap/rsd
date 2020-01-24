import React from "react";
import Head from "next/head";
import Link from "next/link";
import GlobalStyle from "./globalStyle";
import ImportStyle from "./importStyle";

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
            {/* <nav>
                <Link href="#home"><a className="navlink">Home</a></Link>
                <Link href="#about"><a className="navlink">About</a></Link>
                <Link href="#register"><a className="navlink">Register</a></Link>
                <Link href="#speakers"><a className="navlink">Speakers</a></Link>
                <Link href="#contact"><a className="navlink">Team</a></Link>
            </nav> */}
            <nav id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation"></a>
                <a className="mobile-btn" href="#home" title="Hide navigation"></a>

                <ul id="nav" className="nav">
                <li><a className="home" href="#home">Home</a></li>
                <li><a className="smoothscroll" href="#about">About</a></li>
                <li><a className="smoothscroll" href="#register">Register</a></li>
                <li><a className="smoothscroll" href="#speakers">Speakers</a></li>
                <li><a className="smoothscroll" href="#contact">Team</a></li>
                <li><a className="smoothscroll" href="#footer">Sponsors</a></li>
                <li><a target="_blank" href="https://www.iitp.ac.in//rsd/">RSD-19</a></li>
                </ul>
            </nav>
            <GlobalStyle />
            <ImportStyle />
        </header>
        { children }
    </div>
);

export default Layout;
