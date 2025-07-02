import { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import Gallery from '../components/Gallery';
import { ProjectData } from '../types/project';

function ProjectsPage() {
    const [projects, setProjects] = useState<ProjectData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                // In a real app, you might fetch this from an API
                const response = await import('../data/projects.json');
                setProjects(response.default);
            } catch (err) {
                console.error('Failed to load projects:', err);
                setError('Failed to load projects. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (isLoading) {
        return <div>Loading projects...</div>;
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return (
        <div className="space-y-8">
            {projects.map((project) => (
                <ProjectCard key={project.id} title={project.title}>
                    <div className="space-y-4">
                        {project.description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                        {project.media && project.media.length > 0 && (
                            <Gallery galleryItems={project.media} />
                        )}
                        {project.link && (
                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                View Project
                            </a>
                        )}
                    </div>
                </ProjectCard>
            ))}
        </div>
    );
}

export default ProjectsPage;