let array = [1, 2, 3, 4];
console.log(array);
let arr = [1, 2, 3, 4, "hello", "world"];
console.log(arr);
let arr1 = [1, 2, 3, 4, "hello", "world", ["i", "am", "array"]];
console.log(arr1[6][1]);

// objects
let obj = {
  name: "Karan",
  age: 19,
};
console.log(obj);


let obj1={
    name: "Jatin",  age: 20,
  val:{
    year:"3rd",
    section:"B"
  }
}
console.log(obj1.val.year);




// array of object 
let obj2={
    sec:"B",
    crn:"87",
    arr:["abc","x",1],
    obj1:{
        k:"abc",
        pair:4
    }
}

console.log(obj2.obj1.pair)



// obj of array
arr2=[1,2,"ello",{obj:"helo",name:"h"}]
console.log(arr2[3].name);