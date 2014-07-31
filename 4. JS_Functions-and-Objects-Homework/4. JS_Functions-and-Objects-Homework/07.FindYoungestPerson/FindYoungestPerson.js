/*7.Write a JavaScript function findYoungestPerson(persons) that accepts 
as parameter an array of persons, finds the youngest person and returns his 
full name. Write a JS program youngestPerson.js to execute your function for 
the below examples and print the result at the console.*/

function findYoungestPerson(persons) {
    var indexOfYongest = 0;
    var yongest = Number.MAX_VALUE;

    for (var i = 0; i < persons.length; i++) {
        var age = persons[i].age;
        if (age < yongest) {
            yongest = age;
            indexOfYongest = i;
        }
    }
    var firstName = persons[indexOfYongest].firstname
    var lastName = persons[indexOfYongest].lastname

    return 'The youngest person is ' + firstName + ' ' + lastName;
}

var persons = [
  { firstname: 'George', lastname: 'Kolev', age: 32 },
  { firstname: 'Bay', lastname: 'Ivan', age: 81 },
  { firstname: 'Baba', lastname: 'Ginka', age: 40 }];
console.log(findYoungestPerson(persons));
console.log('-------------------------------------------');
var persons = [
  { firstname: 'Gosho', lastname: 'Molev', age: 50 },
  { firstname: 'Bay', lastname: 'Ganio', age: 22 },
  { firstname: 'Baba', lastname: 'Vuna', age: 88 }];
console.log(findYoungestPerson(persons));