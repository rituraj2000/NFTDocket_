import SignUp from "./pages/Authentication/SignUpForm";
import Home from "./pages/Home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConnectToWallet from "./pages/Authentication/ConnectToWallet";
import Web3 from "web3";
import { useNavigate } from "react-router-dom";
import { abi } from "./abi";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/connectWallet" element={<ConnectToWallet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
