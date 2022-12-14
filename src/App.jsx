import { Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";
 
import AllRoutes from "./Routes/AllRoutes";
 
 
 
 
 

function App() {
  const { appData } = useSelector((store) => store.app);
  console.log(appData);
  return (
    <div>
      <Heading>Hello</Heading>
 
      <AllRoutes/>
 
 
 
 
   
 
    </div>
  );
}

export default App;
