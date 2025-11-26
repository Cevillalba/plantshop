import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/cartSlice'

const PRODUCTS = [
  { id:'p1', name:'Ficus Lyrata', price:45, category:'Grandes', img:'/src/assets/plant1.jpg' },
  { id:'p2', name:'Monstera Deliciosa', price:35, category:'Grandes', img:'/src/assets/plant2.jpg' },
  { id:'p3', name:'Sansevieria', price:18, category:'Sombra', img:'/src/assets/plant3.jpg' },
  { id:'p4', name:'Pothos', price:12, category:'Sombra', img:'/src/assets/plant4.jpg' },
  { id:'p5', name:'Echeveria', price:9, category:'Suculentas', img:'/src/assets/plant5.jpg' },
  { id:'p6', name:'Cactus Mammillaria', price:14, category:'Suculentas', img:'/src/assets/plant6.jpg' }
]

export default function Products(){
  const dispatch = useDispatch()
  const items = useSelector(s => s.cart.items)
  const inCart = id => !!items[id]

  const categories = Array.from(new Set(PRODUCTS.map(p=>p.category)))

  return (
    <div>
      <h2>Listado de plantas</h2>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:16}}>
        {categories.map(cat => (
          <div key={cat}>
            <h3>{cat}</h3>
            <div className="grid">
              {PRODUCTS.filter(p=>p.category===cat).map(p => (
                <div className="card" key={p.id}>
                  <img src={p.img} alt="" className="thumbnail" />
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:8}}>
                    <div><div style={{fontWeight:700}}>{p.name}</div><div style={{color:'#6b7280'}}>${p.price}</div></div>
                    <button className="btn btn-primary" disabled={inCart(p.id)} onClick={()=>dispatch(addToCart(p))}>{inCart(p.id)?'Añadido':'Añadir a la cesta'}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
