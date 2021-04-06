import React from "react";
function Card(prop) {
  console.log(prop);
  return (
    <div className="card">
      <div className="card_image">
        <img src={prop.imgsrc} alt="dark" />
      </div>
      <div className="card_info">
        <p className="series_title">{prop.title} </p>
        <h3 className="series_name">{prop.sname}</h3>
        <a href={prop.link} target="blank" className="button">
          watch Now
        </a>
      </div>
    </div>
  );
}
export default Card;
const CardA = <div className="carda"></div>;
export { CardA };
