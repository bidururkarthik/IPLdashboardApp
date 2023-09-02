// Write your code here
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

const defaultData = {
  competingTeam: 'Sunrisers Hyderabad',
  competingTeamLogo:
    'https://assets.ccbp.in/frontend/react-js/srh-logo-img.png',
  date: '2020-11-06',
  firstInnings: 'Royal Challengers Bangalore',
  id: '1237178',
  manOfTheMatch: 'KS Williamson',
  matchStatus: 'Lost',
  result: 'Sunrisers Hyderabad Won by 6 wickets',
  secondInnings: 'Sunrisers Hyderabad',
  umpires: 'PR Reiffel, S Ravi',
  venue: 'At Sheikh Zayed Stadium, Abu Dhabi',
}

class TeamMatches extends Component {
  state = {
    teamMatchesData: {},
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getFormattedData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const fetchedData = await response.json()
    const formattedData = {
      teamBannerURL: fetchedData.team_banner_url,
      latestMatch: this.getFormattedData(fetchedData.latest_match_details),
      recentMatches: fetchedData.recent_matches.map(eachMatch =>
        this.getFormattedData(eachMatch),
      ),
    }
    // FIX13: The state value of isLoading should be set to false to display the response
    this.setState({teamMatchesData: formattedData})
  }

  getRouteClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  matchresult = () => {
    const {teamMatchesData} = this.state
    const {latestMatch} = teamMatchesData
    const data = latestMatch.map(each => each.umpires)
    return data
  }

  render() {
    const {teamMatchesData} = this.state
    const {teamBannerURL, latestMatch} = teamMatchesData
    const className = `team-matches-container ${this.getRouteClassName()}`
    const latestMatchResult = this.matchresult()
    console.log(latestMatchResult)

    return (
      <div className={className}>
        <img src={teamBannerURL} alt="" className="teamImage" />
        <div>
          <LatestMatch latestMatchData={latestMatch} />
        </div>
        <ul>
          <MatchCard />
        </ul>
      </div>
    )
  }
}

export default TeamMatches
