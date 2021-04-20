import React from "react";
// import BasicTable from "./components/BasicTable";
//  import SortingTable from "./components/SortingTable";
//import FilteringTable from "./components/FilteringTable";
import PaginationTable from "./components/PaginationTable";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div>
        <PaginationTable />
      </div>
    </div>
  );
}
