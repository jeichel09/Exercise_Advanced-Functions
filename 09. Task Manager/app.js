function solve() {

   
    let taskField = document.getElementById('task');
    let descField = document.getElementById('description');
    let dateField = document.getElementById('date');
    let addButton = document.getElementById('add');
    //if (taskField.value != "" && descField.value != "" && dateField.value != "") {
    addButton.addEventListener('click', newTask);
    //}
    

    function newTask() {
        console.log("Success");  
    }
}