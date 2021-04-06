import React from "react";
import Card, { CardA } from "./Card.js";
import Cdata from "./Cdata.js";

const netcard = (val) => {
  // console.log(val);
  return (
    <Card
      key={val.id}
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
  );
};
const Cardapp = () => {
  return (
    <>
      <h3 className="heading">list of top 5 netflix series in 2020</h3>
      <div className="crad_container">
        <div className="card_center">
          {Cdata.map(netcard)}
          {CardA}
        </div>
      </div>
    </>
  );
};
export default Cardapp;
