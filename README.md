The difference between any, unknown and never are 

any: any type in typescript can hold any type , it is kind of plain javascript, no require to check the type before use.
unknown: It is alternative of any type but it is hold a type which is unknown but must be check by using typeof operator before the use.
never: never type means which is impossible to hold value, it must be throw an error 


Example of using union and intersection types in TypeScript:


 type id = string | number;


type id = string | number;

function studentId(studentId: id): string {
  return `Student ID: ${studentId}`;
}

 console.log(studentId(101));
 console.log(studentId('101'));


 interface Person {
    name: string;
 } 

 interface Employment {
    profession: string;
    contact: string;
 }

 type PersonDetails = Person & Employment;


 const employee : PersonDetails = {
    name: 'Runel',
    profession: 'Developer',
    contact: 'abc@gmail.com'
 }

 

