import "./App.css";
import { Canvas } from "./components/layout/Canvas";
import { Button, ButtonVariant } from "./components/common/Button";
import { Display } from "./components/common/display/Display";
import { ThemeSwitch } from "./components/common/ThemeSwitch";
import {
  StackPanel,
  StackPanelAlignment,
  StackPanelDirection,
} from "./components/layout/StackPanel";

function App() {
  return (
    <StackPanel
      orientation={StackPanelDirection.Vertical}
      alignItems={StackPanelAlignment.Center}
      justifyContent={StackPanelAlignment.Center}
    >
      <Canvas width="min(540px, 100% - 48px)">
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
      </Canvas>
    </StackPanel>
  );
}

export default App;
