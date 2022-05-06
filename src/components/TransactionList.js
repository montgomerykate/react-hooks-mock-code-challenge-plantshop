import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ TransactionList }) {
  const [date, description, category, amount] = TransactionList

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">{date}</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">{description}</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">{category}</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">{amount}</h3>
          </th>
        </tr>
        
      </tbody>
    </table>
  );
}

export default TransactionsList;
