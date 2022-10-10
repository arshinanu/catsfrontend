import React, { useEffect, useState } from "react";
import axios from "axios";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import { Alert } from "bootstrap";

const ViewCompany = () => {
  const[stockPriceRequest,setStockPriceRequest]=useState({
    company:{
        companyCode:"",
        companyName:"",
        companyCeo:"",
        companyTurnOver:"",
        companyWebsite:"",
        stockExchange:"",
    },
    stock:{
        companyCode:"",
        price:"",
        stockPriceTime:"",
        stockExchange:"",
    }
    
  });


  const[stockRequest,setStockRequest]=useState({
    startStockDate:"",
    endStockDate:""
  });

  const[stockInfoResponse,setStockInfoResponse]=useState({
    stocks:[{
      sid:"",
      companyCode:"",
      price:"",
      stockPriceTime:"",
      stockExchange:""
    }],
    maxStockPrice:"",
    minStockPricek:"",
    avgStockPrice:"",

  });

  const{companyCode,startStockDate,endStockDate}=stockRequest;
  const{stocks,maxStockPrice,minStockPricek,avgStockPrice}=stockInfoResponse;

  const onInputChange = (e) => {
    //spread operator (since we are giving only name field)
    //new update will keep on adding
    setStockRequest({ ...stockRequest, [e.target.name]: e.target.value });
    //check in components
  };

 

  useEffect(() => {
    loadStockPriceRequest();
  });

  var url = window.location.href;
  var page = url.substring(url.lastIndexOf('/') + 1);

  const onSubmit = async (e) => {
    e.preventDefault();
    stockRequest.companyCode= stockPriceRequest.company.companyCode;
    const result=await axios.post(`http://localhost:8083/api/v1.0/market/stock/getStocks/`, stockRequest);
    setStockInfoResponse(result.data)
  }

  const loadStockPriceRequest = async () => {
    const result = await axios.get(`http://localhost:8083/api/v1.0/market/stock/find/`+page);
    setStockPriceRequest(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div
          className={
            "col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"
          }
        >
          <h2 className={"text-center m-4"}>Company Details</h2>

          <div className="card">
            <div className="card-header">
              Company Code :{stockPriceRequest.company.companyCode}
              <ul className={"list-group list-group-flush"}>
                <li className="list-group-item">
                  <b>Name of the company: </b>
                  {stockPriceRequest.company.companyName}
                </li>
                <li className="list-group-item">
                  <b>Stock: </b>
                  {stockPriceRequest.stock.price}
                </li>
                <li className="list-group-item">
                  <b>Stock Exchange: </b>
                  {stockPriceRequest.stock.stockExchange}
                </li>
                <li className="list-group-item">
                  <b>Company CEO </b>
                  {stockPriceRequest.company.companyCeo}
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
      <div className="row">
    <div
  className={
    "col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"
  }
  >
    <h2 className={"text-center m-4"}>Fetch Stocks</h2>
    <form onSubmit={(e) => onSubmit(e)}>
        <div className={"mb-3"}>
          <label htmlFor={"startStockDate"} className={"form-label"}>
          startStockDate
          </label>
          <input
            type={"datetime-local"}
            className={"form-control"}
            placeholder={"Enter the startStockDate"}
            name={"startStockDate"}
            value={startStockDate}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className={"mb-3"}>
          <label htmlFor={"endStockDate"} className={"form-label"}>
          endStockDate
          </label>
          <input
            type={"datetime-local"}
            className={"form-control"}
            placeholder={"Enter the endStockDate"}
            name={"endStockDate"}
            value={endStockDate}
            onChange={(e) => onInputChange(e)}
         />
        </div>
         <button type={"submit"} className={"btn btn-outline-primary"}>
              Find Stockprice
            </button>
    </form>
</div>
</div>
<div className="row">
<table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th> companyCode</th>
                                    <th> price</th>
                                    <th>stockPriceTime</th>
                                    <th>stockExchange</th>
                                </tr>
                            </thead>
                            <tbody>
        {
            stockInfoResponse.stocks.map((stock) => (
              <tr>
                <td>{stock.companyCode}</td>
                <td>{stock.price}</td>
                <td>{stock.stockPriceTime}</td>
                <td>{stock.stockExchange}</td>
              </tr>
            ))
        }
        </tbody>
      </table>
      <div className={
            "col-md-6 offset-md-3 border  p-4 mt-2 shadow"
          }>
            <div className="card">
            <div className="card-header">
            <h6>Maximum stock Price:{stockInfoResponse.maxStockPrice}</h6>
            </div>
            <div className="card-header">
            <h6>Minimum Stock Price:{stockInfoResponse.minStockPricek}</h6>
            </div>
            <div className="card-header">
            <h6>Average Stock Price:{stockInfoResponse.avgStockPrice}</h6>
            </div>
            
            </div>
      </div>
      </div>
    </div>
  );

};

export default ViewCompany;