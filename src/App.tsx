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
import { Keypad } from "./components/layout/Keypad";

function App() {
  return (
    <StackPanel
      orientation={StackPanelDirection.Vertical}
      alignItems={StackPanelAlignment.Center}
      justifyContent={StackPanelAlignment.Center}
    >
      <Canvas width="min(540px, 100% - 48px)">
        <StackPanel orientation={StackPanelDirection.Vertical} gap={25}>
          <ThemeSwitch />

          <Display value="399,981" />

          <Keypad>
            <Button variant={ButtonVariant.Primary}>7</Button>
            <Button variant={ButtonVariant.Primary}>8</Button>
            <Button variant={ButtonVariant.Primary}>9</Button>
            <Button variant={ButtonVariant.Secondary}>DEL</Button>

            <Button variant={ButtonVariant.Primary}>4</Button>
            <Button variant={ButtonVariant.Primary}>5</Button>
            <Button variant={ButtonVariant.Primary}>6</Button>
            <Button variant={ButtonVariant.Primary}>+</Button>

            <Button variant={ButtonVariant.Primary}>1</Button>
            <Button variant={ButtonVariant.Primary}>2</Button>
            <Button variant={ButtonVariant.Primary}>3</Button>
            <Button variant={ButtonVariant.Primary}>-</Button>

            <Button variant={ButtonVariant.Primary}>.</Button>
            <Button variant={ButtonVariant.Primary}>0</Button>
            <Button variant={ButtonVariant.Primary}>/</Button>
            <Button variant={ButtonVariant.Primary}>x</Button>

            <Button variant={ButtonVariant.Secondary}>RESET</Button>
            <Button variant={ButtonVariant.Accent}>=</Button>
          </Keypad>
        </StackPanel>
      </Canvas>
    </StackPanel>
  );
}

export default App;
