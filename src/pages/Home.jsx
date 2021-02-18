import React from 'react'
import Navbar from "../Components/Navbar"
import "./Home.css"
import Sidebar from "../Components/Sidebar"
import Submenu from "../Components/Submenu"
import { useGlobalContext } from '../context';
import Hero from "../Components/Hero"
import Slide from "../Components/Slide"
import Article from "../Components/Article"
import ArticleRight from "../Components/ArticleRight"
import Hodnoty from "../Components/Hodnoty.jsx" 
import Bottom from  "../Components/Bottom.jsx" 
export default function Home() {
    const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();


    return (
        <div >
            <Navbar />
            <Hero/>
            <Sidebar />
            <Submenu />
            <Slide />
            <Article />
            <ArticleRight />
            <Hodnoty />
            <Bottom/>
        </div>
    )
}
