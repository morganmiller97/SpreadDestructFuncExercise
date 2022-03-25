// Spread & Destructuring with Functions Exercise
// 1a 
const jPDinos = [
    "Velociraptors",
    "Trannosaurus Rex",
    "Dilophosaurus"
];

// 1b
function seeDinos(i, ...){
    console.log(i);
    console.log(j);
};
seeDinos('Velociraptors', 'Trannosaurs Rex', 'Dilophosaurus');
// OR
seeDinos(...jPDinos);

// 2a
const jPcharacters = {
    alanGrant: `Sam Neill`,
    ellieSattler: `Laura Dern`,
    ianMalcolm: `Jeff Goldblum`
};


// 2b
seeCharacters = ({ellieSattler})=> {
    console.log(ellieSattler);
}
seeCharacters(jPCharacters);

// BONUS!!!
const jurassicParkMovies =[
    {
        one: `Jurassic Park`,
        two: `The Lost World: Jurassic Park`,
        three: `Jurassic Park III`  
    },
    {
        four: `Jurassic World`,
        five: `Jurassic World: Fallen Kingdom`,
        six: `Jurassic World: Dominion`
    }
];

// 3b 
const[{one,two,three},{four,five,six}] = jurassicParkMovies;
const allMovies = [one,two,three,four,five,six];
seeJPMovies = y => {
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
    console.log(six);
}

seeJPMovies(allMovies);

