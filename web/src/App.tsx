import { Aside } from './components/Aside';
import { Main } from './components/Main';
import './styles/global.css';
import './styles/style.css'

function App() {
  return (
    <body className='flex gap-14'>
      <div className='flex-2'>
        <Aside />
      </div>
      <div className='flex-1'>
        <Main />
      </div>
    </body>
    
  )
}

export default App
