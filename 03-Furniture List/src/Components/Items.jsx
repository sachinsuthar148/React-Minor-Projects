import styles from "./Items.module.css";

function Items({ items, handleOnClick,bought}) {
  return (
    <>
      <li className={`${styles["Item-content"]} list-group-item ${bought && "active"}`}>
        {" "}
        {items}
        <button
          className={`${styles.button} btn btn-info`}
          onClick={handleOnClick}>
          Add
        </button>
        {/* <button className={`${styles.button} btn btn-info` } onClick={handleButtonClicked}>Add</button> */}
        {/* <button className={`${styles.button} btn btn-info` } onClick={() =>handleButtonClicked(items)}>Add</button> */}
      </li>
    </>
  );
}
export default Items;
