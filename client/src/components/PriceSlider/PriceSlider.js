import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import "./PriceSlider.css";
// import { Slider, Switch } from "antd";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

const PriceSlider = (props) => {
  const classes = useStyles();
  // const [localValue, setLocalValue] = useState("");
  //   console.log(localValue);
  return (
    <div className={classes.root} id="slider">
      <Typography id="discrete-slider" gutterBottom>
        Filter By Price Up To:
      </Typography>
      <Slider
        // onChange={(e) => valuetext(e.target.value)}
        defaultValue={700}
        getAriaValueText={props.filteredPriceFunc}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={700}
      />
      {/* <Typography id="discrete-slider" gutterBottom>
        Disabled
      </Typography>
      <Slider
        defaultValue={30}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
        disabled
      /> */}
      You are filtering Up To: {props.filteredPrice}$
    </div>
  );
};
export default PriceSlider;
