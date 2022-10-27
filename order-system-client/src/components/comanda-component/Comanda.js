import React, { useState } from "react";
import styles from "./Comanda.css";


function Comanda() {
    const [Comanda, setComanda] = useState(0);
    return (
        <div className="Comanda">
            <h1>Comanda</h1>
            <div class = "wrapper">
                <input type="text" class="num" value={Comanda} placeholder="Ingrese el num. de Comanda." onChange={e=> setComanda(e.target.value)}/>
                
            </div>
        </div>
    );
}

export default Comanda;