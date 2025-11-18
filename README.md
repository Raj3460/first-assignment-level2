1.What are some differences between interfaces and types in TypeScript?
Answer : Interface and types in TypeScript share many similarities in defining the shape of object , but they have key differences.
* interface primarily used to describe the shape of Objects. like what properties an object should have .  interface support declaration merging;

* type can describe any type not just object. For example union , tuples , or primitives. type does no support merging. if you try to declare the same type twice, it will cause an error.



2.What is the use of the keyof keyword in TypeScript? Provide an example.
answer: The keyof keyword in TypeScript is a type operator that takes an object type and produces a string or numeric literal union of its keys. It is used to extract the names of properties from an object type, enabling type-safe access to those properties.

example:
type Person = {
  name: string;
  age: number;
  city: string;
};
type PersonKeys = keyof Person;
let key: PersonKeys;

key = "name"; 
key = "age"; 
key = "city"; 



3.Explain the difference between any, unknown, and never types in TypeScript.
Answer: In TypeScript, any, unknown, and never are special types with distinct purposes and implications for type safety.
* any: The any types can assign any types of value to a variable. TypeScript doesn’t check what you do with it.When you want to disable type checking, usually temporarily.

* The unknown type represents a value whose type is not yet known. can holds any value like 'any'.TypeScript enforces type checking before you use it.When the type is not known at first, but you want to safely narrow it before using.
 
* The never type represent the value that will never occur. it is used for function that never return or for types that cannot exist.To indicate impossible scenarios or code that should not execute.



4.What is the use of enums in TypeScript? Provide an example of a numeric and string enum.
Answer: Enum in TypeScript is used to define a set of named constants.It improves readability, maintainability, and type safety.  In TypeScript Enum is basically a type but we can use it as value .Enums can be numeric (default) or string-based.

example :
* Numeric Enum:
enum Direction { Up, Down, Left, Right }
console.log(Direction.Up); 
console.log(Direction[2]); 

* String Enum:
enum UserRoles {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}

const canEdit = (role: UserRoles) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else return false;
};

const isEditPer = canEdit(UserRoles.Admin);
console.log(isEditPer);
This shows that Admin and Editor roles can edit, while Viewer cannot.



5.Provide an example of using union and intersection types in TypeScript.


* union :  Union types allow a variable to hold values of one of several specified types.

example :
type ContactInfo = string | number; 

function displayContact(contact: ContactInfo) {
  if (typeof contact === 'string') {
    console.log(`Email: ${contact}`);
  } else {
    console.log(`Phone: ${contact}`);
  }
}

displayContact("sarkarrajkumar3460@gmail.com"); // Output: Email: sarkarrajkumar3460@gmail.com
displayContact(1234567890);          // Output: Phone: 1234567890


* intersection:
Intersection types combine multiple types into a single type, meaning a value of this type must possess all the properties of each intersected type.

example: 

interface HasName {
  name: string;
}

interface HasAge {
  age: number;
}

type Person = HasName & HasAge; 

const user: Person = {
  name: "Raj",
  age: 22,
};

console.log(user.name); // Output: Raj
console.log(user.age);  // Output: 22


