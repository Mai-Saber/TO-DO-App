import "./App.css";
import "remixicon/fonts/remixicon.css";

import ToDoList from "./components/body/to do";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <div className="containerBox">
        <Header />
        <ToDoList />
        <Footer />
      </div>
    </>
  );
}

export default App;
