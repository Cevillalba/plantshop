import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header(){
  const items = useSelector(s => s.cart.items)
  const total = Object.values(items).reduce((s,i)=>s + i.qty, 0)
  return (
    <header className="header">
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Link to="/" className="logo"><div style={{width:44,height:44,background:'#16a34a',borderRadius:8,color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700}}>PL</div><div><div style={{fontWeight:700}}>PlantShop</div><div style={{fontSize:12,color:'#6b7280'}}>Plantas de interior</div></div></Link>
        <nav style={{display:'flex',gap:12,alignItems:'center'}}>
          <Link to="/products">Productos</Link>
          <Link to="/cart" className="btn-ghost" style={{padding:'6px 10px',borderRadius:6,display:'flex',gap:8,alignItems:'center',textDecoration:'none'}}>Carrito <span className="cart-count" style={{marginLeft:6}}>{total}</span></Link>
        </nav>
      </div>
    </header>
  )
}
