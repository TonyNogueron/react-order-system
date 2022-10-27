import React, { useState } from "react";
import styles from "./Formulario.css";
import styles2 from "../../components/hora-component/Hora.css";
import styles3 from "../../components/comanda-component/Comanda.css";
import styles4 from "../../components/"

function Formulario(){
    const [folio, setFolio] = useState(0);
    const [Nombre, setNombre] = useState(0);
    const [Hora, setHora] = useState(0);
    const [Comanda, setComanda] = useState(0);

    return (
        <div className="Form">
            <section className="top">
                <div className="Comanda">
                    <h1>Comanda</h1>
                    <div class = "wrapper">
                        <input type="text" class="num" value={Comanda} placeholder="Ingrese el num. de Comanda." onChange={e=> setComanda(e.target.value)}/>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Formulario;