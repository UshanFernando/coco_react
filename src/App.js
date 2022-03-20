import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import AdvertistmentCarousel from "./components/AdvertistmentCarousel";
import Search from "./pages/SearchSellers";
import SearchBuyers from "./pages/SearchBuyers";
import SellerDetails from "./pages/SellerDetails";
import Admin from "./pages/Admin";
// requires a loader
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BuyerDetails from "./pages/BuyerDetails";
import AdminAds from "./pages/AdminAds";
import Login from "./pages/Login";
import WithoutNav from "./components/Support/WithoutNav";
import WithNav from "./components/Support/WithNav";
import Register from "./pages/Register";
import RegisterBuyer from "./pages/RegisterBuyer";
import RegisterSeller from "./pages/RegisterSeller";
import AdminSellers from "./pages/AdminSellers";
import BuyerAccount from "./pages/BuyerAcount";
import SellerAccount from "./pages/SellerAccount";
import PostAdBuyer from "./pages/PostAdBuyer";
import PostAdSeller from "./pages/PostAdSeller";
import MyOffers from "./pages/MyOffers";
import OfferDetails from "./pages/OfferDetails";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<WithNav />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/sellers" element={<Search />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/buyers" element={<SearchBuyers />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/viewSeller/:id" element={<SellerDetails />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/viewBuyer" element={<BuyerDetails />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/admin" element={<Admin />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/adminSellers" element={<AdminSellers />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/adminAds" element={<AdminAds />} />
          </Route>
          <Route element={<WithoutNav />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/register" element={<Register />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/registerBuyer" element={<RegisterBuyer />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/registerSeller" element={<RegisterSeller />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/buyerAccount" element={<BuyerAccount />} />
          </Route>

          <Route element={<WithNav />}>
            <Route path="/sellerAccount" element={<SellerAccount />} />
          </Route>

          <Route element={<WithNav />}>
            <Route path="/postAdBuyer" element={<PostAdBuyer />} />
          </Route>

          <Route element={<WithNav />}>
            <Route path="/postAdSeller" element={<PostAdSeller />} />
          </Route>

          <Route element={<WithNav />}>
            <Route path="/offers" element={<MyOffers />} />
          </Route>

          <Route element={<WithNav />}>
            <Route path="/viewOffer" element={<OfferDetails />} />
          </Route>

          {/* <Route exact path="/login" element={<Login />} />
        <Route exact path="/recovery-password" element={<RecoveryPassword />} /> */}
          <Route element={<WithNav />}>
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
