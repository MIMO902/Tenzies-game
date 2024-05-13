
export default function Die({die,change}) {
    const styles = {
        backgroundColor: die.isHeld ? "#59E391" : "white"
    }
    return (
        <div className="die-face" onClick={()=>change(die.id)} style={styles}>
            <h2 className="die-num">{die.value}</h2>
        </div>
    )
}