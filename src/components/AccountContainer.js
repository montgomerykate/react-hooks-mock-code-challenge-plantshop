import React, {useEffect, useState} from "react";
import TransactionsList from "./TransactionList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm.js";

function AccountContainer({ search, transaction }) {
  const [transactionsArr, setTransactionsArr] = useState([])
  useEffect(() => {
    fetch('http://localhost:6001/transactions')
    .then(res => res.json())
    .then(transactionsArr => setTransactionsArr(transactionsArr))
  }, [])


const filteredTransactions = transactionsArr.filter(transactionsArr => {
  return transactionsArr.description.includes(search)
})


const transactionList = filteredTransactions.map(transactionObj => {
return<TransactionsList 
key = {transactionObj.id}
transactions = {transactionObj}
/>
}) 

  return (
    <div>
      <Search transactionList={transactionList} />
      <AddTransactionForm />
      <TransactionsList transactionsArr={transactionsArr} />
    </div>
  );
}

export default AccountContainer;