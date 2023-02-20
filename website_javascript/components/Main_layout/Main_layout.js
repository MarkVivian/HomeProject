import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

export default function Main_layout({children}){
    return(
        <>
            <Header />
            
            <Navbar />
            
            {children}
            
            <Footer />
        </>
    )
}