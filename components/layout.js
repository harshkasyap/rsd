import React from "react";
import Head from "next/head";
import Link from "next/link";
import GlobalStyle from "./globalStyle";
import ImportStyle from "./importStyle";
import SponsorSlider from "./slider/sponsorSlider"

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
                <Link href="#home"><a className="navlink">Home</a></Link>
                <Link href="#about"><a className="navlink">About</a></Link>
                <Link href="#register"><a className="navlink">Register</a></Link>
                <Link href="#speakers"><a className="navlink">Speakers</a></Link>
                <Link href="#contact"><a className="navlink">Team</a></Link>
            </nav>
            <GlobalStyle />
        </header>
        <p className="scrolldown">
            <ImportStyle />
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
        </p>
 {/*        <footer className="footer">
            <SponsorSlider />  
        </footer>
 */}
        { children }
    </div>
);

export default Layout;
