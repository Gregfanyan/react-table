import React from "react";
// import BasicTable from "./components/BasicTable";
//  import SortingTable from "./components/SortingTable";
import FilteringTable from "./components/FilteringTable";
import './App.css'

export default function App() {
  return (
    <div className="App">
      <div>
        <FilteringTable />
      </div>
    </div>
  );
}
