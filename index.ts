// Q5 Write a program that greets the user based
// on the time of day. Display Good Morning, 
// Good Afternoon, or Good Evening based on the 
// time of day when you run the code.



let timeOfDay = new Date();
if (timeOfDay.getHours() <  12) {
console.log("Good Morning")
} else if(timeOfDay.getHours() < 16) {
    console.log("Good afternoon")
}
else if(timeOfDay.getHours() < 18) {
  console.log("Good Eving")
}
else if(timeOfDay.getHours() < 24) {
  console.log("Good Night")
}




