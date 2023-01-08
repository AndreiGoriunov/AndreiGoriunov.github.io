import { chakra } from '@chakra-ui/react';

const currYear = new Date().getFullYear();
const copyright = `© Andrei Goriunov 2019-${currYear} - All rights reserved.`

function Footer() {
    return (
        <FooterContainer>
            <p>{copyright}</p>
        </FooterContainer>
    )
}

const FooterContainer = chakra('footer', {
    baseStyle: {
        height: 'headerHeight',
        background: 'dark900',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.2rem',
        marginTop: '1rem',
    }
})

export default Footer