import React, {useState} from "react";

function Search({ onSearch, handleSubmit }) {
  const [currentSearch, setCurrentSearch] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    onSearch(currentSearch);
  }
  return (
    <div className="ui large fluid icon input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value = {currentSearch}
        onChange={(e) => setCurrentSearch(e.target.value)}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
