import React from "react";
import "./List.css";
import Button from "react-bootstrap/Button";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

function List(props) {
  const { datalist , deletedata ,editdata} = props;
  return (
    <div className={datalist.finance}>
      <li className="data-list">
        <p>{datalist.name}</p>
        <p>
          {datalist.finance === "expenses" ? "-" : "+"} {datalist.amount}
        </p>
        <p>
          <button onClick={() => editdata(datalist.id)}>
            <FaEdit/>
          </button>
          <button onClick={() => deletedata(datalist.id)}>
            <FaRegTrashAlt />
          </button>
        </p>
      </li>
    </div>
  );
}

export default List;
