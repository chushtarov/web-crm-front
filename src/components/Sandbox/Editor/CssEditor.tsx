import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/snippets/css";
import "ace-builds/src-noconflict/ext-language_tools";

const CssEditor = ({css, setCss}) => {
  return (
    <AceEditor
    placeholder="Write your CSS codes here!"
    mode="css"
    value={css}
    onChange={value => setCss(value)}
    theme="tomorrow"
    name="editor_css"
    fontSize={16}
    height={"100%"}
    width={"100%"}
    showPrintMargin={true}
    showGutter={false}
    highlightActiveLine={true}
    setOptions={{
      enableBasicAutocompletion: true,
      enebleLiveAutocompletion: true,
      enableSnippets: true,
      tabSize: 2
    }}
    />
  )
};

export default CssEditor;
