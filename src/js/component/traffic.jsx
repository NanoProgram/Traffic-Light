import React from "react";
import { useEffect, useState } from "react";

const Traffic = () => {
const [color, setColor] = useState("red")
function now(color) {
    setColor (prev => color)
    console.log("now")
}

    return (
        <div class="semaforo">
            <div class= {color == "red" ? "red on" : "red"} onClick={() => now("red")}></div>
            <div class= {color == "yellow" ? "yellow on" : "yellow"} onClick={() => now("yellow")}></div>
            <div class= {color == "green" ? "green on" : "green"} onClick={() => now("green")}></div>
        </div>
    );
};














export default Traffic;