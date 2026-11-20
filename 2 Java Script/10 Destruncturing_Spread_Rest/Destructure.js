let student = {
    firstName : 'Rohit',
    lastName : 'Ghosh',
    age : 22,
    address : {
        houseNo : 6,
        road : 'Bokultola Street',
        city : 'Khirpai',
        state: 'West Midnapur',
    },
    course : 'ECE',
    feesPaid : 'True',
};

function printName(argStudent){

    // let firstName = argStudent.firstName;
    // let lastName = argStudent.lastName;

    let {firstName,lastName} = argStudent;

    console.log('Name : ',firstName,lastName);
    let Result = {firstName, lastName:lastName};
}

printName(student);