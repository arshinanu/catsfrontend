import React, { useState } from "react";
import axios from "axios";
import {Navigate, useNavigate} from "react-router-dom";

const AddCompany = () => {

  let navigate = useNavigate();

  const[company,setCompany]=useState({
    companyCode:"",
    companyName:"",
    companyCeo:"",
    companyTurnOver:"0",
    companyWebsite:"",
    stockExchange:"",

  });

  const{companyCode,companyName,companyCeo,companyTurnOver,companyWebsite,stockExchange}=company;

  const onInputChange = (e) => {
    //spread operator (since we are giving only name field)
    //new update will keep on adding
    setCompany({ ...company, [e.target.name]: e.target.value });
    //check in components
  };


  const onSubmit = async (e) => {
    e.preventDefault();
    //we are sending user so User
    await axios.post("http://localhost:8088/api/v1.0/market/company/register/", company);
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
    <h2 className={"text-center m-4"}>Register Your Company</h2>
    <form onSubmit={(e) => onSubmit(e)}>
        <div className={"mb-3"}>
          <label htmlFor={"companyCode"} className={"form-label"}>
            Company Code
          </label>
          <input
            type={"text"}
            className={"form-control"}
            placeholder={"Enter the companycode"}
            name={"companyCode"}
            value={companyCode}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className={"mb-3"}>
          <label htmlFor={"companyName"} className={"form-label"}>
            Company Name
          </label>
          <input
            type={"text"}
            className={"form-control"}
            placeholder={"Enter the companyName"}
            name={"companyName"}
            value={companyName}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className={"mb-3"}>
          <label htmlFor={"companyCeo"} className={"form-label"}>
            Company CEO
          </label>
          <input
            type={"text"}
            className={"form-control"}
            placeholder={"Enter the companyCeo"}
            name={"companyCeo"}
            value={companyCeo}
            onChange={(e) => onInputChange(e)}
         />
        </div>
        <div className={"mb-3"}>
          <label htmlFor={"companyTurnOver"} className={"form-label"}>
          Company TurnOver
        </label>
        <input
          type={"text"}
          className={"form-control"}
          placeholder={"Enter the companyTurnOver"}
          name={"companyTurnOver"}
          value={companyTurnOver}
          onChange={(e) => onInputChange(e)}
        />
        </div>
        <div className={"mb-3"}>
        <label htmlFor={"companyWebsite"} className={"form-label"}>
        Company Website
      </label>
      <input
        type={"text"}
        className={"form-control"}
        placeholder={"Enter the companyWebsite"}
        name={"companyWebsite"}
        value={companyWebsite}
        onChange={(e) => onInputChange(e)}
      />
        </div>
        <div className={"mb-3"}>
        <label htmlFor={"stockExchange"} className={"form-label"}>
        stockExchange
      </label>
      <input
        type={"text"}
        className={"form-control"}
        placeholder={"Enter your stockExchange"}
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

export default AddCompany;