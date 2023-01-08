import { defineStyleConfig, useAriaHidden } from '@chakra-ui/react'

export default defineStyleConfig({
    // Styles for the base style
    baseStyle: {},
    // Styles for the size variations
    sizes: {},
    // Styles for the visual style variations
    variants: {
        navLink: {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            fontSize: '1.8rem',
            color: 'fore',
            textDecoration: 'none',
            padding: '0 1rem',
            borderRadius: 'base',

            _after: {
                transition: '150ms',
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '0.2rem',
                background: 'green500',
                content: "''",
                opacity: 0
            },

            '&.active::after,&:hover::after': {
                opacity: 1
            }
        },

        regular: {
            position: 'relative',
            bg: 'dark900',
            padding: '0.5rem 1rem',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            
            _after: {
                zIndex: 3,
                content: "''",
                position: 'absolute',
                bottom: 0,
                bg: 'green500',
                h: '2px',
                w: '100%',
                transform: 'translateX(-105%)',
                transition: '250ms',
            },

            _active: {
                bg: 'dark800',
            },

            _hover: {
                _after: {
                    transform: 'translateX(0%)',
                }
            },
        }
    },
    // The default `size` or `variant` values
    defaultProps: {
        variant: 'regular'
    },
})