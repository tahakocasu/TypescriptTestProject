let age: number = 20;
if (age < 50)
   age += 10;
console.log(age)

type Users = {
   readonly id: number,
   name: string,
   retire: (props: string) => void
}

let Players: Users = {
   id: 0,
   name: 'abc',
   retire: (props: string) => {
      console.log(props)
   }
}
Players.retire(Players.id.toString() + Players.name)

const sendReq = (props: string | number): number => {
   return typeof props === 'number' ? props * 2.2 : parseInt(props) * 2.2;
}