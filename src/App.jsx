import { Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  const { appData } = useSelector((store) => store.app);
  console.log(appData);
  return (
    <div>
      <Navbar />
      <AllRoutes />

      {/* <Footer /> */}
      {/* <Home/> */}
      {/* <Heading>Hello</Heading> */}
    </div>
  );
}

export default App;
