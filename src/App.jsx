import Navbar from "./components/Navbar"
import CatCar from "./components/CatCar"
import { BrowserRouter } from "react-router"
import ProductosProvider from "./contex/productos"

function App() {

  return (
    <>
      <BrowserRouter>
        <ProductosProvider>
          <Navbar></Navbar>
          <CatCar></CatCar>
        </ProductosProvider>
      </BrowserRouter>
    </>
  )
}

export default App
