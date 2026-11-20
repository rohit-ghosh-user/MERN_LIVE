import TodoItem from "./TodoItem";
const TodoItems = () =>{
    const todoItems = [
    {id : 1, todoText : 'Buy Milk', todoDate : '16-11-2026'},
    {id : 2, todoText : 'Go to Collage', todoDate : 'once a year'},
    {id : 3, todoText : 'Exercise', todoDate : 'EveryDay'}
  ]
    return(
        <>
        {todoItems.map((items) =>(
          <TodoItem key ={items.id} id={items.id} todoText={items.todoText} todoDate={items.todoDate}/>))}
        </>
    );
       
};

export default TodoItems;