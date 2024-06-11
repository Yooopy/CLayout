import { useEffect, useState } from "react";
import "./container.css";
import filledLogo from "./assets/filled-logo.png";

function Container() {
  const [change, setChange] = useState("");
  const [eg, setEg] = useState("");

  const [color, setColor] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [fontSize, setFontSize] = useState("");
  const [fontFamily, setFontFamily] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [backgroundPosition, setBackgroundPosition] = useState("");
  const [backgroundSize, setBackgroundSize] = useState("");
  const [backgroundRepeat, setBackgroundRepeat] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [text, setText] = useState("");
  const [textAlign, setTextAlign] = useState("");
  const [textDecoration, setTextDecoration] = useState("");
  const [TextShadow, setTextShadow] = useState("");
  const [borderRadius, setBorderRadius] = useState("");
  const [margin, setMargin] = useState("");
  const [border, setBorder] = useState("");
  const [padding, setPadding] = useState("");
  const [boxShadow, setBoxShadow] = useState("");
  const [alignItems, setAlignItems] = useState("");

  function handleChange(e, option) {
    switch (option) {
      case "color":
        setColor(e.target.value);
        break;
      case "width":
        setWidth(e.target.value + "px");
        break;
      case "height":
        setHeight(e.target.value + "px");
        break;
      case "fontSize":
        setFontSize(e.target.value + "px");
        break;
      case "fontFamily":
        setFontFamily(e.target.value);
        break;
      case "backgroundImage":
        setBackgroundImage(`url(${e.target.value})`);
        break;
      case "backgroundPosition":
        setBackgroundPosition(e.target.value);
        break;
      case "backgroundSize":
        setBackgroundSize(e.target.value);
        break;
      case "backgroundRepeat":
        setBackgroundRepeat(e.target.value);
        break;
      case "backgroundColor":
        setBackgroundColor(e.target.value);
        break;
      case "text":
        setText(e.target.value);
        break;
      case "textAlign":
        setTextAlign(e.target.value);
        break;
      case "textDecoration":
        setTextDecoration(e.target.value);
        break;
      case "TextShadow":
        setTextShadow(e.target.value);
        break;
      case "borderRadius":
        setBorderRadius(e.target.value + "px");
        break;
      case "border":
        setBorder(e.target.value);
        break;
      case "padding":
        setPadding(e.target.value + "px");
        break;
      case "margin":
        setMargin(e.target.value + "px");
        break;
      case "boxShadow":
        setBoxShadow(e.target.value);
        break;
      case "alignItems":
        setAlignItems(e.target.value);
        break;

      default:
        break;
    }
  }

  function openForm(option, eg) {
    document
      .getElementsByClassName("form-container")[0]
      .classList.add("form-open");
    setChange(option);
    setEg(eg);
    // document.getElementsByClassName(
    // "form-container"
    // )[0].children[2].textContent = eg;
    document.getElementsByClassName("form-inp")[0].focus();
  }
  function closeForm() {
    document
      .getElementsByClassName("form-container")[0]
      .classList.remove("form-open");
    document.getElementsByClassName("form-inp")[0].value = "";
  }
  useEffect(() => {
    text === ""
      ? setText("Its your Object")
      : (document.getElementById("object").textContent = text);
  }, [text]);

  setTimeout(() => {
    document.getElementsByClassName("intro")[0].style.display = "none";
  }, 1500);

  useEffect(() => {
    addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeForm();
      if (e.key === "Enter") closeForm();
    });
    return () => {
      removeEventListener("keydown", (e) => {
        if (e.key === "Escape") closeForm();
        if (e.key === "Enter") closeForm();
      });
    };
  });

  return (
    <>
      <main>
        <article className="object-art">
          <div
            style={{
              color: color,
              padding: padding,
              backgroundColor: backgroundColor,
              width: width,
              height: height,
              fontSize: fontSize,
              fontFamily: fontFamily,
              backgroundImage: backgroundImage,
              backgroundPosition: backgroundPosition,
              backgroundSize: backgroundSize,
              backgroundRepeat: backgroundRepeat,
              textAlign: textAlign,
              textDecoration: textDecoration,
              textShadow: TextShadow,
              borderRadius: borderRadius,
              margin: margin,
              border: border,
              boxShadow: boxShadow,
              alignContent: alignItems,
            }}
            id="object"
          >
            {text !== "" ? text : "Its your Object"}
          </div>
        </article>

        <article className="main-art">
          <section
            className="add-img item"
            onClick={() =>
              openForm(
                "backgroundImage",
                "like `https://example.com/image.jpg`"
              )
            }
          >
            {" "}
            <p> Add Image</p>
          </section>
          <section
            className="add-text item"
            onClick={() => openForm("text", "Like `Hello World`")}
          >
            {" "}
            <p> Add Text</p>
          </section>

          <section
            className="background-color item"
            onClick={() =>
              openForm("backgroundColor", "Like `red` or `#ff0000`")
            }
          >
            {" "}
            <p> Background Color</p>
          </section>
          <section
            className="background-position item"
            onClick={() =>
              openForm("backgroundPosition", "Like `center` or `left`")
            }
          >
            <p> Background Position</p>
          </section>
          <section
            className="background-size item"
            onClick={() =>
              openForm("backgroundSize", "Like `cover` or `contain`")
            }
          >
            {" "}
            <p> Background Size</p>
          </section>
          <section
            className="background-repeat item"
            onClick={() =>
              openForm("backgroundRepeat", "Like `repeat` or `no-repeat`")
            }
          >
            <p>Background Repeat</p>
          </section>
          <section
            className="font-size item"
            onClick={() =>
              openForm("fontSize", "Like `40` or `small` or `x-large`")
            }
          >
            {" "}
            <p> Set font size</p>
          </section>
          <section
            className="size-height item"
            onClick={() =>
              openForm("height", "Like `300` *height is in pixels")
            }
          >
            {" "}
            <p> Set Height</p>
          </section>

          <section
            className="size-width item"
            onClick={() => openForm("width", "Like `400` *width is in pixels")}
          >
            {" "}
            <p> Set Width</p>
          </section>

          <section
            className="font-color item"
            onClick={() => openForm("color", "Like `red` or $ff0000")}
          >
            {" "}
            <p> Set font color</p>
          </section>
          <section
            className="font-family item"
            onClick={() =>
              openForm("fontFamily", "Like `Arial` or `sans-serif`")
            }
          >
            {" "}
            <p> Set Font</p>{" "}
          </section>
          <section
            className="text-align item"
            onClick={() => openForm("textAlign", "Like `center` or `right`")}
          >
            {" "}
            <p> Set align of Text</p>
          </section>
          <section
            className="alignItems item"
            onClick={() => openForm("alignItems", "Like `center` or `right`")}
          >
            {" "}
            <p> Set align of Text horizontaly</p>
          </section>
          <section
            className="text-decoration item"
            onClick={() =>
              openForm("textDecoration", "Like `underlined` or `dotted`")
            }
          >
            <p> Set decoration of Text</p>
          </section>
          <section
            className="text-shadow item"
            onClick={() => openForm("textShadow", "Like `2px 2px 5px red`")}
          >
            {" "}
            <p> TextShadow</p>
          </section>
          <section
            className="border-radius item"
            onClick={() => openForm("borderRadius", "Like `20` *its in pixels")}
          >
            {" "}
            <p> Border Radius</p>
          </section>

          <section
            className="border item"
            onClick={() => openForm("border", "Like `2px solid red`")}
          >
            {" "}
            <p> Border</p>
          </section>
          <section
            className="boxShadow item"
            onClick={() =>
              openForm("boxShadow", "Like `0px 0px 10px #16161680`")
            }
          >
            {" "}
            <p> Shadow of Box</p>
          </section>
          <section
            className="margin item"
            onClick={() => openForm("margin", "Like `20` *its in pixels")}
          >
            {" "}
            <p> Margin</p>
          </section>
          <section
            className="padding item"
            onClick={() => openForm("padding", "Like `10` *its in pixels")}
          >
            {" "}
            <p> Padding</p>
          </section>
        </article>
        <div className="form-container">
          <div className="form">
            <label>Please Enter a value for {change}</label>
            <input
              type="text"
              placeholder={change}
              className="form-inp"
              onChange={(e) => handleChange(e, change)}
            ></input>
            <p>{eg}</p>

            <button type="submit" onClick={closeForm}>
              Ok
            </button>
            <button onClick={closeForm} className="cancel-button">
              cancel
            </button>
          </div>
        </div>
      </main>
      <div className="intro">
        <img src={filledLogo}></img>
      </div>
    </>
  );
}

export default Container;
