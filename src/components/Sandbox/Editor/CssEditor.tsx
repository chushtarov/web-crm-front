
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-tomorrow_night";
import "ace-builds/src-noconflict/snippets/css";
import "ace-builds/src-noconflict/ext-language_tools";

const CssEditor = ({css, setCss}) => {
  return (
    <AceEditor
    placeholder="Write your CSS codes here!"
    mode="css"
    value={css}
    onChange={value => setCss(value)}
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

export default CssEditor;
