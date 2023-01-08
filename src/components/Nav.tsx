import { Button, chakra, Image } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import githubIcon from '../assets/images/icons/github.svg'
import linkedinIcon from '../assets/images/icons/linkedin.svg'
import kodXIcon from '../assets/images/icons/kodx.svg'
import DropdownButton from './DropdownButton'

/* Data */

const navLinks = [
    { title: 'Projects', link: '/projects' }
]

const liveLinks = [
    { title: 'Soundboard', link: '/soundboard' },
]

const socialLinks = [
    { link: 'https://github.com/AndreiGoriunov', alt: 'Github Link', src: githubIcon },
    { link: 'https://www.linkedin.com/in/andgor', alt: 'LinkedIn Link', src: linkedinIcon }
]

function Nav() {
    return (
        <NavBar>
            <Button variant='navLink' as={NavLink} to='/'>
                <Image w='2.5rem' src={kodXIcon} />
            </Button>
            
            {navLinks.map(({ title, link }, idx) => (
                <Button key={idx} variant='navLink' as={NavLink} to={link}>{title}</Button>
            ))}
            <DropdownButton navLinks={liveLinks}>Live</DropdownButton>

            <SocialsContainer>
                {socialLinks.map(({ src, link, alt }, idx) => (
                    <a key={idx} href={link} target='_blank' rel='noopener'>
                        <Image w='75%' src={src} alt={alt} />
                    </a>
                ))}
            </SocialsContainer>
        </NavBar>
    )
}

const NavBar = chakra('nav', {
    baseStyle: {
        background: 'dark900',
        height: '100%',
        width: '800px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
})

const SocialsContainer = chakra('div', {
    baseStyle: {
        display: 'flex',
        height: '75%',
        border: '1px solid white',
        borderRadius: 'base',
        padding: '0',
        a: {
            display: 'flex',
            justifyContent: 'center',
            margin: '0 0.5rem',
            aspectRatio: '1/1',
            width: '1.4em',
            transition: '250ms'
        }
    }
})

export default Nav