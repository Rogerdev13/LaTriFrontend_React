import './App.css'
import {HeaderNav} from './components/HeaderNav'
import {Routes , Route} from 'react-router-dom'
import { Group  } from './components/Group'
import { Home } from './components/Home'
import { History } from './components/History/History'

function App() {
  return (
    <>
      <HeaderNav></HeaderNav>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='/history' element={<History/>}></Route>
        <Route path='/social' element={<div className='container'>HELLLO THIS IS THE social media facebook soy the bullet</div>}></Route>
        <Route path="/group" element={<Group/>}></Route>
      </Routes>
    </>
    )
}

export default App
