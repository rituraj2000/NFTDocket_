import SignUp from "./pages/Authentication/SignUpForm";
import Register from "./pages/Authentication/RegisterationScreen";
import SellerDashboard from "./pages/Home/SellerDashboardScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConnectToWallet from "./pages/Authentication/ConnectToWallet";
import Web3 from "web3";
import { useNavigate } from "react-router-dom";
import { abi } from "./abi";
import { useDispatch, useSelector } from "react-redux";
import CreateNFTScreen from "./pages/Home/Seller/CreateNFT";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* TODO : Rewrite this */}
          <Route path="/" element={<SellerDashboard />} />
          <Route path="/create-nft" element={<CreateNFTScreen />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/register" element={<Register />} />
          <Route path="/connectWallet" element={<ConnectToWallet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
