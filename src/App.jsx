import { Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import Content from "./components/content/Content";
import Footer from "./components/Footer/Footer"
function App() {
  const { appData } = useSelector((store) => store.app);
  console.log(appData);
  return (
    <div>
      <Navbar />
      <AllRoutes />
      {/* <Content /> */}
      <Footer />
      
    </div>
  );
}

export default App;
