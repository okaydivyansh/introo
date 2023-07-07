//This component is actually rendering multiple component. this is to make our code cleaner
//for eg., in a game, if suppose we needed rolling a dice thrice so
//rendering dice three times in app.js would have messed up our code
//hence we create this hierchy in this that there a small component die and then medium component 
//like DiceRoll and all these medium components are rendered by app.js
//We will have 5,6,7,10 levels atleast of nested components
import Die from "./Die"
export default function DiceRoll(){
    return (
        <div>
            <Die/>
            <Die/>
            <Die/>

        </div>
    )
}