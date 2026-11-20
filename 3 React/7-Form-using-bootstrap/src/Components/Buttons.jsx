

const Button = ({btnType,btnText,handler})=>{
    if(btnType === 'success'){
        return <button className=" button btn-solid theme-success" onClick={handler}>{btnText}</button>;
    
    }
    else if(btnType === 'danger'){
         return <button className=" button btn-solid theme-danger" onClick={handler}>{btnText}</button>;
    
    }
    else{
         return <button className="button btn-solid theme-primary" onClick={handler}>{btnText}</button>;
    
    }
}
export default Button;


