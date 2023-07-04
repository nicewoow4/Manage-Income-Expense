import React from "react";
import "./Financedata.css";
import List from "./List";
import Calfinance from "./Calfinance";
function Financedata(props) {
  const { datalist, setDatalist, editdata, deletedata } = props;

  return (
    <div className="finance-data shadow">
      <div style={{ textAlign: "center" }}>
        <h5>รายการ</h5>
      </div>
      {datalist.length > 0 ? (
        <div style={{ padding: "10px 20px" }}>
          {datalist.map((data) => (
            <List
              key={data.id}
              datalist={data}
              deletedata={deletedata}
              editdata={editdata}
            />
          ))}
        
        </div>
      ) : (
        <div>
          <br /> <p style={{ textAlign: "center" }}>-ไม่พบรายการ-</p>
        </div>
      )}
    </div>
  );
}

export default Financedata;
