import { useState } from 'react'
import Name from './components/Name'
import Activity from './components/Activity'
import data from './data'
import './styles/App.css'

const App = () => {
  const [activeTimeframe, setActiveTimeframe] = useState('Weekly')
  const colors = [
    'hsl(15, 100%, 70%)',
    'hsl(195, 74%, 62%)',
    'hsl(348, 100%, 68%)',
    'hsl(145, 58%, 55%)',
    'hsl(264, 54%, 62%)',
    'hsl(43, 84%, 65%)'
  ]
  return (
    <main className='App'>
      <Name
        activeTimeframe={activeTimeframe}
        setActiveTimeframe={setActiveTimeframe}
      />
      {data &&
        data.length > 0 &&
        data.map((activity, i) => (
          <Activity
            key={i}
            activity={activity}
            color={colors[i]}
            activeTimeframe={activeTimeframe}
          />
        ))}
    </main>
  )
}
export default App
