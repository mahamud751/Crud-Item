import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddProducts from './component/Pages/Products/AddProducts';
import EditProducts from './component/Pages/Products/EditProducts';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/addProducts" element={<AddProducts />}></Route>
          <Route path="/editProducts/:id" element={<EditProducts />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
