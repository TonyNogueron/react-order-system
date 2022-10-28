import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Order from "../../components/order-component/orderComponent";

function EditOrder() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");

    const [order, setOrder] = useState();

    useEffect(() => {
        getOrder();
    }, []);

    const getOrder = () => {
        axios
          .get("http://localhost:3001/getOrderById", { params: { id: id } })
          .then((res) => {
            setOrder(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
    };

  return (
    <>
    <h1>
        {id}
    </h1>
     <Order props={order} />
     </>
  );
}

export default EditOrder;