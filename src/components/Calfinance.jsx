import React from "react";
import "./Calfinance.css";
function Calfinance(props) {
  const { datalist } = props;

  //รวมรายรับ
  const filterincome = datalist.filter((item) => item.finance === "income");
  console.log(filterincome);
  const sum = filterincome.reduce((accumulator, object) => {
    return accumulator + Number(object.amount);
  }, 0);
  console.log(sum);

  //รวมรายจ่าย
  const filterxpenses = datalist.filter((item) => item.finance === "expenses");
  console.log(filterincome);
  const sum2 = filterxpenses.reduce((accumulator, object) => {
    return accumulator + Number(object.amount);
  }, 0);
  console.log(sum2);

  return (
    <div>
      <div className="Calfinance">
        <div className="sum-income">
          รายรับรวม <br /> + {sum}
        </div>
        <div className="sum-expenses">
          รายจ่ายรวม <br /> - {sum2}
        </div>
      </div>
      <div className="balance">
          คงเหลือ <br /> {sum - sum2}
        </div>
    </div>
  );
}

export default Calfinance;
