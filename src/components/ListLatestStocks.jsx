import React, { Component } from 'react';
import StockService from '../services/StockService';
import withNavigateHook from '../services/withNavigateHook';


class ListLatestStocks extends Component {

    constructor(props) {
        super(props)

        this.state = {
                stock: []
        }
        
        this.addStocks = this.addStocks.bind(this);
        this.viewCompany=this.viewCompany.bind(this);
    }

    componentDidMount(){
        StockService.getStocks().then((res)=>{
            this.setState({stock:res.data})
        });
    }
    
    addStocks(companycode){
        this.props.navigation(`/add-stock/${companycode}`);
    }
    viewCompany(companycode){
        this.props.navigation(`/view-company/${companycode}`);
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Stocks</h2>
                 <br></br>
                    <div className="row">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th> companyCode</th>
                                    <th> price</th>
                                    <th>stockPriceTime</th>
                                    <th>stockExchange</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.stock.map(
                                        stock =>
                                        <tr key= {stock.sid}>
                                            <td>{stock.companyCode} </td>
                                            <td>{stock.price}</td>
                                            <td>{stock.stockPriceTime}</td>
                                            <td>{stock.stockExchange}</td>
                                            <td>
                                            <button onClick={ () => this.addStocks(stock.companyCode)} className="btn btn-info">Add stock Price </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewCompany(stock.companyCode)} className="btn btn-info">View Company </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>

            </div>
        );
    }
} 

export default withNavigateHook(ListLatestStocks);