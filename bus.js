let Bus_Cap = prompt("Enter bus capacity")
let Person = prompt("Enter number of Person")
let PersonOnbus
let PeopleWaiting
let NumOfBus
if (Bus_Cap >= Person) {
    PersonOnbus = Person
    PeopleWaiting = Person - Bus_Cap
    NumOfBus = Math.ceil(Person / Bus_Cap)
    console.log("number of person on bus : ", PersonOnbus);
    console.log("number of people waiting : ", PeopleWaiting);
    console.log("number of bus required : ", NumOfBus);
}
else {
    PersonOnbus = Bus_Cap
    PeopleWaiting = Person - Bus_Cap
    NumOfBus = Math.ceil(Person / Bus_Cap)
    console.log("number of person on bus : ", PersonOnbus);
    console.log("number of people waiting : ", PeopleWaiting);
    console.log("number of bus required : ", NumOfBus);
}
