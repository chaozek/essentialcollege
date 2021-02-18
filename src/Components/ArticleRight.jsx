import React from 'react'
import "./ArticleRight.css"
import img from "../imgs/BCKG_2.png"
export default function Article() {
    return (
        <div className="article-right">
            <div className="article-section-right">

                <div className="article-left-right">
                <h1>Přijímací řízení</h1>
                <p>
                        O studiu na EC nerozhodují výsledky testu studijních předpokladů. Chceme poznat vaši osobnost
                        a předpoklady pro budoucí úspěšnou podnikatelskou praxi. Vstupní bránou k nám je vyplnění
                        přihlášky, vypracování eseje na dané téma a komplexní poznání vaší osobnosti a kompetencí na
osobním pohovoru. </p>

                    <div className="postup">
                        <div className="accept">
                        <h4 className="number">1.</h4>
                    <h4>Přijímací řízení</h4>
                        </div>
                        <div className="accept">
                        <h4 className="number">2.</h4>
                    <h4>Vypracování eseje</h4>
                        </div>
                        <div className="accept">
                        <h4 className="number">3.</h4>
                    <h4>Osobní pohovor</h4>
                    </div>
                    </div>
                    </div>

                <div className="article-right-right ">
                <img className="article-img-right" src={img} alt=""/>

</div>
    
            </div>
        </div>
    )
}
