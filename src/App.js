import UserProfile from './components/UserProfile'

import './App.css'

const userDetailsList = [
  {
    uniquieNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'sairam',
    role: 'software Developer',
  },
  {
    uniquieNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Bharath',
    role: 'software Developer',
  },
  {
    uniquieNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'John',
    role: 'software Developer',
  },
  {
    uniquieNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Ram',
    role: 'software Developer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile userDetails={eachItem} key={eachItem.uniquieNo} />
      ))}
    </ul>
  </div>
)

export default App
