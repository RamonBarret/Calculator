import "./App.css";
import { Button, ButtonVariant } from "./components/common/Button";
import { ThemeSwitch } from "./components/common/ThemeSwitch";

function App() {
  return (
    <>
      <ThemeSwitch />
      <Button variant={ButtonVariant.Primary}>test</Button>
      <br />
      <br />
      <Button variant={ButtonVariant.Secondary}>test</Button>
      <br />
      <br />
      <Button variant={ButtonVariant.Accent}>test</Button>
    </>
  );
}

export default App;
