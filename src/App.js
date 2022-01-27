import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import AdvertistmentCarousel from "./components/AdvertistmentCarousel";
import Search from "./pages/Search";
import SellerDetails from "./pages/SellerDetails";

// requires a loader
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Nav />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/viewSeller" element={<SellerDetails />} />
          {/* <Route exact path="/login" element={<Login />} />
        <Route exact path="/recovery-password" element={<RecoveryPassword />} /> */}
          <Route path="*" element={<Search />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
