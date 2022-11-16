import Logo from '../../assets/Logo.svg'
import Avatar from '../../assets/Avatar.svg'

import { NavbarContainer } from './styles'

export function Navbar() {
  return (

    <NavbarContainer>
      <div>
        <img src={Logo} alt="" />
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
      <img src={Avatar} />
    </NavbarContainer>
  )
}