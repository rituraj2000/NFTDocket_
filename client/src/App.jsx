import SignUp from "./pages/Authentication/SignUpForm";
import Home from "./pages/Home/home";

const App = () => {
  //Reloads the whole app Evrytime the user reloads
  window.ethereum &&
    window.ethereum.on("accountsChanged", () => {
      window.location.reload(false);
    });

  return (
    <div>
      <SignUp />
    </div>
  );
};

export default App;
