import "./App.css";
import Container from "./components/Container";
import Show from "./components/Show";
import ItemsState from "./context/ItemsState";
function App() {
  return (
    <ItemsState>
      <h1>Welcome</h1>
      <Container />
      <Show />
    </ItemsState>
  );
}

export default App;
