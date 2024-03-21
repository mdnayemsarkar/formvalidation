import Forget from "./component/Forget";
import Login from "./component/Login";
import SignInPage from "./component/Signin";
// import Login from "./component/Login";
const App = () => {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <SignInPage />
      <Forget />
      <Login />
    </div>
  );
};

export default App;
