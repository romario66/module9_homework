const data = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`;

const dataJSON = JSON.parse(data);
const result = { list: [] };

for (let person of dataJSON.list) {
    result.list.push({
        'name': person.name,
        'age': +person.age,
        'prof': person.prof,
    })
}