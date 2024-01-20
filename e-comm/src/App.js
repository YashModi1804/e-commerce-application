import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Nav from "./Components/Nav"
import Footer from "./Components/Footer"
import SignUp from './Components/signup';
import PrivateComponent from './Components/private';
import Login from './Components/login'
import AddProduct from './Components/product';
export default function App(){
  return(   

    <div className="App">
     
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path='/' element={<h1>hello</h1>}></Route>
        <Route path='/add-product' element={<AddProduct/>}></Route>
        <Route path='/update' element={<h1>Update Product</h1>}></Route>
        <Route path='/logout' element={<h1>Log Out </h1>}></Route>
        <Route path='/profile' element={<h1>Profile Area</h1>}></Route>
        </Route>
        {/* closing route for the private component to make the all upper element as private commponent */}
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        
      </Routes>
      <Footer/>
     </BrowserRouter>
    </div> 
  );
}
