import { chakra } from '@chakra-ui/react'

const Card = chakra('section', {
    baseStyle: {
        width: '100%',
        background: 'dark900o',
        borderRadius: 'base',
        padding: '1.5rem',
        marginTop: '1rem'
    }
})

export default Card