import { useSelector } from "react-redux";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
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
