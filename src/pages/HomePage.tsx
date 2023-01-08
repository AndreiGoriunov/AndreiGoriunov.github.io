import { chakra, Text } from '@chakra-ui/react'
import Card from '../components/Card'

function HomePage() {
    return (
        <Wrapper>
            <IntroCard>
                <IntroCardTitle>Andrei Goriunov</IntroCardTitle>
                <Text mx='1rem'>Hi, I'm a student graduate from the University of Central Florida with a degree at Information Technology. I'm obsessed with automation. I built this portfolio to showcase my personal projects and share my current interests.</Text>
            </IntroCard>
        </Wrapper>
    )
}

const IntroCard = chakra(Card, {
    baseStyle: {
        width: {
            base: '95%',
            md: '60%'
        },
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',

        '&::after, &::before': {
            content: "''",
            display: 'block',
            borderRadius: '100px',
            background: 'pastelGradient',
            backgroundSize: '1800% 100%',
            height: '0.5rem',
            animation: 'pastelRainbow 8s ease infinite'
        },

        _before: {
            marginBottom: '3rem',
        },

        _after: {
            marginTop: '3rem',
        }
    }
})

const IntroCardTitle = chakra('h1', {
    baseStyle: {
        textAlign: 'center',
        background: 'pastelGradient',
        backgroundSize: '1600% 100%',
        color: '#ffb3ba',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animation: 'pastelRainbow 8s ease infinite',
        marginBottom: '1.5rem',
        lineHeight: 1.2,
        fontSize: {
            base: '2.5rem',
            sm: '3rem',
            md: 'h1'
        }
    }
})

const Wrapper = chakra('div', {
    baseStyle: {
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})


export default HomePage