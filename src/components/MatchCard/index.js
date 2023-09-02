// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  return (
    <li className="matchCard_container">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png"
        alt=""
        className="card_image"
      />
      <h1 className="Names">capitals</h1>
      <p className="Names">good morning</p>
      <p className="boolens">lose</p>
    </li>
  )
}

export default MatchCard
