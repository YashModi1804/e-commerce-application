import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Nav from "./Components/Nav"
import Footer from "./Components/Footer"
import SignUp from './Components/signup';
export default function App(){
  return(   

    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<h1></h1>}></Route>
        <Route path='/add' element={<h1>Add Products</h1>}></Route>
        <Route path='/update' element={<h1>Update Product</h1>}></Route>
        <Route path='/logout' element={<h1>Log Out </h1>}></Route>
        <Route path='/profile' element={<h1>Profile Area</h1>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
      <Footer/>
     </BrowserRouter>
    </div> 
  );
}
