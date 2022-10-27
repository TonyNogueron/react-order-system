import React from "react";
import styles from "./Folio.css";



let count = 0;
document.querySelector(".plus").addEventListener("click", () => {
    count++;
    document.querySelector(".plus").innerHTML = count;
});

document.querySelector(".minus").addEventListener("click", () => {
    if (count > 0) {
        count--;
        document.querySelector(".num").innerHTML = count;
    }
});



function Folio() {
    return (
        <div className="Folio">
            <h1>Folio</h1>
            <div class = "wrapper">
                <span class = "minus">-</span>
                <span class = "num">0</span>
                <span class = "plus">+</span>
            </div>
        </div>
    );
}

export default Folio;