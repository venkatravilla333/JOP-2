

// var person = {
//   name: 'sachin',
//   age: 40,
//   address: {city: 'mumbai', road: 101, assets: [100000,'bat']}
// }

//without

// console.log(person)
// console.log(person.name)
// console.log(person.age)
// console.log(person.address.city)
// console.log(person.address.road)
// console.log(person.address.assets[0])
// console.log(person.address.assets[1])

// with

// var { name, age, address: { city, road, assets:[x, y] } } = person

// console.log(name)
// console.log(age)
// console.log(city)
// console.log(road)
// console.log(x)
// console.log(y)

var arr = ['sachin', 40, { city: 'mumbai', road: 101 }, ['kohli', 100000]]

//without

// console.log(arr)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2].city)
// console.log(arr[2].road)

//with

// var [name1, age, { city, road }, [name2, cash]] = arr

// console.log(name1)
// console.log(age)
// console.log(city)
// console.log(road)
// console.log(name2)
// console.log(cash)