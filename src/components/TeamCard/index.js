// Write your code here
import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class TeamCard extends Component {
  render() {
    const {teamdetails} = this.props
    const {name, id, teamImageURL} = teamdetails
    return (
      <Link to={`/team-matches/${id}`}>
        <li className="list_container">
          <div>
            <img src={teamImageURL} alt={name} className="team_logo" />
          </div>
          <p className="team_name">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
