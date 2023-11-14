export default function Card(props) {
    const item = props.item
    
    return  <div className='card'>
    <h2>{item.name}</h2>
    <div>
      <button className='bup'>Status: Vivo</button>
      <button className='bup'>Espécie: Humana</button>
    </div>
     <div>
      <button className='bdo'>Origem: Terra C-137</button>
      </div> 
    <img src= {item.imageUrl} />
   </div>
}