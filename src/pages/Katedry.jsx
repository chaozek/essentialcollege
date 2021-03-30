import React from 'react'
import Sidebar from "../Components/Sidebar"
import Submenu from "../Components/Submenu"
import Hero from "../Components/Hero"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Hero_bottom from "../Components/Hero_bottom"
import Soutez_block from "../Components/Soutez_block"
import img from "../imgs/partneri_hero.png"
import lektori from "../Components/data-lektori"
import "../pages/Katedry.css"
import Zoom from 'react-reveal/Zoom';
import { Element } from 'react-scroll'

export default function Katedry(props) {
    return (
        <div>
            <Navbar/>
            <Hero img={img} text={[<h1>Katedry</h1>, ]} margin={"5rem"} />
            <Sidebar />
            {lektori.map((lektor, index) => {
                return (
                    <div key={index} id={lektor.catch_id} className="lektori_bloky">
                        <Zoom bottom>
                    <Soutez_block className="lektor-block" img={lektor.photo} header={lektor.more} lektor={lektor.name} subject={lektor.title}  />
                    </Zoom></div>
                    
                )
            })}

            <Hero_bottom/>

            <Submenu/>
            <Footer />
        </div>
    )
}
