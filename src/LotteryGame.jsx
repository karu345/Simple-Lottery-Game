import { useState } from "react";
import { genRandom, sumArr } from "./helper";
import Ticket from "./Ticket";

export default function LotteryGame({n=3, winCondition}) {
    let [array, setArray] = useState(genRandom(n));

    let newTicket = () => {
        setArray(genRandom(n));
    }

    let isWinning = winCondition(array);

    return (
        <div>
            <h1>Lottery Game!!!</h1>
            <Ticket ticket={array}/>
            <button onClick={newTicket}>Get New Ticket</button>
            <h3>{isWinning && "Congratulations, You Won!!!"}</h3>
        </div>
    )
}