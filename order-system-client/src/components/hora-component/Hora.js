import React, { useState } from "react";
import styles from "./Hora.css";


function Hora() {
    const [Hora, setHora] = useState(0);
    return (
        <div className="Hora">
            <h1>Hora</h1>
            <div class = "wrapper">
                <input type="text" class="num" value={Hora} placeholder="Ingrese el num. de Hora." onChange={e=> setHora(e.target.value)}/>
            </div>
        </div>
    );
}

export default Hora;