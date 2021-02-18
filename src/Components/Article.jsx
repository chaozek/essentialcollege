import React from 'react'
import "./Article.css"
import img from "../imgs/bckg.png"
export default function Article() {
    return (
        <div className="article">
            <div className="article-section">

                <div className="article-left">
                    <img className="article-img" src={img} alt=""/>
                </div>
                <div className="article-right ">
                <h1>Slova zakladatele</h1>
                <p>
Věříme, že každý může být svým vlastním hrdinou a že každý má schopnost vytvářet svůj životní příběh
tím, že nalezne smysl svého života a bude jej naplňovat. Proto také potřebuje podporující,
bezpečné a inspirující prostředí. 

Essential college takové prostředí vytváří dodržováním klíčových hodnot.Náš tým tvoří profesionálové,
kteří jsou jak úspěšní v praxi, tak i kompetentní předat své dovednosti a zkušenosti ostatním. Jsou to
lidé, jejichž životní příběh je protkán právě tímto posláním. Pomáháme studentům, aby jejich životní
příběhy byly úspěšné a naplněné. 

Naším smyslem je kombinovat nezbytnou teoretickou výuku s dostatečným množstvím praktikování v
reálném podnikatelském prostředí, aby každý dosahoval výsledků, které si předsevzal a jsou pro něj
smysluplné.
<br/>
-Petr Pacher, CEO</p>
</div>
    
            </div>
        </div>
    )
}
