import style from "./Input.module.css";

function Input(props) {
  return (
    <div className={style.wrapper}>
      <label className={style.label} htmlFor={props.name}>
        {props.label}
      </label>
      <input
        id={props.name}
        name={props.name}
        type={props.type}
        className={style.input}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
}

export default Input;
