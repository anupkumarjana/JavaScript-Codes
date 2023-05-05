let person={
    firstName: "Anup",
    middleName: "Kumar",
    lastName: "Jana",
    age: 24,

    friends: ["Subhasis Pal","Bakul Sarkar", "Arpita Biswas", "Roza Ahmed"],

    isScalerStudent: true,

    address: {
        country: "India",
        state: {
            stateName: "West Bengal",
            district: "Purba Medinipur",
            village: "Barsuklalchak",
            pinCode: 721654

            }

        },
    education: {
        primarySchool: "Barsuklalchak Primary School",
        highSchool: "Khanchi Gunadhar Adarsha Vidyapith",
        college: "fakir Chand College",
        university: "Midnapore City College",
        SoftwareEngineering: "Scaler Academy"

    }

}

// console.log(person)
console.log(person.friends)
console.log(person.friends[0])

console.log(person.address.state.village)

person.isScalerStudent=false // this is how we can modify the value of a key

console.log(person.isScalerStudent)

person.skills=["Python","JavaScript","MySQL", "HTML","CSS","React"] // this is how we can add a key value pair in object

console.log(person)