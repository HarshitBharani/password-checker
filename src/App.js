import "./styles.css";
import { useState } from "react";

export default function App() {
  let passwordChecker = () => {
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [passwordOutput, setPasswordOutput] = useState("");
    const [showHide, setShowHide] = useState("showPassword");
    const [passwordHider, setPasswordHider] = useState("password");
    const [submitDisabled, setSubmitDisabled] = useState("disabled");
    const [alaphanumericOrNot, setAlaphanumericOrNot] = useState([]);
    const [passwordLength, setPasswordLength] = useState();
    let containesNum = () => {
      var splitArray = password.split("");
      splitArray.push(" ");
      console.log(splitArray);
      console.log(splitArray);
      for (let i = 0; i < splitArray.length; i++) {
        if (parseInt(splitArray[i])) {
          setAlaphanumericOrNot("contains a no");
          break;
        } else {
          setAlaphanumericOrNot("doesn't contains a no");
        }
      }
    };
    let showHideHandler = () => {
      if (showHide === "showPassword") {
        setShowHide("hidePassword");
        setPasswordHider("text");
      } else {
        setShowHide("showPassword");
        setPasswordHider("password");
      }
    };
    let passwordCheckBtn = () => {
      if (password === confirmpassword) {
        setPasswordOutput("your both password are same");
        setSubmitDisabled(false);
      } else {
        setPasswordOutput("password does not match");
        setSubmitDisabled(true);
      }
    };
    return (
      <div>
        <input
          type={passwordHider}
          onChange={(event) => {
            setPassword(event.target.value);
            var splitArray = event.target.value.split("");
            setPasswordLength(splitArray.length);
          }}
        ></input>
        <span>{passwordLength}</span>
        <input
          type={passwordHider}
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
        ></input>
        <div>
          <button onClick={containesNum}>containes a number</button>
          <button onClick={showHideHandler}>{showHide}</button>
          <button onClick={passwordCheckBtn}>check password</button>
          <button onClick={passwordCheckBtn} disabled={submitDisabled}>
            submit
          </button>
        </div>
        <h1>{alaphanumericOrNot}</h1>
        <h1>{passwordOutput}</h1>
        <hr></hr>
      </div>
    );
  };
  return <div className="App">{passwordChecker()}</div>;
}
