import axios from "axios";

const STOCK_API_URL="http://localhost:8083/api/v1.0/market/stock/getall";
const COMPANY_API_URL="http://localhost:8088/api/v1.0/market/company/getcompanies";

class StockService {

    getStocks(){
        return axios.get(STOCK_API_URL);
    }

    getCompanies()
    {
        return axios.get(COMPANY_API_URL);
    }
    addStockPrice(stockPriceRequest, companyCode){
        return axios.post("http://localhost:8083/api/v1.0/market/stock/add/" + '/' + companyCode, stockPriceRequest);
    }
}

export default new StockService()