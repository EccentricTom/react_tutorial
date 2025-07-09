import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Zurich", "St Gallen", "Basel", "Bern", "Geneva"];

  return <div><ListGroup items={items} heading="Cities"/></div>
}

export default App;
