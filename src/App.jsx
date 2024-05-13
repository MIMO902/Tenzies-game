import { useState ,useEffect } from "react"
import Die from "./Die"
import Confetti from "react-confetti"
export default function App() {
  const [dice, setDice] = useState(allNewDice())
  const [tenzies,settenzies]=useState({
    numberofrolls:0,
    starttime: Date.now(),
    endtime: Date.now(),
    tenzie:false
  })
  useEffect(()=>{
    const first =dice[0].value
    const allheld= dice.every(die=>die.isHeld)
    const allequal=dice.every(die=>die.value===first)
    if(allheld && allequal){
      console.log("you have won the game")
      console.log("number of rolls = "+ tenzies.numberofrolls)
      settenzies(prev =>({
        ...prev,
        endtime:Date.now(),
        tenzie:true
      }))
    }
  },[dice])
  console.log(tenzies.endtime -tenzies.starttime)
  function allNewDice() {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr[i] = {
        id: i + 1,
        isHeld: false,
        value: Math.ceil(Math.random() * 6)
      }
    }
    return arr
  }
  function changetoheld(id) {
    const newarr = dice.map(die =>
      die.id === id ?
        {
          ...die,
          isHeld: !die.isHeld
        } : die
    )
    setDice(newarr)
  }
  const Elementstoshow = dice.map(die => <Die
    key={die.id}
    die={die}
    change={changetoheld}
  />)
  function rolldice() {
    if(!tenzies.tenzie){
    setDice(prev => prev.map(die => {
      return die.isHeld ? die :
        { ...die, value: Math.ceil(Math.random() * 6) }
    }))
    settenzies(prev =>({
      ...prev,
      numberofrolls: prev.numberofrolls+1
    }))
  }else{
      settenzies({
        numberofrolls:0,
        starttime:Date.now(),
        endtime:Date.now(),
        tenzie:false
      })
      setDice(allNewDice())
    }
  }
  return (
    <main>
      {tenzies.tenzie && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {Elementstoshow}
      </div>
      <button className="roll-dice" onClick={rolldice}>{tenzies.tenzie?"new game":"Roll"}</button>
    </main>
  )
}