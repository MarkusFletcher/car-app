import { ReactElement, useEffect } from "react"
import { Home } from './views/Home'
import { Catalog } from './views/Catalog'
import { CatalogDetail } from './views/CatalogDetail'
import { CatalogAdd } from './views/CatalogAdd'
import { Registration } from './views/Registration'
import { NotFound } from './views/NotFound'
import { Header } from './components/layout/header'
import { Routes, Route, Outlet, Link } from "react-router-dom"

const App: React.FC = (): ReactElement => {
  return (
    <>
      <Header></Header>
      <main className="main">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/catalog' element={<Catalog/>}></Route>
          <Route path='/catalog/:id' element={<CatalogDetail/>}></Route>
          <Route path='/catalog/add' element={<CatalogAdd/>}></Route>
          <Route path='/registration' element={<Registration/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </main>
    </>
  )
}

export default App
