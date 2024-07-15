import Catogory from "./catogory.jsx"
import Navbar from "./navbar.jsx"
import "./../style/App.css"
import { ProductList } from "./ProductList.jsx";
import Carousels from './Carousels.jsx';
function App() {
  // debugger;
  return <div className="app">
    <Navbar />
    <Catogory/>
    <Carousels/>
    <ProductList/>
    </div>
}

export default App
