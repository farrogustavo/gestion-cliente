
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListClientesComponent from './components/ListClientesComponent';
import AddClienteComponent from './components/AddClienteComponent';

function App() {
  return (
    <div>
     <BrowserRouter>
     <HeaderComponent/>
     <div className='container'>
      <Routes>
        <Route exact path='/'element={<ListClientesComponent/>}></Route>
        <Route  path='/clientes'element={<ListClientesComponent/>}></Route>
        <Route  path='/add-cliente'element={<AddClienteComponent/>}></Route>
      </Routes>
     </div>
     <FooterComponent/>
     </BrowserRouter>
    </div>
  );
}

export default App;
