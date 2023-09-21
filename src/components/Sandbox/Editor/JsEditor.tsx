import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-noconflict/ext-language_tools";

const JsEditor = ({js, setJs}) => {
  return (
    <AceEditor
    placeholder="Write your JS codes here!"
    mode="javascript"
    theme="tomorrow"
    value={js}
    onChange={value => setJs(value)}
    name="editor_js"
    fontSize={20}
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

export default JsEditor;
