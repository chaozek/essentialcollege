import React from 'react'
import Sidebar from "../Components/Sidebar"
import Submenu from "../Components/Submenu"
import Hero from "../Components/Hero"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import img from "../imgs/Soutez_2.png"
import data from "../Components/ceny.js"
import Hero_bottom from '../Components/Hero_bottom.jsx'
import "./Soutez.css"
import Soutez_block from "../Components/Soutez_block.jsx"
import vote from "../imgs/vote.svg";
import vlajka from "../imgs/vlajka.svg";
import otazka from "../imgs/otazka.svg";
import raketa from "../imgs/raketa.svg";
import mello from "../imgs/mello.svg";


export default function Soutez(props) {
    return (
        <div>
            <Navbar/>
            <Hero img={img} text={[<h1>Soutěž</h1>, ]} margin={"5rem"} />
            <Sidebar />
            <Hero_bottom/>
        <Submenu />

        <div className="section">
        <Soutez_block img={mello} header={[<h1>"Mello" kámo!</h1>]} text={[<p>Jak by měla vypadat výuka na tvé budoucí škole? Staň se členem naší skupiny #skolanamiru a rozhoduj o tom, jak by měla vypadat výuka na tvé budoucí vysoké škole.</p>]}  />
        <Soutez_block img={otazka} header={[<h1>Proč to děláme?</h1>]} text={[<p>Chceme zjistit, co mladý člověk jako ty od školy očekává. S čím je v pohodě a co ho naopak štve. Za tvé otevřené a upřímné názory ti zaplatíme, pokud tě do skupiny vybereme. Navíc se zapojíš do soutěže o super ceny!</p>]}  />
        <Soutez_block img={raketa} header={[<h1>Kdo jsme?</h1>]} text={[<p>Jsme essential college. Jsme první VŠ, kterou si studenti můžou sami vytvořit.</p>]}  />
        <Soutez_block img={vlajka} header={[<h1>Jak na to?</h1>]} text={[<p>Vyplň nám popravdě dotazník. Vyplněním dotazníku se automaticky zapojíš do soutěže o super výhry, můžeš vyhrát třeba skútr. A pokud tě pak vybereme, staneš se nakrátko součástí naší skupiny #skolanamiru. Vše bude následně probíhat online a vybraní účastnici dostanou předem stanovenou finanční odměnu. Koukni na podmínky zde: essentialcollege.cz/podminky-souteze/</p>,<br/>,<button>Vyplnit dotazník</button>]}  />
        
          <div className="tile-cover">
        {data.map((price,index)=>{
          return (
            <div className="tile" style={{ background: ` url('${price.background}` }}> 
              <img className="price-img" src={price.photo} />
              <div className="text">
              <span>{price.count }x</span><br/>
                <h1> {price.name}</h1>
                <h2 className="animate-text"> {price.desp}</h2>
                <div className="tile-bottom">
                  <p className="animate-text">Sponzorem této ceny je</p>
                  <img className="animate-text partner-logo" src={price.logo} alt="" />
                  </div>
              </div>
            </div>
          )
        })}
        </div>
          


      </div>
            
      <Footer />
        </div>
    )
}
