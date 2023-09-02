// Write your code here

import {Component} from 'react'

import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamData: []}

  componentDidMount() {
    this.getteam()
  }

  getteam = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const getTeamData = data.teams.map(item => ({
      id: item.id,
      name: item.name,
      teamImageURL: item.team_image_url,
    }))
    this.setState({teamData: getTeamData})
  }

  render() {
    const {teamData} = this.state

    return (
      <div className="bg_container">
        <div className="iplimage_container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl_logo"
          />
          <h1>IPL Dashboard</h1>
        </div>
        <ul className="main_list_container">
          {teamData.map(teamdetails => (
            <TeamCard key={teamdetails.id} teamdetails={teamdetails} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
