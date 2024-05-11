import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../../data/bio';
import {
    FooterContainer,
    FooterWrapper,
    Logo,
    Nav,
    NavLink,
    SocialMediaIcons,
    SocialMediaIcon,
} from './FooterStyles';

function Footer() {
    return (
        <FooterContainer>
            <FooterWrapper>
                <Logo>Fikri Naufal Hamdi</Logo>
                <Nav>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#experience">Experience</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#education">Education</NavLink>
                </Nav>
                <SocialMediaIcons>
                    <SocialMediaIcon href={Bio.twitter} target="display">
                        <TwitterIcon />
                    </SocialMediaIcon>
                    <SocialMediaIcon href={Bio.linkedin} target="display">
                        <LinkedInIcon />
                    </SocialMediaIcon>
                    <SocialMediaIcon href={Bio.instagram} target="display">
                        <InstagramIcon />
                    </SocialMediaIcon>
                </SocialMediaIcons>
            </FooterWrapper>
        </FooterContainer>
    );
}

export default Footer;
