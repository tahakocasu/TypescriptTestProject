"use strict";
let age = 20;
if (age < 50)
    age += 10;
console.log(age);
let Players = {
    id: 0,
    name: 'abc',
    retire: (props) => {
        console.log(props);
    }
};
Players.retire(Players.id.toString() + Players.name);
//# sourceMappingURL=index.js.map