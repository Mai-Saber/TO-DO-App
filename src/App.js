import "./App.css";
import "remixicon/fonts/remixicon.css";
  import { ToastContainer} from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

import ToDoList from "./components/body/to do";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <div className="containerBox">
        <ToastContainer />
        <Header />
        <ToDoList />
        <Footer />
      </div>
    </>
  );
}

export default App;
