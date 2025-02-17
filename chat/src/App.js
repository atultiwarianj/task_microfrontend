import ChatComponent from "./Components/ChatComponent.jsx";
import React from "react"
import {BrowserRouter} from 'react-router-dom'
 const App = () =>{
    return(
        <BrowserRouter>
        <ChatComponent />
        
        </BrowserRouter>
    )
 } 
 export default App