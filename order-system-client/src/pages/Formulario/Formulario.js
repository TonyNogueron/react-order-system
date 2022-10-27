import React, { useState } from "react";
import styles from "./Formulario.css";
import styles2 from "../../components/hora-component/Hora.css";
import styles3 from "../../components/comanda-component/Comanda.css";
import styles4 from "../../components/folio-component/Folio.css";
function Formulario(){
    const [folio, setFolio] = useState(0);
    const [Nombre, setNombre] = useState(0);
    const [Hora, setHora] = useState(0);
    const [Comanda, setComanda] = useState(0);
    const [Numero, setNumero] = useState(0);
    const [CantidadPaquetes, setCantidadPaquetes] = useState(0);
    const [Pagado, setPagado] = useState(0);
    const [Entregado, setEntregado] = useState(0);
    const [Relleno, setRelleno] = useState(0);
    const [Adobado, setAdobado] = useState(0);
    const [Natural, setNatural] = useState(0);
    const [Lomo, setLomo] = useState(0);
    const [Pierna, setPierna] = useState(0);
    const [Costilla, setCostilla] = useState(0);
    const [Coditos, setCoditos] = useState(0);
    const [Spaguetti, setSpaguetti] = useState(0);
    const [Rusa, setRusa] = useState(0);
    const [Chiles, setChiles] = useState(0);
    const [Otros, setOtros] = useState(0);
    const [Anticipo, setAnticipo] = useState(0);
    const [Restante, setRestante] = useState(0);
    const [Total, setTotal] = useState(0);
    return (
        <div className="Form">
            <section className="top">
                <div className="Comanda">
                    <h1>Comanda</h1>
                    <div class = "wrapper">
                        <input type="text" class="num" value={Comanda} placeholder="Ingrese el num. de Comanda." onChange={e=> setComanda(e.target.value)}/>
                    </div>
                </div>
                <div className="Hora">
                    <h1>Hora</h1>
                    <div class = "wrapper">
                        <input type="text" class="num" value={Hora} placeholder="Ingrese el num. de Hora." onChange={e=> setHora(e.target.value)}/>
                    </div>
                </div>
            </section>
            <section className="top-bottom">
                <div className="Folio">
                    <h1>Folio</h1>
                    <div class = "wrapper">
                        <input type="text" class="num" value={folio} placeholder="Ingrese el num. de folio." onChange={e=> setFolio(e.target.value)}/>
                    </div>
                </div>
                <div className="Nombre">
                    <h1>Nombre</h1>
                    <div class = "wrapper">
                        <input type="text" class="num" value={Nombre} placeholder="Ingrese el num. de Nombre." onChange={e=> setNombre(e.target.value)}/>
                    </div>
                </div>
                <div className="Telefono">
                    <h1>Teléfono</h1>
                    <div class = "wrapper">
                        <input type="text" class="num" value={Numero} placeholder="Ingrese el num. de Telefono." onChange={e=> setNumero(e.target.value)}/>
                    </div>
                </div>
                <div className="CantidadPaquetes">
                    <h1>Cantidad de Paquetes</h1>
                    <div class = "wrapper">
                        <input type="text" class="num" value={CantidadPaquetes} placeholder="Ingrese el num. de CantidadPaquetes." onChange={e=> setCantidadPaquetes(e.target.value)}/>
                    </div>
                </div>
                <div className="Pagado">
                    <h1>Pagado</h1>
                    <div class = "wrapper">
                        <input type="text" class="num" value={Pagado} placeholder="Ingrese el num. de Pagado." onChange={e=> setPagado(e.target.value)}/>
                    </div>
                </div>
                <div className="Entregado">
                    <h1>Entregado</h1>
                    <div class = "wrapper">
                        <input type="text" class="num" value={Entregado} placeholder="Ingrese el num. de Entregado." onChange={e=> setEntregado(e.target.value)}/>
                    </div>
                </div>
            </section>
            <section className="Pollos">
                <h1>Pollos</h1>
                <div className="Relleno">
                    <h1>Relleno</h1>
                    <div class = "wrapper">
                        <input type="text" class="num" value={Relleno} placeholder="Ingrese el num. de Relleno." onChange={e=> setRelleno(e.target.value)}/>
                    </div>
                </div>
                <div className="Adobado">
                    <h1>Adobado</h1>
                    <div class = "wrapper">
                        <input type="text" class="num" value={Adobado} placeholder="Ingrese el num. de Adobado." onChange={e=> setAdobado(e.target.value)}/>
                    </div>
                </div>
                <div className="Natural">
                    <h1>Natural</h1>
                    <div class = "wrapper">
                        <input type="text" class="num" value={Natural} placeholder="Ingrese el num. de Natural." onChange={e=> setNatural(e.target.value)}/>
                    </div>
                </div>
            </section>
            <section className="Carnes">
                <h1>Carnes</h1>
                <div className="Lomo">
                    <h1>Lomo</h1>
                    <div class = "wrapper">
                        <input type="text" class="num" value={Lomo} placeholder="Ingrese el num. de Lomo." onChange={e=> setLomo(e.target.value)}/>
                    </div>
                </div>
                <div className="Pierna">
                    <h1>Pierna</h1>
                    <div class = "wrapper">
                        <input type="text" class="num" value={Pierna} placeholder="Ingrese el num. de Pierna." onChange={e=> setPierna(e.target.value)}/>
                    </div>
                </div>
                <div className="Costilla">
                    <h1>Costilla</h1>
                    <div class = "wrapper">
                        <input type="text" class="num" value={Costilla} placeholder="Ingrese el num. de Costilla." onChange={e=> setCostilla(e.target.value)}/>
                    </div>
                </div>
            </section>
            <section className="Complementos">
                <h1>Complementos</h1>
                <div className="Coditos">
                    <h1>Coditos</h1>
                    <div class = "wrapper">
                        <input type="text" class="num" value={Coditos} placeholder="Ingrese el num. de Coditos." onChange={e=> setCoditos(e.target.value)}/>
                    </div>
                </div>
                <div className="Spaguetti">
                    <h1>Spaguetti</h1>
                    <div class = "wrapper">
                        <input type="text" class="num" value={Spaguetti} placeholder="Ingrese el num. de Spaguetti." onChange={e=> setSpaguetti(e.target.value)}/>
                    </div>
                </div>
                <div className="Rusa">
                    <h1>Rusa</h1>
                    <div class = "wrapper">
                        <input type="text" class="num" value={Rusa} placeholder="Ingrese el num. de Rusa." onChange={e=> setRusa(e.target.value)}/>
                    </div>
                </div>
                <div className = "Chiles">
                    <h1>Chiles</h1>
                    <div class = "wrapper">
                        <input type="text" class="num" value={Chiles} placeholder="Ingrese el num. de Chiles." onChange={e=> setChiles(e.target.value)}/>
                    </div>
                </div>
                <div className = "Otros">
                    <h1>Otros</h1>
                    <div class = "wrapper">
                        <input type="text" class="text" value={Otros} placeholder="Ingrese el num. de Otros." onChange={e=> setOtros(e.target.value)}/>
                    </div>
                </div>
            </section>
            <section className="TotalApartado">
                <h1>Total</h1>
                <div className = "Anticipo">
                    <h1>Anticipo</h1>
                    <div class = "wrapper">
                        <input type="text" class="num" value={Anticipo} placeholder="Ingrese el num. de Anticipo." onChange={e=> setAnticipo(e.target.value)}/>
                    </div>
                </div>
                <div className = "Restante">
                    <h1>Restante</h1>
                    <div class = "wrapper">
                        <input type="text" class="num" value={Restante} placeholder="Ingrese el num. de Restante." onChange={e=> setRestante(e.target.value)}/>
                    </div>
                </div>
                <div className="Total">
                    <h1>Total</h1>
                    <div class = "wrapper">
                        <input type="text" class="num" value={Total} placeholder="Ingrese el num. de Total." onChange={e=> setTotal(e.target.value)}/>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Formulario;