
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-tomorrow_night";

import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-noconflict/ext-language_tools";

const HtmlEditor = ({html, setHtml}) => {
  return (
    <AceEditor
    placeholder="Write your HTML codes here!"
    mode="html"
    value={html}
    snippets="html"
    onChange={value => setHtml(value)}
    theme="tomorrow-night"
    name="editor_css"
    fontSize={20}
    height={"100%"}
    width={"100%"}
    setOptions={{
      enableBasicAutocompletion: true,
      enebleLiveAutocompletion: true,
      enableSnippets: true,
    }}
    />
  )
};

export default HtmlEditor;
