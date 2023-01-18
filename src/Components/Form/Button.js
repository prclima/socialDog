import style from "./Button.module.css";

function Button(props) {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={style.button}
    >
      {props.children}
    </button>
  );
}

export default Button;
