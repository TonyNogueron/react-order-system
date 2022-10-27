import React, { useState } from "react";
import styles from "./Nombre.css";


function Nombre() {
    const [Nombre, setNombre] = useState(0);
    return (
        <div className="Nombre">
            <h1>Nombre</h1>
            <div class = "wrapper">
                <input type="text" class="num" value={Nombre} placeholder="Ingrese el num. de Nombre." onChange={e=> setNombre(e.target.value)}/>
                
            </div>
        </div>
    );
}

export default Nombre;