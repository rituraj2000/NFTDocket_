import SignUp from "./pages/Authentication/SignUpForm";
import Register from "./pages/Authentication/RegisterationScreen";
import SellerDashboard from "./pages/Home/Seller/SellerDashboardScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConnectToWallet from "./pages/Authentication/ConnectToWallet";
import Web3 from "web3";
import { useNavigate } from "react-router-dom";
import { abi } from "./web3_utils/abi";
import { useDispatch, useSelector } from "react-redux";
import CreateNFTScreen from "./pages/Home/Seller/CreateNFT";
import CustomerDashboard from "./pages/Home/Customer/CustomerDashboardScreen";
import ProductDetailsScreen from "./pages/Home/Product/ProductDetailsScreen";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* TODO : Rewrite this */}
          <Route path="/" element={<SellerDashboard />} />
          <Route path="/customerDashboard" element={<CustomerDashboard />} />
          <Route path="/create-nft" element={<CreateNFTScreen />} />
          <Route
            path="/product-details/:tokenId"
            element={<ProductDetailsScreen />}
          />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/register" element={<Register />} />
          <Route path="/connectWallet" element={<ConnectToWallet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
