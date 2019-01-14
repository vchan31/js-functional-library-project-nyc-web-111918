fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let obj = Object.values(collection);
      // if Array.isArray(array) {
      for (let i = 0; i < obj.length; i++) {
        callback(obj[i], i, obj)
      } 
      return collection;

  //   } else {
  //     for (const prop in array) {
  // callback(prop, array)
  //   }


  //   }return array


    },

    map: function(collection, callback) {
      let newArr = [];
      //Object.values is manipulating the object vales into an array.
      let obj = Object.values(collection);

      for (let i = 0; i < obj.length; i++) {
        const mappedElement = callback(obj[i])
        newArr.push(mappedElement)
      }
      return newArr;
    },

    reduce: function(collection, callback, acc=0) {
      let accumulator = acc
        // if (accumulator === undefined) {
        //   //if the start value is not known, set it to the first element in the collection/array.
        //   accumulator = collection[0];
        //   //remove the first element of the collection
        //   // collection = collection.slice(1);
        // }
        //now we need to iterate over the collection.
        for (let i = 0; i < collection.length; i++) {
          accumulator = callback(accumulator, collection[i],i,collection)
        }
        return accumulator;

    },
    
    functions: function() {

    },


  }
})()

fi.libraryMethod()
