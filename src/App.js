import {Routes,Route,Outlet} from 'react-router-dom'
import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import Authentication from './routes/authentication/Authentication';


const Shop = () =>{
  return(
    <div>
      <div>
        <h2>Hello this is Shop</h2>
      </div>
      </div> 
  )
}


const App = () =>{
  return(
    <Routes>
      <Route path='/' element = {<Navigation/>} >
        <Route index element = {<Home/>}/>
        <Route path='shop' element = {<Shop/>} />
        <Route path='auth' element = {<Authentication/>} />
      </Route>
    </Routes>
  )
}
export default App;
