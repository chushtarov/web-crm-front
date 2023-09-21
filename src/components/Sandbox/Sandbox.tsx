import CssEditor from "./Editor/CssEditor";
import HtmlEditor from "./Editor/HtmlEditor";
import JsEditor from "./Editor/JsEditor";
import style from "./Sandbox.module.css";
import { useState, useMemo } from "react";
import {BsFillCameraVideoFill, BsFillCameraVideoOffFill} from 'react-icons/bs'
const Sandbox = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [active, setActive] = useState("html");
  const [camera, setCamera] = useState(false)

const document = useMemo(() => {
  if(!html && !css && !js) return
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
    ${css}
    </style>
</head>
<body>
    ${html}
    <script>
    ${js}
    </script>
</body>
</html>
  `
}, [html, css, js])

  return (
    <div className={style.sandbox}>
      <div className={style.sandbox__item}>
        <nav>
          <button
            onClick={() => setActive("html")}
            className={`${style.item_btn} ${
              active === "html" ? style.active : ""
            }`}
          >
            HTML
          </button>
          <button
            onClick={() => setActive("css")}
            className={`${style.item_btn} ${
              active === "css" ? style.active : ""
            }`}
          >
            CSS
          </button>
          <button
            onClick={() => setActive("js")}
            className={`${style.item_btn} ${
              active === "js" ? style.active : ""
            }`}
          >
            JS
          </button>
        </nav>
        <div className={style.editor}>
          {active === "html" ? <HtmlEditor html={html} setHtml={setHtml}/> : null}
          {active === "css" ? <CssEditor css={css} setCss={setCss}/> : null}
          {active === "js" ? <JsEditor js={js} setJs={setJs}/> : null}
        </div>
      </div>
      <div className={style.sandbox__item2}>
        <div className={style.webcam}>
        <button  onClick={() => setCamera(!camera)} className={style.camera}>
          {camera ? <BsFillCameraVideoFill fill="#fff" size={23}/> : <BsFillCameraVideoOffFill fill="#fff" size={23}/>}
        </button>

        </div>
        <div className={style.body__code}>
          {document ? <iframe title="proviev" className={style.proviev} srcDoc={document} /> : <div className={style.loading} > Your code will be displayed here</div>}
        </div>
      </div>
    </div>
  );
};

export default Sandbox;
