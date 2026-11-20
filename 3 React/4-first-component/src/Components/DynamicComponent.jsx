const DynamicComponent = ()=>{
    const studentName = 'Shyam';
    const marks = [40,52,56,29,50];
    const calPercentage = ()=>{
        let sum = 0;
        for(let i = 0; i<marks.length; i++){
            sum += marks[i];
        }

          return sum/marks.length;
    }
    return <p>{studentName} scored {calPercentage()}% in this exam</p>
}

export default DynamicComponent;
