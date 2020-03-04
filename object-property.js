const students = [
    {id: 21, name: 'Omor'},
    {id: 31, name: 'Manna'},
    {id: 41, name: 'moyori'},
    {id: 71, name: 'dipjol'},
]
const names = students.map(s=> s.name);
const ids = students.map(s=>s.id);
const bigger = students.filter(s => s.id > 40);
const biggerone= students.find(s=>s.id > 40);
console.log(names);
console.log(ids);
console.log(bigger);
console.log(biggerone);

