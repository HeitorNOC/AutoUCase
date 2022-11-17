import { Outlet } from 'react-router-dom'
import { Navbar } from '../../components/Navbar';
import Background from '../../assets/Background4.svg'

import { LayoutContainer } from "./styles";
import { Sidebar } from '../../components/Sidebar';

export function DefaultLayout() {
  return (
    <LayoutContainer >
      <Navbar />
      <div className='sideMain' style={{
      backgroundImage: `url(${Background})`,
      backgroundRepeat: 'no-repeat',
      height: 'calc(100vh - 127px)',
    }}>

        <Sidebar />
        <div className='main' >
          <Outlet />
        </div>
      </div>
    </LayoutContainer>
  )
}