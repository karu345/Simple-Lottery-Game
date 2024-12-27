import './App.css'
import Ticket from './Ticket'
import LotteryGame from './LotteryGame';
import {sumArr} from "./helper.js"

function App() {

  let winCondition = (ticket) => {
    return sumArr(ticket) === 15;
  }

  return (
    <>
      <LotteryGame n={3} winCondition={winCondition}/>
    </>
  );
}

export default App
