function addItem(){
    let newListElement = document.createElement("li");
    let input = document.getElementById('userInput').value;
    let newListValue = document.createTextNode(input);
    newListElement.append(newListValue);
    document.getElementById('list').append(newListElement);
}