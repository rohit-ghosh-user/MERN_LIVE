

const Button = ({btnType,btnText,handler})=>{
    if(btnType === 'success'){
        return <button className="btn-solid theme-success button saveButton" onClick={handler}>{btnText}</button>;
    
    }
    else if(btnType === 'danger'){
         return <button className="btn-solid theme-danger button" onClick={handler}>{btnText}</button>;
    
    }
    else{
         return <button className="btn-solid theme-primary button" onClick={handler}>{btnText}</button>;
    
    }
}
export default Button;


