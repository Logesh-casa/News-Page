import Navbar from "./Components/Navbar";
import "./App.css";
import Landing from "./Components/Landing";
import New from "./Components/New";
import Latest from "./Components/Latest";

function App() {
   return (
      <div className="whole-page">
         <Navbar />
         <div className="split">
            <Landing />
            <New />
         </div>
         <Latest />
      </div>
   );
}

export default App;
