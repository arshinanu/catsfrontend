import React, { useState } from "react";
import axios from "axios";
import {Navigate, useNavigate, useParams} from "react-router-dom";

const AddStock = () => {

  let navigate = useNavigate();

  const[stockPriceRequest,setStockPriceRequest]=useState({
    price:"",
    stockExchange:"",
  });
  const {companyCode} =useParams()
  
  const{price,stockExchange}=stockPriceRequest;

  const onInputChange = (e) => {
    //spread operator (since we are giving only name field)
    //new update will keep on adding
    setStockPriceRequest({ ...stockPriceRequest, [e.target.name]: e.target.value });
    //check in components
  };

  var url = window.location.href;
  var page = url.substring(url.lastIndexOf('/') + 1);

  const onSubmit = async (e) => {
    e.preventDefault();
    //we are sending user so User
    await axios.post("http://localhost:8083/api/v1.0/market/stock/add/"+page, stockPriceRequest);
    navigate("/");
   
  };

  return (
    <div className={"container"}>
      <div className="row">
    <div
  className={
    "col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"
  }
  >
    <h2 className={"text-center m-4"}>Add Stocks</h2>
    <form onSubmit={(e) => onSubmit(e)}>
        <div className={"mb-3"}>
          <label htmlFor={"price"} className={"form-label"}>
          price
          </label>
          <input
            type={"text"}
            className={"form-control"}
            placeholder={"Enter the price"}
            name={"price"}
            value={price}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className={"mb-3"}>
          <label htmlFor={"stockExchange"} className={"form-label"}>
            Stock Exchange
          </label>
          <input
            type={"text"}
            className={"form-control"}
            placeholder={"Enter the stockExchange"}
            name={"stockExchange"}
            value={stockExchange}
            onChange={(e) => onInputChange(e)}
          />
        </div>
         <button type={"submit"} className={"btn btn-outline-primary"}>
              Submit
            </button>
    </form>
</div>
</div>
</div>
  );

};

export default AddStock;