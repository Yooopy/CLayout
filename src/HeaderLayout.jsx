import { useEffect } from "react";
import FilledLogo from "./assets/filled-logo.png";
import SearchImg from "./assets/search.png";
import "./HeaderLayout.css";
function HeaderLayout() {
  function handleSearch(e) {
    const searchItems = document
      .querySelectorAll(".item")
      .forEach((item, index) => {
        if (
          item.children[0].textContent
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        ) {
          item.style.display = "flex";
        } else item.style.display = "none";
      });
    if (e.target.value === "") {
      innerWidth > 768
        ? (document.getElementsByClassName("main-art")[0].style.columns = "3")
        : (document.getElementsByClassName("main-art")[0].style.columns = "2");
    } else if (e.target.value !== "") {
      document.getElementsByClassName("main-art")[0].style.columns = "1";
    }
  }
  // setTimeout(() => {
  //   useEffect(() => {
  //     addEventListener("keydown", (e) => {
  //       if (e.key !== "Escape") {
  //         document.getElementsByClassName("search-inp")[0].focus();
  //       }
  //     });

  //     document.getElementsByClassName("main-art")[0].style.columns = "1";

  //     return () => {
  //       removeEventListener("keydown", (e) => {
  //         if (e.key !== "Escape") {
  //           document.getElementsByClassName("search-inp")[0].focus();
  //         }
  //       });
  //       if (screen.width < 768)
  //         document.getElementsByClassName("main-art")[0].style.columns = "2";
  //     };
  //   }, [document.getElementsByClassName("search-inp")[0].value]);
  // }, 100);

  return (
    <header>
      <div className="header-content">
        <img className="logo" src={FilledLogo}></img>

        <input
          className="search-inp"
          onChange={(e) => handleSearch(e)}
          type="text"
          placeholder="Search for properties"
        ></input>
      </div>
      {/* <img src={SearchImg} className="search-icon"></img> */}
    </header>
  );
}

export default HeaderLayout;
