//Note Taking purposes
//An object is a collection of data represented by key, value pairs.
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
//Keys are the idenitifiers associated with the value, but values contains the real data of the objects
//console.log(keysObj);

//Accessing values stored in objects
//Dot Notation: object.key..example:
function whatIsMyName (){
    const nameInfo = keysObj.name;
    return nameInfo;
}
console.log(whatIsMyName());

function myBio(){
    const nameInfo = keysObj.name.firstname
    const birthDate = keysObj.dob;
    const myAge = keysObj.age;
    return `Good mornting!, my name is ${nameInfo}, my date of birth is ${birthDate}, and my age is ${myAge}`;
}
//Bracket Notation, using [] to access the info, need to represent the keys as strings
function myBioBracketNotation(){
    const nameInfo = keysObj["name"]["firstname"]
    const birthDate = keysObj["dob"];
    const myAge = keysObj.age;
    return `Good mornting!, my name is ${nameInfo}, my date of birth is ${birthDate}, and my age is ${myAge}`;
}
console.log(myBioBracketNotation());

//NonStandard keys, if need to use a string as both key and value:
const bigThree = {
    "Sun": "Gemini",
    "Moon": "Leo",
    "Rising": "Scorpio"
}
const retrieveBigThree =() =>{
   const sunSign = bigThree["Sun"];
   const moonSign = bigThree["Moon"];
   const risingSign = bigThree["Rising"];
   return `I am a ${sunSign} Sun, a ${moonSign} Moon, and a ${risingSign} Rising`;
}
//console.log(retrieveBigThree());

let zodiacName = "zodiac"
console.log(keysObj[zodiacName]);

//Object.keys: returns a list of the top-level keys in an object
console.log(Object.keys(keysObj));
console.log(Object.values(keysObj));