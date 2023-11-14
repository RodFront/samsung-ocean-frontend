
import './App.css'
import Card from './components/Cards/Card'

function App() {
  return (
    <>
     <div className='card'>
      <h2>Rick Sanchez</h2>
      <div>
        <button className='bup'>Status: Vivo</button>
        <button className='bup'>Espécie: Humana</button>
      </div>
       <div>
        <button className='bdo'>Origem: Terra C-137</button>
        </div> 
      <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
     </div>
     <br />
     <Card />
    </>
  )
}

export default App
