import React from 'react'
import { Link } from 'react-router-dom'
const DashHeader = () => {
  const content = (
    <header className='dash-header'>
        <div className='dash-header__container'>
            <Link to ='/dash/notes'>
                <h1 className='dash-header__title'> MERN Stack</h1>
            </Link>
            <nav className='dash-header__nav'>

            </nav>
        </div>
    </header>
  )
  return content
}

export default DashHeader