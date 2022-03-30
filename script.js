let userInput = prompt("Enter 'new' if you'd like to start a new list")
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
    } else if (input === 'delete') {
        // we create a prompt which stores the value of the index we'd like to delete
        const index = parseInt(prompt('Please enter an index to delete'));
        // this method is built in and it checks if something is not a number
        if (!Number.isNaN(index)) {
            /* after confirming that what was entered is indeed a number, we will then
            then create a variable which will store the deleted value. We delete by splicing the array*/
            const deleted = toDoArray.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`)
        }

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