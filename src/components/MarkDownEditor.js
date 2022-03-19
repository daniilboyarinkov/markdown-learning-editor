import ReactMarkdown from "react-markdown";
import { useState } from "react";
import placeholderMarkdownContainer from "../consts/placeholderMarkdownContainer";

export default function MarkDownEditor() {
  const [markdownText, setmarkdownText] = useState(
    placeholderMarkdownContainer.trim()
  );

  return (
    <div className="markdownContainer">
      <textarea
        value={markdownText}
        onChange={(e) => setmarkdownText(e.target.value)}
        autoFocus={true}
        spellCheck={false}
      />
      <ReactMarkdown
        className="output"
        children={markdownText}
        skipHtml={false}
      />
    </div>
  );
}
