import Button from "./Buttons";

const TodoItem = ({id,todoText,todoDate}) =>{
    const deleteHandeler = () =>{
        console.log(`Trying to delele ${id}, ${todoText}`)
    }
    return(
        <div className=" container text-center">
            <div className="container text-center">
                <div className="row kgRow">
                    <div className="col-5 text-truncate">
                        {todoText}
                    </div>
                    <div className="col-3">
                        {todoDate}
                    </div>
                    <div className="col-2">
                        <Button btnType={'danger'} btnText={'Delete'} handler={deleteHandeler}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoItem;