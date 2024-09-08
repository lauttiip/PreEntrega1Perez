import viteLogo from '/vite.svg'
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <>
      <NavBar/>
      <ItemsListContainer greeting={"Bienvenido a la tienda N° 1 en gorras"}/>
    </>
  )
}

export default App
