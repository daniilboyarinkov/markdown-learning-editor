import React from "react";
import ReactMarkdown from 'react-markdown';
import contentMarkdownTip from "../consts/contentMarkdownTip";

export default function MarkDownTip() {
  return <ReactMarkdown className="MarkDownTip" children={contentMarkdownTip} skipHtml={false}></ReactMarkdown>;
}
