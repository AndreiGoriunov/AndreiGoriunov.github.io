import { extendBaseTheme } from '@chakra-ui/react'
import { Button } from './components'
import orangeBlueSky from '../assets/images/orange-blue-sky.jpg'

const theme = extendBaseTheme({
    colors: {
        dark900: '#0f0f0f',
        dark900o: '#0f0f0fd0',
        dark800: '#282828',
        green500: '#6dc066',
        fore: '#fff',
        pastelGradient: 'linear-gradient(90deg, #ffb3ba, #ffdfba, #ffffba, #baffc9, #bae1ff, #e3baff, #ffbaea, #ffb3ba)'
    },
    fonts: {
        primary: "'Roboto', sans-serif",
        accent: "'Open Sans', sans-serif"
    },
    fontSizes: {
        h1: '3.5rem',
        h2: '2.5rem',
        h3: '2rem',
    },
    sizes: {
        headerHeight: '4rem',
    },
    radii: {
        base: '0.5rem'
    },
    components: {
        Button
    },
    styles: {
        global: {
            html: {
                fontSize: '10px',
            },
            body: {
                fontFamily: 'primary',
                backgroundColor: 'dark900',
                color: 'fore',
                fontSize: '1.6rem',
                background: `url(${orangeBlueSky}) no-repeat center bottom / cover fixed`,
            },
            main: {
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                padding: 'var(--chakra-sizes-headerHeight) 1.5rem 0',
                margin: '0 auto',
                width: '100%',
                maxWidth: '1200px',
                flexGrow: 1,
                overflowX: 'hidden',
            },
            p: {
                marginBottom: '1rem',

                '&:last-child': {
                    marginBottom: 0,
                }
            },
            h1: {
                fontSize: 'h1',
            },
            h2: {
                fontSize: 'h2',
            },
            h3: {
                fontSize: 'h3',
            },
            'h1,h2,h3,h4,h5': {
                fontFamily: 'accent',
            },
            '@keyframes pastelRainbow': {
                '0%': {
                    backgroundPosition: '0% 50%'
                },
                '100%': {
                    backgroundPosition: '100% 50%'
                }
            }
        }
    },
    layerStyles: {
        testCard: {
            bg: 'dark900',
        }
    }
})

export default theme