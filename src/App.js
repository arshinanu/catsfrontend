import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import ListLatestStocks from './components/ListLatestStocks';
import AddStockPrice from './components/AddStockPrice';
import AddCompany from './Companies/AddCompany';
import AddStock from './components/AddStock';
import ViewCompany from './components/ViewCompany';
import ListAllCompanies from './components/ListAllCompanies';

function App() {
  return (
   
    <div>
      <Router>
          <Navbar/>
            <div className="container">
              <Routes>
                <Route exact path="/" element={<><ListAllCompanies/><ListLatestStocks/></>}/>
                <Route exact path="/stocks" element={<ListLatestStocks/>}/> 
                <Route exact path="/companies" element={<ListAllCompanies/>}/> 
                <Route path = "/add-stock/:companycode"element={<AddStock/>}/>  
                <Route path = "/view-company/:companycode"element={<ViewCompany/>}/>           
              </Routes>
            </div>
          <Routes>
            <Route exact path={"/addcompany"} element={<AddCompany/>} />
          </Routes>
      </Router>
    </div>
    
  );
}

export default App;
