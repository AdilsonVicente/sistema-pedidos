import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import {
  AppBar,
  Toolbar as MaterialToolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography
} from '@material-ui/core'
import { ReactComponent as MainLogo } from '../../images/logo-react-zzaria.svg'
import { AccountCircle } from '@material-ui/icons'
import { AuthContext } from '../../context/auth'

const Header = () => {
  const [anchorElement, setAnchorElement] = useState(null)
  const { userInfo, logout } = useContext(AuthContext)

  const handleOpenMenu = (e) => {
    setAnchorElement(e.target)
  }

  const handleClose = () => {
    setAnchorElement(null)
  }
  return (
    <AppBar>
      <Toolbar>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <Typography color='inherit'>Olá {userInfo.user.firstName} :)</Typography>

        <IconButton color='inherit' onClick={handleOpenMenu}>
          <AccountCircle />
        </IconButton>

        <Menu
          open={!!anchorElement}
          onClose={handleClose}
          anchorEl={anchorElement}
        >
          <MenuItem onClick={logout}>Sair</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

const LogoContainer = styled.div`
  flex-grow: 1;
`
const Logo = styled(MainLogo)`
  width: 200px;
  height: 50px;

  & path {
    fill: #fff;
  }

  & line {
    stroke: #fff;
  }
`
const Toolbar = styled(MaterialToolbar)`
margin: 0 auto;
max-width: 960px;
width: 100%;
`
export default Header
