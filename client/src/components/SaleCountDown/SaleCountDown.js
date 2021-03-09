import React from "react";

const SaleCountDown = (props) => {
  // let t = new Date().getTime();
  // var seconds = Math.floor((t / 1000) % 60);
  // var minutes = Math.floor((t / 1000 / 60) % 60);
  // var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  // var days = Math.floor(t / (1000 * 60 * 60 * 24));
  // console.log("sec:", seconds);
  // console.log("min:", minutes);
  // console.log("hour:", hours);
  // console.log("days:", days);
  return (
    <div
      className={!props.timeOverCheck ? "saleComponent" : "saleComponentOver"}
    >
      <img
        alt="sale"
        className="gif"
        src={
          !props.timeOverCheck
            ? "https://customleather.co.za/wp-content/uploads/2019/11/Loca.gif"
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS25iBL80KLHc2T1Fl0eZJZglWj4PKtkn3aHA&usqp=CAU"
        }
      ></img>
      <span id="content"> {props.content}</span>
      {!props.timeOverCheck && (
        <div>
          <span id="clockMin">
            {props.minutes < 10
              ? "0" + props.minutes + ":"
              : props.minutes + ":"}
          </span>
          <span id="clockSec">
            {props.seconds < 10 ? "0" + props.seconds : props.seconds}
          </span>
        </div>
      )}
      <img
        alt="sale"
        className="gif"
        src={
          !props.timeOverCheck
            ? "https://media3.giphy.com/media/ihRns6OmqTjKWwxle4/source.gif"
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjWhgR1MHmRlQfEDgHcHy9WGOzN7X6V_rRug&usqp=CAU"
        }
      ></img>
    </div>
  );
};
export default SaleCountDown;
