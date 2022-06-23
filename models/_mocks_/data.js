const faker = require('faker');

   
const contacts = [
    {
    "_id" : faker.random.uuid(),
    "name" : faker.name.firstName(),
    "email" : faker.internet.email(),
    "phone" : faker.phone.phoneNumber(),
    "owner" : "604ca2d92a3a55122c1af5f3",
    
},
{
     "_id" : faker.random.uuid(),
    "name" : faker.name.firstName(),
    "email" : faker.internet.email(),
    "phone" : faker.phone.phoneNumber(),
    "owner" : "604ca2d92a3a55122c1af5f3",
}
]

const newContact = {
  name: faker.name.firstName(),
  email : faker.internet.email(),
  phone : faker.phone.phoneNumber(),
}


const User = {
   "_id" : faker.random.uuid(),
    "name" : faker.name.firstName(),
    "subscription" : "free",
    "imgIdCloud" : "Photo/owonadfrhtqq4piuqyfb",
    "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNTExZmJlN2FhMTllMzAwYzA0OTkzYSIsImlhdCI6MTYxNjA4NzgyMiwiZXhwIjoxNjE2MDk1MDIyfQ.B4fzzqPlYCW9LTj3nNzXFSzU8eF4pztrCPYSlcnulj0",
    "email" : faker.internet.email(),
    

const users = []

users[0] = User

const newUser = {
    email: faker.internet.email(),
    password: faker.internet.password()
}

module.exports = { contacts, newContact, User, users, newUser }