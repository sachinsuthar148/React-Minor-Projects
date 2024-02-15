import styles from "./Buttons.module.css";

function Buttons({handleOnClick}) {
  let btns = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonContainer}>
      {btns.map((btns) => (
        <button key={btns} className={styles.button} onClick={(event)=>handleOnClick(event,btns)}>
          {btns}
        </button>
      ))}
    </div>
  );
}
export default Buttons;
