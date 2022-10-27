import React from "react";
import styles from "./Form.css";
import Folio from "../../components/folio-component/Folio";
import Comanda from "../../components/comanda-component/Comanda";
import Hora from "../../components/hora-component/Hora";
import Nombre from "../../components/nombre-component/Nombre";

function Form() {
    
    return (
        <div className="Form">
            <section className = "top">
                <Comanda />
                <Hora />
            </section>
            <section className="top-bottom">
                <Folio />
                <Nombre />
            </section>
        </div>
    );
    }

export default Form;