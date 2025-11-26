import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, removeItem } from '../store/cartSlice'
import { Link } from 'react-router-dom'

export default function Cart(){
  const items = useSelector(s => s.cart.items)
  const dispatch = useDispatch()
  const list = Object.values(items)
  const totalQty = list.reduce((s,i)=>s + i.qty,0)
  const totalCost = list.reduce((s,i)=>s + i.qty * i.product.price,0)

  return (
    <div>
      <h2>Carrito</h2>
      <p>Total plantas: <strong>{totalQty}</strong></p>
      <p>Costo total: <strong>${totalCost}</strong></p>

      {list.map(it => (
        <div key={it.product.id} className="card" style={{display:'flex',alignItems:'center',gap:12}}>
          <img src={it.product.img} width="90" style={{borderRadius:8}}/>
          <div style={{flex:1}}>
            <div style={{fontWeight:700}}>{it.product.name}</div>
            <div>Precio unitario: ${it.product.price}</div>
          </div>
          <div style={{display:'flex',gap:8,alignItems:'center'}}>
            <button className="btn btn-ghost" onClick={()=>dispatch(decrement(it.product.id))}>-</button>
            <div>{it.qty}</div>
            <button className="btn btn-ghost" onClick={()=>dispatch(increment(it.product.id))}>+</button>
          </div>
          <div>
            <button className="btn" onClick={()=>dispatch(removeItem(it.product.id))}>Eliminar</button>
          </div>
        </div>
      ))}

      <div style={{marginTop:16,display:'flex',gap:10}}>
        <button className="btn btn-primary" onClick={()=>alert('Próximamente')}>Pagar</button>
        <Link to="/products"><button className="btn btn-ghost">Continuar comprando</button></Link>
      </div>
    </div>
  )
}
