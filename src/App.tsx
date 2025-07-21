import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Zurich", "St Gallen", "Basel", "Bern", "Geneva"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
