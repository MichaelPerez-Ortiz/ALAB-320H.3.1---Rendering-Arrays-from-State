import Score from "./Score"

function Learner ({name , bio ,scores}) {

      const learnerScores = scores.map(score =>( <Score{ ...score}/>)) 

    return (
        <div className = "learner">
            <h1>{name}</h1>
            <p>{bio}</p>
            <ul>{learnerScores}</ul>
        </div>

    )

}

export default Learner