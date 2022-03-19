import "../styles/App.css";
import MarkDownEditor from "./MarkDownEditor";
import MarkDownTip from "./MarkDownTip";

export default function App() {
  return (
    <div className="root">
      <h1>Markdown</h1>
      <div className="App">
        <MarkDownEditor />
      </div>
      <MarkDownTip />
    </div>
  );
}
