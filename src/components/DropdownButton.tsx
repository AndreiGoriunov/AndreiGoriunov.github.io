import {
    Button, chakra, Image, Menu, MenuButton, MenuItem, MenuList
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import dropdownIcon from '../assets/images/icons/dropdownArrow.svg'

interface NavLink {
    title: string,
    link: string
}

interface DropdownButtonProps {
    navLinks: NavLink[],
    children: ReactNode
}

function DropdownButton({navLinks, children}:DropdownButtonProps) {
    return (
        <Menu gutter={0}>
            {({ isOpen }) => (
                <>
                    <MenuButton isActive={isOpen} as={Button} variant='navLink' rightIcon={<DropdownIcon className={isOpen ? 'active' : ''} src={dropdownIcon} />}>{children}</MenuButton>
                    <DropdownList>
                        {navLinks.map(({ title, link }, idx) => (
                            <DropdownItem key={idx}>
                                <Button as={NavLink} variant='navLink' to={link} {...styles.dropdownItemButton}>{title}</Button>
                            </DropdownItem>
                        ))}
                    </DropdownList>
                </>
            )}
        </Menu>
    )
}

const DropdownIcon = chakra(Image, {
    baseStyle: {
        aspectRatio: '1/1',
        height: '1rem',
        transition: '250ms',

        '&.active': {
            transform: 'rotate(180deg)'
        }
    }
})

const DropdownList = chakra(MenuList, {
    baseStyle: {
        py: '0.5rem',
        background: 'dark900',
        borderBottomRightRadius: '0.5rem',
        borderBottomLeftRadius: '0.5rem',
    }
})

const DropdownItem = chakra(MenuItem, {
    baseStyle: {
        marginBottom: '0.5rem',
        _last: { marginBottom: '0' }
    }
})

const styles = {
    dropdownItemButton: {
        width: '100%',
        py: '0.5rem',
        justifyContent: 'flex-start',
    }
}

export default DropdownButton