//1
let people = ["Greg", "Mary", "Devon", "James"];
    for(let i=0;i<people.length;i++)
    {
        console.log(people[i]);
    };

//2
    people.forEach(function(people)
    {
        console.log(people);
    });
    
//3
    people.pop(); 
    console.log(people[0]);

//4
    people.pop();
    console.log(people[3]);

//5
    people.unshift("Matt");
    console.log(people);

//6
    people.push("Julian Evant");
    console.log(people);

//7
    for(let i=0;i<people.length;i++)
        {
            console.log(people[i]);
            if(people[i]==="Mary")
            {
                break;
            }
        }

//8
    console.log(people.slice(2));

//9
    let newArray = ["Greg", "Mary","Devon", "James"];
    newArray.splice(2,1,"Elizabeth","Artie");
    console.log(newArray);

//10
    let withbob = people.concat("bob");
    console.log(withbob);

// -------------------------------------------------
// -------------------------------------------------


let programming = {
languages: ["JavaScript", "Python", "Ruby"],
isChallenging: true,
isRewarding: true,
difficulty: 8,
jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
    
//1
    programming.languages.push("Go");
        console.log(programming);
    
//2
    programming['difficulty'] = 7;
        console.log(programming);

//3
    delete programming.jokes;
        console.log(programming);

//4
    programming.isFun = true;
        console.log(programming);

//5
    let newProgramming = programming.languages.map(function(item, index)
        {
            return index + "-" + item;
            });
            console.log(newProgramming);

    