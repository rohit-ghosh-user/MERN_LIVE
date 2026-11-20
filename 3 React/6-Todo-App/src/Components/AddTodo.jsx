import Button from "./Buttons";
import "./Components.css"

const AddTodo = () =>{

  const addHandeler = () =>{
        console.log(`Trying to add item`)
    }
   return(
        <div className="  container">
          
            <div className="row kgRow">

            <div className="col-5">
              <input type="text" className="form-control"
              placeholder="Username"></input>
            </div>
            <div className="col-3">
              <input type="date" className="form-control"
              ></input>
            </div>
            <div className="Save col-2">
              <Button btnType={'success'} btnText={'Save'} handler={addHandeler}/>
            </div>

            </div>
        </div>
   )
};

export default AddTodo;