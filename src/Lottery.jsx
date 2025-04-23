import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({ n = 3, winCondition }) {
  let [ticket, setTicket] = useState(genTicket(n));

  let isWinning = winCondition(ticket);

  let newTicket = () => {
    setTicket(() => {
      return genTicket(n);
    });
  };

  return (
    <div className="container">
      <h2>Lottery Game</h2>
      <Ticket ticket={ticket} />
      <button onClick={newTicket}>Buy New Ticket</button>

      <div>
        {isWinning ? (
          <h3 className="win">Congratulations you have won!</h3>
        ) : (
          <p className="hint">
            Hint: Get a ticket with a total sum of 15 to win!
          </p>
        )}
      </div>
    </div>
  );
}
