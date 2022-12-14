import { useSelector } from "react-redux";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  const { appData } = useSelector((store) => store.app);
  console.log(appData);
  return (
    <div>
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
