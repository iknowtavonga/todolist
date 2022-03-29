let userInput = prompt("Enter 'new' if you'd like to start a new list")
let quit = 'quit';
let newItem = '';
let toDoArray = [];


while (userInput !== 'quit') {
    userInput = prompt('What would you like to do?')
    if (userInput === 'new') {
        let newItem = prompt('Enter new todo');
        toDoArray.push(newItem);
        console.log(`${newItem} added to the list`);
    } else if (userInput === 'list') {
        console.log('************');
        console.log(toDoArray);
        console.log('************');
        break;
    }
}
console.log('You quit the app');