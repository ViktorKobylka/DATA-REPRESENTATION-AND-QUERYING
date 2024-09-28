//2(a)
const str = () => "Data Representation & Querying"; //return string
console.log(str());// show result
//2(b)
const str2 = a => a; // takes an argument and returns the passed variable
console.log(str2("Data Representation & Querying")); //show result
//2(c)
const sum = (a, b) => a + b; //  takes two number and returns the sum of both numbers
console.log(sum(1, 2)); //show result
//2(d)
const ages = [25, 31, 42, 77];// num array
const agesFunct = ages.map(age => 
    {if(age < 70)
        age *=2;
     return age;   
    }
); // function that multiply each number under 70 by 2
console.log(agesFunct); //show result

//3(a)
const str3 = []; // array of strings
//3(b)
const addTask = (task) => {
    str3.push(task); //add an element to array
    console.log(task + " has been added"); // show the insertion
    return str3.length; // returns the number of elements in the array after the insertion

};
//3(c)
const listAllTasks = () => {
    //iterates over all the tasks
    str3.forEach((task, index) => {
        console.log(task + " has index " + index++) //prints each array item
    }); 
};
//3(d)
const deleteTask = (task) => {
    const index = str3.indexOf(task); // get index of element
    str3.splice(index, 1); // remove element
    console.log(task + " has been deleted"); // show the deletion
    return str3.length; // returns the number of elements in the array after the deletion

};

//output
console.log(addTask("one"));//add element and get number of elements
console.log(addTask("two"));//add element and get number of elements
console.log(addTask("three"));//add element and get number of elements
listAllTasks();//show all elements
console.log(deleteTask("one")); //remove element and get number of elements
