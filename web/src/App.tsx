import { Aside } from './components/Aside';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import './styles/global.css';
import './styles/style.css'

function App() {
  return (
    <section>
      <div className='flex gap-14 text-text mt-10 mx-10'>
      <div className='flex-2'>
        <Aside />
      </div>
      <div className='flex-1'>
        <Main />
      </div>
    </div>
    <Footer />
    </section>
    
    
  )
}

export default App
