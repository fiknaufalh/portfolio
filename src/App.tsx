import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { darkTheme } from './utils/Theme';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ProjectDetails from './components/ProjectDetail/ProjectDetail';
import { Project } from './components/Cards/Project/ProjectCard';
import styled from 'styled-components';

const Body = styled.div`
    background-color: ${({ theme }) => theme.bg};
    width: 100%;
    overflow-x: hidden;
`;

const Wrapper = styled.div`
    background: linear-gradient(
            38.73deg,
            rgba(204, 0, 187, 0.15) 0%,
            rgba(201, 32, 184, 0) 50%
        ),
        linear-gradient(
            141.27deg,
            rgba(0, 70, 209, 0) 50%,
            rgba(0, 70, 209, 0.15) 100%
        );
    width: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

type ModalProps = {
    state: boolean;
    project: Project;
};

function App() {
    const [openModal, setOpenModal] = useState<ModalProps>({
        state: false,
        project: null,
    });
    console.log(openModal);
    return (
        <ThemeProvider theme={darkTheme}>
            <Router>
                <Navbar />
                <Body>
                    <HeroSection />
                    <Wrapper>
                        <Skills />
                        <Experience />
                    </Wrapper>
                    <Projects setOpenModal={setOpenModal} />
                    <Wrapper>
                        <Education />
                        <Contact />
                    </Wrapper>
                    <Footer />
                    {openModal.state && (
                        <ProjectDetails
                            openModal={openModal}
                            setOpenModal={setOpenModal}
                        />
                    )}
                </Body>
            </Router>
        </ThemeProvider>
    );
}

export default App;
