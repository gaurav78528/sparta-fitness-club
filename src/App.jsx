import { Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";
<<<<<<< HEAD
import AllRoutes from "./Routes/AllRoutes";
=======
 

import AllRoutes from "./Routes/AllRoutes";
 
>>>>>>> 756c32c46de4ba5fdf4ebb0ed328e7799cdd0463

function App() {
  const { appData } = useSelector((store) => store.app);
  console.log(appData);
  return (
    <div>
      <Heading>Hello</Heading>
<<<<<<< HEAD
      <AllRoutes/>
=======
 
 
 
      <AllRoutes/>
 
    </div>
  );
}

export default App;
