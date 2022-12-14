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
      <Content />
      <Footer />
      <Heading>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut unde corrupti accusantium optio dolorum sit ipsam doloremque veritatis sint. Id maiores illum a nihil accusamus beatae inventore expedita, officiis illo.</Heading>
    </div>
  );
}

export default App;
