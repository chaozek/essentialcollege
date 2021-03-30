import React from 'react'
import "./Home.css"
import "../Components/Bottom_part.css"
import "../Components/Soutez_block.css"
import Sidebar from "../Components/Sidebar"
import Submenu from "../Components/Submenu"
import Hero from "../Components/Hero"
import Footer from "../Components/Footer"
import Slide from "../Components/Slide"
import Article from "../Components/Article"
import Navbar from "../Components/Navbar"
import ArticleRight from "../Components/ArticleRight"
import Hodnoty from "../Components/Hodnoty.jsx" 
import img from "../imgs/kluk.png"
import Hero_bottom from '../Components/Hero_bottom.jsx'
import Bottom_part from "../Components/Bottom_part.jsx" 
import Soutez_block from "../Components/Soutez_block.jsx" 
import uam_2 from "../imgs/uam_2.png";
import apollos from "../imgs/apollos.png";
import posun from "../imgs/posun.svg";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';

export default function Home() {


    return (
        <div >
            <Navbar />
            <Hero img={img} text={[<h1>Novodobá škola, která <span>vzdělává praxí.</span></h1>]} />
            <Hero_bottom />
                <Sidebar />

            <Submenu />
            <Fade left>

                <Article />
                </Fade>

            <Slide />
            <Fade right>
                <ArticleRight />
            </Fade>
            <Zoom bottom>

                <Hodnoty />
                </Zoom>
                <Zoom bottom>

            <Soutez_block img={posun} header={[<h1>Jsi připraven na pestrou budoucnost?</h1>]} text={[<strong><p>Za vznikem essential college stojí náš názor, že stávající vzdělávací systém v České republice nedostatečně připravuje mladé lidi na jejich budoucnost. Kvantita je na úkor kvality. Teorie vyučovaná na školách převyšuje využití v praxi. Absolventi často odchází ze škol znechucení, znudění a neschopní se řádně uplatnit na pracovním trhu.</p></strong>,<br/>, <p>EC jde s dobou. Zaměřujeme se na profesní přípravu, kombinujeme online a offline formy výuky v českém a anglickém jazyce, učíme praxí. Tvrzení, že jedině trénink praxí přináší žádoucí výsledky, dokazují posluchači a absolventi naší partnerské firmy University of Applied Management, kteří teoretický základ převádějí do praxe ve svém zaměstnání. essential college podporuje studenty v přípravě na jejich prosperující podnikatelskou budoucnost. A to hlavně díky stážím v podnikatelských firmách, se kterými spolupracujeme.
</p> ]}  />                </Zoom>
<Zoom bottom>

            <Soutez_block class="loga margin-top" img={apollos} img2={uam_2} header={[<h1>Vzdělávání na essential college zajišťují dvě fakulty </h1>]} text={[<strong>Apollos, Fakulta praktického vzdělávání</strong>,<br/>,<p>Tuto fakultu zaštiťuje Apollos University, která vzdělává studenty ve 28 zemích světa. Dochází tak k propojování se zahraničními studenty a naplňování naší vize, že ve vzdělávání nejsou žádné hranice. Na Fakultě praktického vzdělávání EC lze studovat bakalářské studium oboru Mezinárodní podnikání.</p>,<br/>, <strong>University of Applied Management, Fakulta profesního vzdělávání ​</strong>,<br/>,<p>Tuto fakultu zaštiťuje Apollos University, která vzdělává studenty ve 28 zemích světa. Dochází tak k propojování se zahraničními studenty a naplňování naší vize, že ve vzdělávání nejsou žádné hranice. Na Fakultě praktického vzdělávání EC lze studovat bakalářské studium oboru Mezinárodní podnikání.</p>,<br/>,]} />
            </Zoom> <Bottom_part />
            <Footer/>
        </div>
    )
}
