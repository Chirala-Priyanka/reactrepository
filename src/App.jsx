import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";
import Cart from "./Cart";
import ContactUs from "./ContactUs";
import Home from "./Home";
import NonVeg from "./NonVeg";
import PurchaseHistory from "./PurchaseHistory";
import Veg from "./Veg";
import "./App.css";
import { useSelector } from "react-redux";
import GoogleLoginComponent from "./GoogleLoginComponent";
import { GoogleOAuthProvider } from "@react-oauth/google";
import FacebookLoginComponent from "./FaceBookLoginComponent";

function App()
{
  const cart=useSelector((state)=>state.cart)
  const totalItems=cart.reduce((sum,item)=>sum+item.quantity,0);
  return(
    <>
    <FacebookLoginComponent />
    <GoogleOAuthProvider clientId="921957746885-ul3cukuvbctg9bd66kn0givui3f0pl3a.apps.googleusercontent.com">
    <GoogleLoginComponent />
   </GoogleOAuthProvider>
   
    
   
    <BrowserRouter>
      <Link to="/home">Home</Link>
      <Link to="/veg">Veg</Link>
      <Link to="/nonveg">NonVeg</Link>
      <Link to="/cart">Cart({totalItems})</Link>
      <Link to="/purchasehistory">PurchaseHistory</Link>
      <Link to="/aboutus">AboutUs</Link>
      <Link to="/contactus">ContactUs</Link>
     
      <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/contactus" element={<ContactUs/>} />
          <Route path="/veg" element={<Veg/>} />
          <Route path="/nonveg" element={<NonVeg/>} />
          <Route path="/purchasehistory" element={<PurchaseHistory/>} />

         </Routes>
          </BrowserRouter>
          
      
      </>
  )
}
export default App;