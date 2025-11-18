

// problem 1
function formatValue(value : string | number | boolean){
       if(typeof value === "string"){
              return value.toUpperCase();
}
        else if (typeof value === "number"){
              const val =  value * 10;
              return val;
       }
       else if(typeof value === "boolean"){
              const oppositeVal = !value;
              return oppositeVal;
       }
         
}

// problem 2

function getLength (value : string | any[]){
       if(typeof value === "string"){
              return value.length;
       } else if (Array.isArray(value)){
              return value.length;
       }
}


// problem 3
class Person{
       name: string;
       age: number;

       constructor(name : string, age: number){
              this.name =name ;
              this.age = age;
       }

       
       getDetails (){
              return `'Name: ${this.name}, Age: ${this.age}'`;
       }
}



// problem 4

type Item = {
       title: string;
       rating: number;
}
function filterByRating ( ArrayOfItems : Item[] ) {
       const value = ArrayOfItems.filter(i => i.rating >= 4);
       return value;
       
}

// problem 5

type User ={
       id : number;
       name : string;
       email: string;
       isActive : boolean;
}

function filterActiveUsers (users : User[]){
       const activeUsers = users.filter(user => user.isActive);
       return activeUsers;
}

// problem 6

interface Book {
       title : string ;
       author : string;
       publishedYear : number;
       isAvailable : boolean;
       
}
function printBookDetails (book: Book) {
       const isAvailableBook = book.isAvailable ? 'Yes' : 'No';
       const books = `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${isAvailableBook}`;
       
       console.log(books);
       return books;
}




// problem 7


function getUniqueValues<T extends number | string>(arr1 : T[], arr2: T[]) : T[] {
    const combineArr: T[] = [...arr1, ...arr2];
       const uniqueValues: T[] = [];
      
       
       for (let i = 0; i< combineArr.length; i++) {
              if (  !uniqueValues.includes(combineArr[i]  )   ) {

                     uniqueValues.push(combineArr[i]);
              }

       }

       return uniqueValues;
}

// problem 8



type Product = {
       name : string;
       price : number;
       quantity : number;
       discount? : number;
}
function calculateTotalPrice  (products : Product[]) : number {
      if (products.length === 0) {
       return 0
      }

      const totalPriceItem = products.map(product => {
       const basePrice = product.price * product.quantity;
         const discount =  product.discount ? product.discount : 0;
       const finalPrice = basePrice * (1 - discount / 100);
       return finalPrice;
      })
      const totalPrice = totalPriceItem
      .reduce((total, price) => total + price, 0);
      
      return totalPrice;
}
      

