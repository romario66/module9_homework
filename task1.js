const parser = new DOMParser();
const data = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;


const dataXML = parser.parseFromString(data, 'text/xml');
const students = dataXML.querySelectorAll('student');
const result = { list: [] };

for (let student of students) {
    const name = student.querySelector('first');
    const surname = student.querySelector('second');
    const age = student.querySelector('age');
    const prof = student.querySelector('prof');
    const lang = student.querySelector('name').getAttribute('lang');
    result.list.push({
        'name': name.textContent + ' ' + surname.textContent,
        'age': +age.textContent,
        'prof': prof.textContent,
        'lang': lang,
    })
}