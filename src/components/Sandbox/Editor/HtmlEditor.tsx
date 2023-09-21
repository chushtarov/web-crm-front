import React  from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-noconflict/ext-language_tools";

const HtmlEditor = ({html, setHtml}) => {
  return (
    <AceEditor
    placeholder="Write your HTML codes here!"
    mode="html"
    value={html}
    onChange={value => setHtml(value)}
    theme="tomorrow"
    name="editor_html"
    fontSize={20}
    height={"100%"}
    width={"100%"}
    showPrintMargin={false}
    showGutter={false}
    highlightActiveLine={true}
    setOptions={{
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      enableSnippets: true,
      showLineNumbers: true,
      tabSize: 2,
    }}
    />
  )
};

export default HtmlEditor;
