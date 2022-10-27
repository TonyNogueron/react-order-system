import React, { useState, Component } from "react";
import styles from "./Folio.css";


var num = document.querySelector(".num");



function Folio() {
    const [folio, setFolio] = useState(0);
    return (
        <div className="Folio">
            <h1>Folio</h1>
            <div class = "wrapper">
                <input type="text" class="num" value={folio} placeholder="Ingrese el num. de folio." onChange={e=> setFolio(e.target.value)}/>
                
            </div>
        </div>
    );
}

export default Folio;