import HeroBgAnimation from '../HeroBgAnimation/HeroBgAnimation';
import HeroImg from '../../images/Profile.jpg';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/bio';
import {
    HeroContainer,
    HeroBg,
    HeroInnerContainer,
    HeroLeftContainer,
    HeroRightContainer,
    TextLoop,
    Title,
    SubTitle,
    ResumeButton,
    Img,
    Span,
} from './HeroSectionStyles';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer id="Left">
                        <Title>
                            Hi, It's me <br /> {Bio.name}
                        </Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target="display">
                            Check Resume
                        </ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    );
};

export default HeroSection;
