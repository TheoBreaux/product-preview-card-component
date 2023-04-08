import "./App.css";
import Header from "./Header";
import Body from "./Body";
import AddToCart from "./AddToCart";

const App = () => {
  return (
    <div className="card">
      <Header />
      <Body />
      <AddToCart />
    </div>
  );
};

export default App;
