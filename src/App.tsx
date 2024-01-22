import './App.css'
import Contact from './components/contact/Contact'
import { Counter } from './components/counter/Counter'
import { Users } from './components/users/Users'
export default function App() {
  return (
    <div className="App">
      <Contact />
      <Counter />
      <Users />
    </div>
  )
}
