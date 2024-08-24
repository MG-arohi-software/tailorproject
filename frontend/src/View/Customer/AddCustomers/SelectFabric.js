import React from 'react'
import './SelectFabric.css'
import FabricCard from '../../../Component/CustomerCard/FabricCard/FabricCard'
import fab1 from '../../../Image/fab1.jpeg'
import fab2 from '../../../Image/fab2.jpeg'
import fab3 from '../../../Image/fab3.jpeg'
import fab4 from '../../../Image/fab4.jpeg'
import upload from '../../../Image/upload.png'
import { Link } from 'react-router-dom'
import back from '../../../Image/back.jpg'
import Header from '../../../Component/Header/Header'

export default function SelectFabric() {
  return (
    <>
      <header className='top_nav'><Header /></header>
      <div className='backmain'><Link to='/selectcategory'><img src={back} className='backimg'/>Back</Link></div>
      <h1 style={{ textAlign: 'center', marginTop: '80px' }}>Fabric</h1>
      <div className='Selfab_main'>
        <Link to='/measurement'> <FabricCard fabricimg={fab1} price={"200"} /></Link>
        <FabricCard fabricimg={fab2} price={"200"} />
        <FabricCard fabricimg={fab3} price={"200"} />
        <FabricCard fabricimg={fab4} price={"200"} />

        <div className='fabric_main1'>
          <img src={upload} /><br />
          <input type='file' className='choose_photo' placeholder='Upload Image' />
          <h3 className='fabric_main1-txt'>Add New Fabric</h3>
        </div>
      </div>
    </>
  )
}
