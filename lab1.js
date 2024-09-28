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