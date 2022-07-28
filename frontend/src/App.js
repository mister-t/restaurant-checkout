// import Header from "./components/layout/Header";
// import Footer from "./components/layout/Footer";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Menu from "./pages/Menu";

const App =  () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Menu/>} exact />
        <Route path='/categories/:id' element={<Menu/>} exact />
      </Routes>
    </Router>
  );
}

export default App;
