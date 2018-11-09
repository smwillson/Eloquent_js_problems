/*
Deep comparison
The == operator compares objects by identity. But sometimes you’d prefer to
compare the values of their actual properties.
Write a function deepEqual that takes two values and returns true only if they
are the same value or are objects with the same properties, where the values
of the properties are equal when compared with a recursive call to deepEqual.
To find out whether values should be compared directly (use the === operator
for that) or have their properties compared, you can use the typeof operator.
If it produces "object" for both values, you should do a deep comparison.
But you have to take one silly exception into account: because of a historical
accident, typeof null also produces "object".
The Object.keys function will be useful when you need to go over the properties
of objects to compare them.

*/

function deepEqual(object1, object2) {
  //check if the given objects have the same datatype
  if (typeof(object1) === typeof(object2)) {
    //check if the given object is a primitive datatype and how to handle null values
    if ((typeof(object1) !== 'object') && (typeof(object2) !== 'object') ||
      object1 === null || object2 === null) {
      return object1 === object2;
    } else {
      //if they are both objects
      if (object1 !== null && object2 !== null) {
        let object1Keys = Object.keys(object1);
        let object2Keys = Object.keys(object2);

        //check if the arrays have the same length
        if (object1Keys.length === object2Keys.length) {
          let isEqual;
          for (let index = 0; index < object1Keys.length; index++) {
            //make sure both key:value pairs match
            if (object1Keys[index] === object2Keys[index]) {
              //check if the current value is another object
              if (typeof(object1[object1Keys[index]]) === 'object' &&
                typeof(object2[object2Keys[index]]) === 'object') {
                return deepEqual(object1[object1Keys[index]], object2[object2Keys[index]]);
              } else {

                isEqual = (object1[object1Keys[index]] === object2[object2Keys[index]]);
              }
            }else{

              return false;//return false if keys dont match
            }
          }
          return isEqual;

        } else {
          return false; //return false if 2 arrays dont have the same length
        }

      }
    }
  } else {
    return false; //return false if 2 object types dont match
  }
}


let obj1 = {
  a: 'somestring',
  b: 42,
  c: {
    1: 'one',
    2: {
      3: 'Three'
    }
  }
};

let obj2 = {
  a: 'somestring',
  b: 42,
  c: {
    1: 'one',
    2: {
      3: 'Three'
    }
  }
};
console.log("obj1 == obj2 : ");
console.log(deepEqual(obj1, obj2));


let obj3 = {
  a: 'somestring',
  b: 42,
  c: {
    1: 'one',
    2: {
      4: 'Three'
    }
  }
};

let obj4 = {
  a: 'somestring',
  b: 42,
  c: {
    1: 'one',
    2: {
      3: 'Three'
    }
  }
};
console.log("obj3 == obj4 : ");

console.log(deepEqual(obj3, obj4));
let obj = {
  name: {
    gender: "F"
  },
  age: 20
};

console.log(deepEqual(obj, {
  name: {
    gender: "F"
  },
  age: 20
}));
console.log('null == obj3');
console.log(deepEqual(null, obj3));
console.log('5 == obj3');
console.log(deepEqual(5, obj3));
console.log('null == null');
console.log(deepEqual(null, null));
console.log('10 == 5');
console.log(deepEqual(10, 5));
console.log(`10 == '10'`);
console.log(deepEqual(10, '10'));

/*
obj1 == obj2 :
true
obj3 == obj4 :
false
true
null == obj3
false
5 == obj3
false
null == null
true
10 == 5
false
10 == '10'
false
*/
