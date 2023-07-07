import "./Die.css";  //this simply tells webpack when you are building the bunfle of components then include this file for the component Die
export default function Die(){
    const roll=Math.floor((Math.random()*6))+1
    return <h4 className="Die">Dice Roll: {roll}</h4>
}
//if we use Die anywhere as the className of any component then too it'll get the same CSS properties.
//className="Die" has no relation with the component Die. It is just a convention to use same names