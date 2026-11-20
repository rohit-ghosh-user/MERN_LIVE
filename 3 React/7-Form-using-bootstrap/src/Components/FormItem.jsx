const FormItem = ({title,placeholder}) =>{
return (
    <>
    <div className="formcontainer">
        <label for="exampleFormControlInput" class="form-label mb-2">{title}</label>
        <input type="email" class="form-control" id="exampleFormControlInput" placeholder={placeholder}></input>
    </div>
    
    </>  
)
}

export default FormItem;