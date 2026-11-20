const Radio = () =>{
    return(
        <>
        <div class=" radioContainer form-field">
            <label for="exampleFormControlInput" class="form-label mb-2">Gender</label>
            <input class="radio" name="radios" type="radio" id="radioLabel" />
            <label for="radioLabel">Male</label>
            <input class="radio" name="radios" type="radio" id="radioLabel" />
            <label for="radioLabel">Female</label>
            <input class="radio" name="radios" type="radio" id="radioLabel" />
            <label for="radioLabel">Other</label>
        </div>
        </>
    )

}

export default Radio;