import "./App.css";
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./contexto/CartContext";
const App = () => {
        return (
                        <BrowserRouter>
                                <CartProvider>
                                        <Header/>
                                        <Main/>
                                        <Footer/>
                                 </CartProvider>
                         </BrowserRouter>
        );
};

export default App;
