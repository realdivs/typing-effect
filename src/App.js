import { TypingEffect } from "./components/TypingEffect";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h2>Typing Effect</h2>
      <TypingEffect text="I am a frontend developer." delay="100" />
    </div>
  );
}
