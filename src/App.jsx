import { Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";
 

function App() {
  const { appData } = useSelector((store) => store.app);
  console.log(appData);
  return (
    <div>
      <Heading>Hello</Heading>
     
    </div>
  );
}

export default App;
