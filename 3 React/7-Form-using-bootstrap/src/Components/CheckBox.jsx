const CheckBox = ({input}) =>{
    return (
        <>
        <div class="checkBox form-field">
            <input type="checkbox" id="checkLabel" class="check" />
            <label for="checkLabel">{input}</label>
        </div>
        </>
    )
}

export default CheckBox;