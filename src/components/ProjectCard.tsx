import { Heading } from '@chakra-ui/react'
import { ReactNode } from 'react'
import Card from './Card'

interface ProjectCardProps {
    title: ReactNode,
    children: ReactNode
}

function ProjectCard({ title, children }: ProjectCardProps) {
    return (
        <Card>
            <Heading as='h2' color='green500' mb='1rem'>{title}</Heading>
            {children}
        </Card>
    )
}

export default ProjectCard