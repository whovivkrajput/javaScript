 //init array
const arr = [1,2,2,3,3,4,6];
console.log(arr.length);

//foreach
arr.forEach((val) =>{
    console.log("ForEach : ",val + " VictorForce");
})


// map 
var newArr_map = arr.map(function(val){
    return val;
})
console.log("Map : ",newArr_map);


// filter 
var newArr_filter = arr.filter(function(val){
    if(val > 1){
        return true;
    }
})
console.log("Filter : ",newArr_filter);


// find 
var newArr_find = arr.find(function(val){
    if(val === 3){
        return val;
    }
})
console.log("Find : " ,newArr_find);


// indexOf

console.log("IndexOf : ",arr.indexOf(4));
console.log("IndexOf : ",arr.indexOf(6));
console.log("IndexOf : ",arr.indexOf(12));
