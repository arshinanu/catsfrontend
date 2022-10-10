import React, { Component } from 'react';
import StockService from '../services/StockService';
import withNavigateHook from '../services/withNavigateHook';

class ListAllCompanies extends Component {
  
    constructor(props) {
        super(props)

        this.state = {
                company: []
        }
        this.addStocks = this.addStocks.bind(this);
    }

    componentDidMount(){
      StockService.getCompanies().then((res)=>{
        this.setState({company:res.data})
         });
    }
    addStocks(companycode){
        this.props.navigation(`/add-stock/${companycode}`);
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Companies</h2>
                 <br></br>
                    <div className="row">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th> companyCode</th>
                                    <th> companyName</th>
                                    <th>companyCeo</th>
                                    <th>companyTurnOver</th>
                                    <th> companyWebsite</th>
                                    <th> stockExchange</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.company.map(
                                        company =>
                                        <tr key= {company.sid}>
                                            <td>{company.companyCode} </td>
                                            <td>{company.companyName}</td>
                                            <td>{company.companyCeo}</td>
                                            <td>{company.companyTurnOver}</td>
                                            <td>{company.companyWebsite}</td>
                                            <td>{company.stockExchange}</td>
                                            <td>
                                            <button onClick={ () => this.addStocks(company.companyCode)} className="btn btn-info">Add stock Price </button>
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

export default withNavigateHook(ListAllCompanies);