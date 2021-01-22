const people = [
    {
        name: "Nicole",
        bornIn: 1992,
        nationality: "Australian"
    },
    {
        name: "Harry",
        bornIn: 2008,
        nationality: "Australian"
    },
    {
        name: "Toby",
        bornIn: 1901,
        nationality: "Australian"
    },
    {
        name: "Frida",
        bornIn: 1960,
        nationality: "Dannish"
    },
    {
        name: "Fernando",
        bornIn: 2001,
        nationality: "Brazilian"
    }
]


for (peoples of people) {
  const {bornIn, nationality} = peoples
  if(bornIn > 1900 && bornIn < 1999 && nationality === 'Australian') {
    console.log(peoples);
  }
}
// // escreva filterPeople abaixo
// const borndYear = (year) => year > 1901 && year < 1999;
// const bornLocal = (local) => local === 'Australian';

// const filteredPeople = (people) => people.filter(
//   ({bornIn, nationality}) => borndYear(bornIn) && bornLocal(nationality ? people: false)
// )

// console.log(filteredPeople(people));

