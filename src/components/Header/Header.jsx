import './Header.css';

import {NavLink} from 'react-router-dom'
function Header() {
    return (
        <div className='containerHeader'>

<ul>
  <li>
    <NavLink to='/'>
      Contact-list
    </NavLink>
  </li>
  <li>
    <NavLink to='/new-contact'>
      New-contact
    </NavLink>
  </li>
  <li>
    <NavLink to='/update-contact'>
      Update-contact
    </NavLink>
  </li>
</ul>


            
        </div>
    )
  }
  
  export default Header;