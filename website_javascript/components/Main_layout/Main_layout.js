import { Provider } from "react-redux";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Store from "@/Store/Store"

export default function Main_layout({children}){
    
    return(
        <Provider store={Store}>
            <Header />
            
            <Navbar />
            
            {children}
            
            <Footer />
        </Provider>
    )
}