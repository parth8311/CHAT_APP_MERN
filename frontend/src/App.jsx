import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";

const App = () => {
  const { authUser } = useAuthContext();
  return (
    <div>
      <Cursor />
      <section className="text-white" id="HomePage">
        <Navbar />
        <Hero />
      </section>
      <section className="text-white" id="Services">
        <Parallax type="services" />
      </section>
      {/* <section>
        <Services />
      </section> */}
      {/* <section id="Portfolio">
        <Parallax type="portfolio" />
      </section> */}
      {/* <Portfolio /> */}
      <section className="text-white" id="Contact">
        <Contact />
      </section>
      {/* <section className="text-white" id="About"></section> */}
      {/* // <div className="p-4 h-screen flex items-center justify-center"> */}
      {/* <Routes>
        <Route
        path="/"
        element={authUser ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route
        path="/login"
        element={authUser ? <Navigate to={"/"} /> : <Login />}
        />
        <Route
        path="/signup"
        element={authUser ? <Navigate to={"/"} /> : <Signup />}
        />
        </div>
      </Routes> */}
      {/* <Toaster /> */}
    </div>
  );
};

export default App;
