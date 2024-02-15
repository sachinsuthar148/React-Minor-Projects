import styles from './Display.module.css'

function Display({calval}){
    return  <input type="text" className={styles.display} readOnly value={calval} />
}
export default Display;