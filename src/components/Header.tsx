import { chakra } from '@chakra-ui/react'
import Nav from './Nav'

function Header() {
    return (
        <HeaderContainer>
            <Nav />
        </HeaderContainer>
    )
}

const HeaderContainer = chakra('header', {
    baseStyle: {
        background: 'dark900',
        width: '100%',
        userSelect: 'none',
        position: 'fixed',
        height: 'headerHeight',
        zIndex: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Header
