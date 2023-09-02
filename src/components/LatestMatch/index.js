// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props

  return (
    <div className="LatestMatch_container">
      <div>
        <h1 className="teamName">competingTeam</h1>
        <p className="date">date</p>
        <p className="description">venue</p>
        <p className="description">result</p>
      </div>
      <div>
        <img src="" alt="" className="team-IMAGE" />
      </div>
      <div>
        <h1 className="teamName">firstInnings</h1>
        <p className="date">secondInnings</p>
        <p className="description">manOfTheMatch</p>
        <p className="description">umpires</p>
      </div>
    </div>
  )
}

export default LatestMatch
