import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import List from "./components/List";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './css/bootstrap.min.css'
import './css/App.css'



function App() {
  return (
    <>
    <div className="body">
    <Header />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/list" element={<List />} />
      </Routes>

    <Footer/>
    </div>
    </>
  );
}

export default App;
