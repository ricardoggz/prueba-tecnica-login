import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './routes'
import { NavBar } from './components'
const App = ()=>{
  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App