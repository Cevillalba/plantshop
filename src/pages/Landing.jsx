import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Landing(){
  const nav = useNavigate()
  return (
    <div style={{textAlign:'center',padding:40,backgroundImage:'url(/src/assets/bg.jpg)',backgroundSize:'cover',borderRadius:8}}>
      <h1 style={{fontSize:36,color:'#fff',textShadow:'0 1px 3px rgba(0,0,0,0.6)'}}>PlantShop</h1>
      <p style={{color:'#fff',maxWidth:720,margin:'12px auto'}}>Seleccion de plantas de interior para transformar tus espacios. Productos seleccionados, envio nacional.</p>
      <button className="btn btn-primary" onClick={()=>nav('/products')}>Comenzar</button>
    </div>
  )
}
