import Header from "./components/Header";
import "./App.css";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Main /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
