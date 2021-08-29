import React from "react";
import "./infobox.css";
import { Card, CardContent, Typography } from "@material-ui/core";

function infobox({ title, isRed, isGreen,isGrey, isBlue, cases, active, total, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infobox ${active && "infobox--selected"} ${isRed && "infobox__cases--red"} 
      ${isGreen && "infobox__cases--green"} 
      ${isGrey && "infobox__cases--grey"} ${isBlue && "infobox__cases--blue"} `}
    >
      <CardContent>
        <Typography className="infobox__title" color="textSecondary">
          {title}
        </Typography>
        <h2
          className={`infobox__cases ${isRed && "infobox__cases--red"} 
          ${isGreen && "infobox__cases--green"} 
          ${isGrey && "infobox__cases--grey"} ${isBlue && "infobox__cases--blue"} `}
        >
          {props.isloading ? <i className="fa fa-cog fa-spin fa-fw" /> : cases}
        </h2>
        <Typography className="infobox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default infobox;
