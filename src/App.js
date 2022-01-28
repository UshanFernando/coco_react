import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import AdvertistmentCarousel from "./components/AdvertistmentCarousel";
import Search from "./pages/SearchSellers";
import SearchBuyers from "./pages/SearchBuyers";
import SellerDetails from "./pages/SellerDetails";
import Admin
 from "./pages/Admin";
// requires a loader
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BuyerDetails from "./pages/BuyerDetails";

function App() {
  return (
    <>
      <Nav />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sellers" element={<Search />} />
          <Route exact path="/buyers" element={<SearchBuyers/>} />
          <Route exact path="/viewSeller" element={<SellerDetails />} />
          <Route exact path="/viewBuyer" element={<BuyerDetails />} />
          <Route exact path="/admin" element={<Admin />} />
          {/* <Route exact path="/login" element={<Login />} />
        <Route exact path="/recovery-password" element={<RecoveryPassword />} /> */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
