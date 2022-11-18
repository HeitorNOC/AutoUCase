import Logo from '../../assets/Logo.svg'
import Avatar from '../../assets/Avatar.svg'

import { NavbarContainer } from './styles'
import { useContextSelector } from 'use-context-selector'
import { AutoUContext } from '../../context/AutouContext'
import { useNavigate } from 'react-router-dom'

export function Navbar() {
  const actualUser = useContextSelector(AutoUContext, (context) => {
    return context.actualUser
  })
  const navigate = useNavigate()
  return (

    <NavbarContainer>
      <div>
        <img src={Logo} alt="" onClick={() => navigate('/profile')} style={{ cursor: 'pointer' }}/>
        <div className='underline'>
          <div style={{
            border: '2px solid #ffffff',
            width: '369.03px',
            position: 'absolute',
            marginTop: '27px'
          }}></div>
          <div style={{
            border: '2px solid #000000',
            width: '263.03px',
            position: 'absolute',
            marginTop: '27px'
          }}></div>
        </div>
      </div>
      <img className="avatar" src={actualUser ? actualUser.avatar : Avatar} />
    </NavbarContainer>
  )
}