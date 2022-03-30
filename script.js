let userInput = prompt("Enter 'new' if you'd like to start a new list")
let quit = 'quit';
let newItem = '';
const toDoArray = ['wake up', 'drink some coffee'];


while (userInput !== 'quit' && userInput !== 'q') {
    if (userInput === 'list') {
        console.log('************');
        // after seperating we will loop through the array to list all the contents
        for (let i = 0; i < toDoArray.length; i++) {
            console.log(`${i}: ${toDoArray[i]}`)
        }
        console.log('************');
    } else if (input === 'new') {
        // we create a new prompt that will take the new todo and store it for later use
        const newTodo = prompt('What is your new todo?');
        toDoArray.push(newTodo);
        console.log(`${newTodo} added to the list!`)
    }
    /*
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