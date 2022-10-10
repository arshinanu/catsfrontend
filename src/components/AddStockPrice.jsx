import React, { Component } from 'react';
import {useParams} from "react-router-dom"
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import StockService from '../services/StockService';

export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }

 

class AddStockPrice extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            companyCode:this.props.match.params.companyCode,
            price:'0',
            stockExchange:''
        }
        this.savePrice=this.savePrice.bind(this);
        this.onInputchange=this.onInputchange.bind(this);
        
    }
    
    savePrice= (e) => {
        let navigate = useNavigate();
        let stockPriceRequest = {companyCode: this.state.companyCode, price: this.state.price, stockExchange: this.state.stockExchange};
        StockService.AddStockPrice(stockPriceRequest, this.state.companyCode).then( res => {
            this.props.history.push('/stocks');
        });
    }

    onInputchange=(e)=> {
        this.setState({
          [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div>
                <br></br>
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <div className = "card-body">
                            <form>
                                <div className = "form-group">
                                    <label> price: </label>
                                    <input placeholder="Current Price" name="price" className="form-control" 
                                        value={this.state.price} onChange={this.onInputchange} />
                                </div>
                                <div className = "form-group">
                                    <label> stockExchange </label>
                                    <input placeholder="stockExchange" name="stockExchange" className="form-control" 
                                        value={this.state.stockExchange} onChange={this.onInputchange}/>
                                </div>
                                <br></br>
                                <button className="btn btn-success" onClick={this.savePrice}>Save</button>
                                <button className="btn btn-danger"style={{marginLeft: "10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>

           </div>
            </div>
        );
    }
}

export default withRouter(AddStockPrice);