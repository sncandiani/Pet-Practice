const myPet = {
    name: "Tigger", 
    species: "Dog", 
    nicknames: ["Coso", "Apestoso"], 
    age: 7,
    bark: function() {
        console.log("Woof!")
    },
    chase: function(itemChased) {
        console.log(`I am chasing ${itemChased}!`)
    }, 
    favoriteToys: [], 
    play: function(toy) {
        if (toy === "Squeaky") {
            this.favoriteToys.push(toy)
        } else {
            console.log("This toy makes me sad ):")
        }
    } 
}

myPet.bark()
myPet.chase("A squirrel")
myPet.play("Squeaky")
console.log(myPet.favoriteToys)