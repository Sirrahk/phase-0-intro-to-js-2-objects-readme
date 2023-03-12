//Modifying Objects portion
const keysObj = {
    name: {
    firstname: "Keara",
    middleinitial: "S",
    lastname: "Cates-Harris"},
    dob: "June 2, 1987",
    age: 34,
    zodiac: {
        sun: "Gemini", 
        moon: "Leo", 
        rising: "Scorpio"
        }
}
const myHobbies = {};
function addToHobbies(){
    myHobbies.read = "African American Authors",
    myHobbies.favFood = "pasta",
    myHobbies.leastFaveFood = "Bananas"
    return myHobbies;
}
console.log(addToHobbies());

//Destructively Adding a value to existing object CHANGES the original object

function modifyHobbiesDestructive(obj, key, value){
    obj[key] = value;

    return obj;
}
/*
console.log(modifyHobbiesDestructive(myHobbies, "favFood", "Junk")); */

//Update an Object Nondestructively with SPREAD
function modifyHobbiesNonDestructive(obj, key, value){
    const newLikes = {...obj}
    newLikes[key] = value;
    return obj;
}

/*console.log(modifyHobbiesDestructive());
*/
const newLikes = modifyHobbiesNonDestructive(myHobbies, "favFood", "Junk");
console.log(newLikes);
delete newLikes.leastFaveFood;
console.log(newLikes)

const bookArray = ["Mind of my Mind", "Kindred", "Bluest Eye", "Sula", "Home"]
bookArray.theseBooks =  "Some of my favorite books I've read";
console.log(bookArray)
//The .legnth property only returns those vlaues that are apart of the array as the array eleements and object style properties are seperate from each other
console.log(bookArray.length);