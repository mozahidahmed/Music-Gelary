import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Search from './components/Search';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="row">

      <div className="col-2  p-4 py-6">
        <SideBar />
      </div>
     
      <div className="col-8 p-4">
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/search' element={<Search/>}></Route>
      </Routes>
      </div>
      
     <Footer/>
    </div>
    
  );
}

export default App;
