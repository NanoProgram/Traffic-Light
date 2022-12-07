import React from "react";
import { useEffect, useState } from "react";

const Traffic = () => {
const [color, setColor] = useState("red")
function now() {
    setColor (prev =>"")
    console.log("now")
}

    return (
        <div class="semaforo">
            <div class= "red" onClick={() => now()}></div>
            <div class="yellow"></div>
            <div class= "green"></div>
        </div>
    );
};














export default Traffic;