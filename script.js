let userInput = prompt("Enter 'new' if you'd like to start a new list")
let quit = 'quit';
let newItem = '';
const toDoArray = ['wake up', 'drink some coffee'];


while (userInput !== 'quit' && userInput !== 'q') {
    if (userInput === 'list') {
        console.log('************');
        for (let i = 0; i < toDoArray.length; i++) {
            console.log(`${i}: ${toDoArray[i]}`)
        }
        console.log('************');

    }/*
    if (userInput === 'new') {
        let newItem = prompt('Enter new todo');
        toDoArray.push(newItem);
        console.log(`${newItem} added to the list`);
    } else if (userInput === 'list') {
        console.log('************');
        console.log(toDoArray);
        console.log('************');
        break;
    }*/
    userInput = prompt('What would you like to do?')
}
console.log('You quit the app');