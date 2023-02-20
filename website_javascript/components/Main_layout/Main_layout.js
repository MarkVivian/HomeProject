import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Main_layout({children}){
    return(
        <>
            <Header />
            
            {children}
            
            <Footer />
        </>
    )
}