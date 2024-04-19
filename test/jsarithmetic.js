/*
    let math;
    math = 100 + 5;
    let math_letters
        , a = 5
        , b = 3;
    math_letters = (a ** b)
    console.log (typeof a)
    a = 6;
    console.log(math, math_letters,)
/*

/* OP exercises 
console.log(23 + 97);
console.log(23 + 97 + 1 + 2 + 4 + 5 + 6);
console.log((6 + 4 + 9) / 77);

let a = 10;
(9 * a);
let b = 7 * a;
console.log(b)
let MAX = 57;
let actual = (MAX - 13);
let percentage = (actual / MAX)
console.log(percentage);*/

/*const string = "The Revolution will not be televised.";
const badString = string;
console.log(string, badString);
const single = 'Single quotes';
const double = "double quotes";
const backtick = `backtick`;
console.log (single, double, backtick);
let age = 51
if (age > 13 || age < 91)
    alert ("legal");
let age2 = 13
if (!(age2 >=14 && age2<=90))
    alert ("ill eagle");*/

let username = prompt("Who's there", "");
if (username === "" || username === null) {
    console.log("canceled");
}
else if (username.toLowerCase() === "admin") {
        let pass = prompt("password?", "");
            if (pass === "TheMaster")
            {
                alert("Welcome!");
            }
            else if (pass === "" || null) {
            console.log ("password not input");
            }
                else {
                    alert("wrong password");
                }
    }
        else 
        {
            console.log ("I dont know you");
        } 

