import bucfp4_f from '../assets/images/projects/better_ucf_parking/bucfp_garage.jpg'
import bucfp4_t from '../assets/images/projects/better_ucf_parking/bucfp_garage_thumb.jpg'
import bucfp1_f from '../assets/images/projects/better_ucf_parking/bucfp_login.jpg'
import bucfp1_t from '../assets/images/projects/better_ucf_parking/bucfp_login_thumb.jpg'
import bucfp3_f from '../assets/images/projects/better_ucf_parking/bucfp_menu.jpg'
import bucfp3_t from '../assets/images/projects/better_ucf_parking/bucfp_menu_thumb.jpg'
import bucfp2_f from '../assets/images/projects/better_ucf_parking/bucfp_overview.jpg'
import bucfp2_t from '../assets/images/projects/better_ucf_parking/bucfp_overview_thumb.jpg'
import exD1_f from '../assets/images/projects/executive_dashboard/qlik_db.jpg'
import exD1_t from '../assets/images/projects/executive_dashboard/qlik_db_thumb.jpg'
import Gallery from '../components/Gallery'
import ProjectCard from '../components/ProjectCard'

const execDashGalleryImages = [
    { srcThumb: exD1_t, srcFull: exD1_f, alt: 'dashboard' },
]

const bucfpGalleryItems = [
    { srcThumb: bucfp1_t, srcFull: bucfp1_f, alt: 'login' },
    { srcThumb: bucfp2_t, srcFull: bucfp2_f, alt: 'overview' },
    { srcThumb: bucfp3_t, srcFull: bucfp3_f, alt: 'menu' },
    { srcThumb: bucfp4_t, srcFull: bucfp4_f, alt: 'garage' },
]

function ProjectsPage() {

    return (
        <>
            <ProjectCard title='Executive Dashboard'>
                <p>This project was done as a part of Office Depot 2019 Internship Case Competition in a team of 6 people, one of which was working remotely with the rest of us.</p>
                <p>In the team I was fulfilling the roles of the Tech Lead and Designer.</p>
                <p>The goal of the project was to create a working executive dashboard prototype, which would display usefull information in the form of graphs, gauges, KPIs, etc. The data would come from a variety of sources, but mainly from Salesforce. It would then be parsed and displayed to the screen via a web dashboard application Qlik.</p>
                <p>The dashboard would be accessible on desktop and mobile devices.</p>
                <Gallery galleryItems={execDashGalleryImages} />
            </ProjectCard>
            <ProjectCard title='Better UCF Parking'>
                <p>This project was initiallized in HCI class at UCF. We, as a team of 5 students, had to desing an interface for our imaginary mobile app. But we decided to build on and improve the design and functionality of the current UCF parking app.</p>
                <p>Later, during my internship at Office Depot where I learned React-Native, I created a visual prototype which worked on both IOS and Android.</p>
                <Gallery galleryItems={bucfpGalleryItems} />
            </ProjectCard>
        </>
    )
}

export default ProjectsPage