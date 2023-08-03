import React from "react";
//import Moment from 'react-moment';
import moment from "moment";
const DateFormatter = ({ date }) => {
    const formattedDate = moment(date).format("D MMM YYYY");
  return (
     <span>{formattedDate}</span>
  );
};

export default DateFormatter;