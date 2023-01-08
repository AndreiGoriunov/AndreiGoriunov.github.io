import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { Flex } from '@chakra-ui/react'

function RootLayout() {
    return (
        <Flex direction='column' minH='100vh'>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </Flex>
    )
}

export default RootLayout