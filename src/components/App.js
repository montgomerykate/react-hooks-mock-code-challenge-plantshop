import React, {useState} from "react";
import AccountContainer from "./AccountContainer";

function App() {
    const[search, setSearch] = useState("")
    function handleSearch(newSearch) {
        setSearch(newSearch)
    }
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer search={search} />
    </div>
  );
}

export default App;
