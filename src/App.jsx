import { Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import AllRoutes from "./Routes/AllRoutes";

function App() {
  const { appData } = useSelector((store) => store.app);
  console.log(appData);
  return (
    <div>
      <Navbar />
      <AllRoutes />
      <Content />
      <Footer />
      <Heading>Hello</Heading>
    </div>
  );
}

export default App;
