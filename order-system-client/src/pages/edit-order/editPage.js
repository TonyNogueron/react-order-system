import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Order from "../../components/order-component/orderComponent";
import EditOrder from "./editOrder";

function EditPage() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const [order, setOrder] = useState([]);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        axios
         .get("http://localhost:3001/getOrderById", { params: { id: id } })
         .then((res) => {
           setOrder(res.data);
           setReady(true);
         })
         .catch((err) => {
           console.log(err);
         });
   }, [id]);

    return (
        <div>
            <Order props={order} />
            {ready && <EditOrder initialState={order[0]} />}
        </div>
    );
}

export default EditPage;