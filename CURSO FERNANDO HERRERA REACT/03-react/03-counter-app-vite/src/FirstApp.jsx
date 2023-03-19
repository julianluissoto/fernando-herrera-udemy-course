import React from "react";
import PropTypes from "prop-types";
/* const funtionalValue = () => {
  return "value from function";
}; */
/* const valueObject = {
  name: "julian",
  lastname: "soto",
}; */

const FirstApp = ({ title, subtitle, number, name }) => {
  return (
    <>
      <h1 data-testid ='test-title'>{title}</h1>
      {/* <code>{JSON.stringify(valueObject)}</code> */}
      {/*  <h2>{funtionalValue()}</h2> */}
      <h2>{subtitle}</h2>
     
    </>
  );
};

export default FirstApp;

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  number: PropTypes.number,
};

FirstApp.defaultProps= {
title:"name by default props" , //if title is not pass by props it will use default prop
name: "julian soto"
}