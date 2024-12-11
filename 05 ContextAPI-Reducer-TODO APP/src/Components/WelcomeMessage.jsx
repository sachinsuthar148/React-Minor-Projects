import { useContext } from "react";
import { TodoItemsContext } from "../store/Todo-items-store";

function WelcomeMessage(){

    const {TodoList}= useContext(TodoItemsContext)
    return(
        <>
        {(TodoList.length===0) && <h1>Enjoy your day</h1>}
        </>
    );
}

export default WelcomeMessage;