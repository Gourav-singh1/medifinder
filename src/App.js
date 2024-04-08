import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./Components/NavBar";
import HomePages from "./Pages/HomePages";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <HomePages />
      <Footer />
    </>
  );
}

export default App;
