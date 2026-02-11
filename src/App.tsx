import "./App.css";
import { Button, ButtonVariant } from "./components/common/Button";
import { Display } from "./components/common/display/Display";
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
      <br />
      <br />
      <Display value={"399,981"} />
    </>
  );
}

export default App;
