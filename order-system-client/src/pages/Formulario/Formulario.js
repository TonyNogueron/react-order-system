import React, { useState } from "react";
import styles from "./Formulario.css";
import styles2 from "../../components/hora-component/Hora.css";
import styles3 from "../../components/comanda-component/Comanda.css";
import styles4 from "../../components/folio-component/Folio.css";
import axios from "axios";


function Formulario(){
    const [folio, setFolio] = useState();
    const [Nombre, setNombre] = useState();
    const [Hora, setHora] = useState();
    const [Numero, setNumero] = useState();
    const [CantidadPaquetes, setCantidadPaquetes] = useState(0);
    const [Pagado, setPagado] = useState(false);
    const [Entregado, setEntregado] = useState(false);
    const [Relleno, setRelleno] = useState(0);
    const [Adobado, setAdobado] = useState(0);
    const [Natural, setNatural] = useState(0);
    const [Lomo, setLomo] = useState(0);
    const [Pierna, setPierna] = useState(0);
    const [Costilla, setCostilla] = useState(0);
    const [Manzana, setManzana] = useState(0);
    const [Coditos, setCoditos] = useState(0);
    const [Spaguetti, setSpaguetti] = useState(0);
    const [Rusa, setRusa] = useState(0);
    const [Chiles, setChiles] = useState(0);
    const [Otros, setOtros] = useState();
    const [Anticipo, setAnticipo] = useState(0);
    const [Restante, setRestante] = useState(0);
    const [Total, setTotal] = useState(0);

    const pedidoJson = {
        "folio": folio,
        "hora": Hora,
        "nombreCompleto": Nombre,
        "telefono":   Numero,
        "paquete":  CantidadPaquetes,
        "polloRelleno": Relleno,
        "lomo": Lomo,
        "pierna": Pierna,
        "costilla": Costilla,
        "polloAdobado":  Adobado,
        "polloNatural": Natural,
        "manzana": Manzana,
        "espaguetti": Spaguetti,
        "codo": Coditos,
        "rusa": Rusa,
        "chiles": Chiles,
        "otros": Otros,
        "total": Total,
        "anticipo": Anticipo,
        "resta": Restante,
        "entregado": Entregado,
        "pagado": Pagado
    }

    const postOrder = (e) => {
        console.log(pedidoJson);
        e.preventDefault();
        axios.post("http://localhost:3001/insertOrder", pedidoJson).then((response) => {
            console.log(response);
            alert(`El pedido de: ${Nombre} ha sido registrado con exito`);
            window.location.reload();
        }).catch((error) => {
            console.log(error);
            alert("Error al registrar el pedido");
        });
    }

    return (
        <div className="Form">
            <section className="top">
                <div className="Hora">
                    <h1>Hora</h1>
                    <div className = "wrapper">
                        <input type="text" className="num" value={Hora} placeholder="Ingrese el num. de Hora." onChange={e=> setHora(e.target.value)}/>
                    </div>
                </div>
            </section>
            <section className="top-bottom">
                <div className="Folio">
                    <h1>Folio</h1>
                    <div className = "wrapper">
                        <input type="text" className="num" value={folio} placeholder="Ingrese el num. de folio." onChange={e=> setFolio(e.target.value)}/>
                    </div>
                </div>
                <div className="Nombre">
                    <h1>Nombre</h1>
                    <div className = "wrapper">
                        <input type="text" className="num" value={Nombre} placeholder="Ingrese el num. de Nombre." onChange={e=> setNombre(e.target.value)}/>
                    </div>
                </div>
                <div className="Telefono">
                    <h1>Teléfono</h1>
                    <div className = "wrapper">
                        <input type="text" className="num" value={Numero} placeholder="Ingrese el num. de Telefono." onChange={e=> setNumero(e.target.value)}/>
                    </div>
                </div>
                <div className="BotBottom">
                    <div className="CantidadPaquetes">
                        <h1>Cantidad de Paquetes</h1>
                        <div className = "wrapper">
                            <input type="text" className="num" value={CantidadPaquetes} placeholder="Ingrese el num. de CantidadPaquetes." onChange={e=> setCantidadPaquetes(e.target.value)}/>
                        </div>
                    </div>
                    <div className="Pagado">
                        <h1>Pagado</h1>
                        <div className = "wrapper">
                            <input type="checkbox" className="num" value={Pagado} onChange={e => setPagado(e.target.checked)}/>
                        </div>
                    </div>
                    <div className="Entregado">
                        <h1>Entregado</h1>
                        <div className = "wrapper">
                            <input type="checkbox" className="num" value={Entregado} onChange={e => setEntregado(e.target.checked)}/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="Pollos">
                <h1>Pollos</h1>
                <div className="Relleno">
                    <h1>Relleno</h1>
                    <div className = "wrapper">
                        <input type="text" className="num" value={Relleno} placeholder="Ingrese el num. de Relleno." onChange={e=> setRelleno(e.target.value)}/>
                    </div>
                </div>
                <div className="Adobado">
                    <h1>Adobado</h1>
                    <div className = "wrapper">
                        <input type="text" className="num" value={Adobado} placeholder="Ingrese el num. de Adobado." onChange={e=> setAdobado(e.target.value)}/>
                    </div>
                </div>
                <div className="Natural">
                    <h1>Natural</h1>
                    <div className = "wrapper">
                        <input type="text" className="num" value={Natural} placeholder="Ingrese el num. de Natural." onChange={e=> setNatural(e.target.value)}/>
                    </div>
                </div>
            </section>
            <section className="Carnes">
                <h1>Carnes</h1>
                <div className="Lomo">
                    <h1>Lomo</h1>
                    <div className = "wrapper">
                        <input type="text" className="num" value={Lomo} placeholder="Ingrese el num. de Lomo." onChange={e=> setLomo(e.target.value)}/>
                    </div>
                </div>
                <div className="Pierna">
                    <h1>Pierna</h1>
                    <div className = "wrapper">
                        <input type="text" className="num" value={Pierna} placeholder="Ingrese el num. de Pierna." onChange={e=> setPierna(e.target.value)}/>
                    </div>
                </div>
                <div className="Costilla">
                    <h1>Costilla</h1>
                    <div className = "wrapper">
                        <input type="text" className="num" value={Costilla} placeholder="Ingrese el num. de Costilla." onChange={e=> setCostilla(e.target.value)}/>
                    </div>
                </div>
            </section>
            <section className="Complementos">
                <h1>Complementos</h1>
                <div className="Manzana">
                    <h1>Manzana</h1>
                    <div className = "wrapper">
                        <input type="text" className="num" value={Manzana} placeholder="Ingrese el num. de Coditos." onChange={e=> setManzana(e.target.value)}/>
                    </div>
                </div>
                <div className="Coditos">
                    <h1>Coditos</h1>
                    <div className = "wrapper">
                        <input type="text" className="num" value={Coditos} placeholder="Ingrese el num. de Coditos." onChange={e=> setCoditos(e.target.value)}/>
                    </div>
                </div>
                <div className="Spaguetti">
                    <h1>Spaguetti</h1>
                    <div className = "wrapper">
                        <input type="text" className="num" value={Spaguetti} placeholder="Ingrese el num. de Spaguetti." onChange={e=> setSpaguetti(e.target.value)}/>
                    </div>
                </div>
                <div className="Rusa">
                    <h1>Rusa</h1>
                    <div className = "wrapper">
                        <input type="text" className="num" value={Rusa} placeholder="Ingrese el num. de Rusa." onChange={e=> setRusa(e.target.value)}/>
                    </div>
                </div>
                <div className = "Chiles">
                    <h1>Chiles</h1>
                    <div className = "wrapper">
                        <input type="text" className="num" value={Chiles} placeholder="Ingrese el num. de Chiles." onChange={e=> setChiles(e.target.value)}/>
                    </div>
                </div>
                <div className = "Otros">
                    <h1>Otros</h1>
                    <div className = "wrapper">
                        <input type="text" className="text" value={Otros} placeholder="Comentarios..." onChange={e=> setOtros(e.target.value)}/>
                    </div>
                </div>
            </section>
            <section className="TotalApartado">
                <h1>Total</h1>
                <div className = "Anticipo">
                    <h1>Anticipo</h1>
                    <div className = "wrapper">
                        <input type="text" className="num" value={Anticipo} placeholder="Ingrese el num. de Anticipo." onChange={e=> setAnticipo(e.target.value)}/>
                    </div>
                </div>
                <div className = "Restante">
                    <h1>Restante</h1>
                    <div className = "wrapper">
                        <input type="text" className="num" value={Restante} placeholder="Ingrese el num. de Restante." onChange={e=> setRestante(e.target.value)}/>
                    </div>
                </div>
                <div className="Total">
                    <h1>Total</h1>
                    <div className = "wrapper">
                        <input type="text" className="num" value={Total} placeholder="Ingrese el num. de Total." onChange={e=> setTotal(e.target.value)}/>
                    </div>
                </div>
            </section>
            <br/>
            <br/>
            <button className="Enviar" onClick={postOrder}>Enviar</button>
        </div>
    );
}

export default Formulario;