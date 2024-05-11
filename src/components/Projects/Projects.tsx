import { useState } from 'react';
import ProjectCard, { Project } from '../Cards/Project/ProjectCard';
import { projects } from '../../data/projects';
import {
    Container,
    Wrapper,
    Title,
    Desc,
    ToggleButtonGroup,
    ToggleButton,
    Divider,
    CardContainer,
} from './ProjectsStyles';

type ProjectsProps = {
    openModal: {
        state: boolean;
        project: {
            image: string;
            title: string;
            date: string;
            tags: string[];
            description: string;
            member: {
                img: string;
                name: string;
                github: string;
                linkedin: string;
            }[];
            github: string;
            webapp: string;
        } | null;
    };
    setOpenModal: (openModal: {
        state: boolean;
        project: Project;
    }) => void | null;
};

const Projects = ({ openModal, setOpenModal }: ProjectsProps) => {
    const [toggle, setToggle] = useState('all');
    return (
        <Container id="projects">
            <Wrapper>
                <Title>Projects</Title>
                <Desc>
                    I have worked on a wide range of projects. From web apps to
                    android apps. Here are some of my projects.
                </Desc>
                <ToggleButtonGroup>
                    {toggle === 'all' ? (
                        <ToggleButton
                            active
                            value="all"
                            onClick={() => setToggle('all')}
                        >
                            All
                        </ToggleButton>
                    ) : (
                        <ToggleButton
                            value="all"
                            onClick={() => setToggle('all')}
                        >
                            All
                        </ToggleButton>
                    )}
                    <Divider />
                    {toggle === 'web app' ? (
                        <ToggleButton
                            active
                            value="web app"
                            onClick={() => setToggle('web app')}
                        >
                            WEB APPS
                        </ToggleButton>
                    ) : (
                        <ToggleButton
                            value="web app"
                            onClick={() => setToggle('web app')}
                        >
                            WEB APPS
                        </ToggleButton>
                    )}
                    <Divider />
                    {toggle === 'android app' ? (
                        <ToggleButton
                            active
                            value="android app"
                            onClick={() => setToggle('android app')}
                        >
                            ANDROID APPS
                        </ToggleButton>
                    ) : (
                        <ToggleButton
                            value="android app"
                            onClick={() => setToggle('android app')}
                        >
                            ANDROID APPS
                        </ToggleButton>
                    )}
                    <Divider />
                    {toggle === 'machine learning' ? (
                        <ToggleButton
                            active
                            value="machine learning"
                            onClick={() => setToggle('machine learning')}
                        >
                            MACHINE LEARNING
                        </ToggleButton>
                    ) : (
                        <ToggleButton
                            value="machine learning"
                            onClick={() => setToggle('machine learning')}
                        >
                            MACHINE LEARNING
                        </ToggleButton>
                    )}
                </ToggleButtonGroup>
                <CardContainer>
                    {toggle === 'all' &&
                        projects.map((project) => (
                            <ProjectCard
                                project={project}
                                openModal={openModal}
                                setOpenModal={setOpenModal}
                            />
                        ))}
                    {projects
                        .filter((item) => item.category.includes(toggle))
                        .map((project) => (
                            <ProjectCard
                                project={project}
                                openModal={openModal}
                                setOpenModal={setOpenModal}
                            />
                        ))}
                </CardContainer>
            </Wrapper>
        </Container>
    );
};

export default Projects;
