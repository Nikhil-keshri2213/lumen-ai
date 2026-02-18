import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import LoginPage from "./components/auth/login";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Home />
      <Footer />
      {/* <LoginPage/> */}
    </div>
  );
}

export default App;
