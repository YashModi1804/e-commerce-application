import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Nav from "./Nav"
export default function App(){
  return(
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <h1>E-dashboard</h1>
      </BrowserRouter>
      
    </div>
  )
}
