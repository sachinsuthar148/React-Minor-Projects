import TodoItem from "./TodoItem";

function TodoItems({TodoList,handleDeleteButton})
{
    return(
        TodoList.map((item)=> <TodoItem key={item.TodoName} item={item} handleDeleteButton={handleDeleteButton}/>)
    )
}
export default TodoItems;