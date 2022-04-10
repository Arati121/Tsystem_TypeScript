var days = ['Monday', 'Tuseday', 'Thrusday', 'Wedensday', 'Thrusday', 'Friday', 'Saturday', 'sunday'];
for (var i = 0; i < days.length; i++) {
    console.log(days[i]);
}
//reverse array
console.log("-------------reverse array---------------");
days.reverse();
for (var i = 0; i < days.length; i++) {
    console.log(days[i]);
}
//sort array
console.log("-----------sort array-------------------");
days.sort();
for (var i = 0; i < days.length; i++) {
    console.log(days[i]);
}
//slice of array
console.log("----------------------slice array----------");
console.log(days.slice(1, 3));
