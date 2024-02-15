import styles from "./FurnitureInput.module.css";

function FurnitureInput({handleOnKeyDown}) {

  return (
    <input
      type="text"
      placeholder="Type Item here"
      className={styles.furnitureInput}
      onKeyDown={handleOnKeyDown}
      // onChange={handleInputChange}
    />
  );
}
export default FurnitureInput;
