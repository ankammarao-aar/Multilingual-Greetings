import {Component} from 'react'

import LanguageTab from './components/LanguageTab'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {activeTab: languageGreetingsList[0].id}

  filterImg = () => {
    const {activeTab} = this.state

    const filterImg = languageGreetingsList.filter(
      each => each.id === activeTab,
    )

    return filterImg
  }

  changeActiveTab = tabId => {
    this.setState({activeTab: tabId})
  }

  render() {
    const {activeTab} = this.state
    const filterImg = this.filterImg()

    return (
      <div className="main-container">
        <h1 className="heading">Multilingual Greetings</h1>

        <ul className="list-container">
          {languageGreetingsList.map(each => (
            <LanguageTab
              key={each.id}
              tabDetails={each}
              changeActiveTab={this.changeActiveTab}
              isActive={each.id === activeTab}
            />
          ))}
        </ul>

        {filterImg.map(each => (
          <li className="img-list-item" key={each.id}>
            <img src={each.imageUrl} alt={each.imageAltText} className="img" />
          </li>
        ))}
      </div>
    )
  }
}

export default App
