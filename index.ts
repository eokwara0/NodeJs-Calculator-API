import axios from "axios";
import { App }  from "./src/app";



// Initializing App
const app : App = new App() ;

// Setting port 
app.setPort( 8080 );


// Initializing app 
app.start()  ; 


