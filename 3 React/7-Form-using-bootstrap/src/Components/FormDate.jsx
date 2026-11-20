import FormItem from "./FormItem";
const FormData = () =>{
    const FormData = [
        {id : 1, titel : 'Full Name', placeholder : 'Enter Your Full Name'},
        {id : 2, titel : 'Email Address', placeholder : 'Enter Your Email Address'},
        {id : 3, titel : 'Grade', placeholder : 'Enter Your Grade'},
        {id : 4, titel : 'Age', placeholder : 'Enter Your Age'}
    ]
    return (
        <>
        {FormData.map((data) =>(<FormItem title={data.titel} placeholder={data.placeholder}/>))}
        </>
    )
}

export default FormData;