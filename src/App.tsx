import "./App.css";
import { Button, ButtonVariant } from "./components/common/button/button";

function App() {
  return (
    <Button className="btn" variant={ButtonVariant.Primary}>
      test
    </Button>
  );
}

export default App;
