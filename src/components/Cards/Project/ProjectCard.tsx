import {
    // Button,
    Card,
    Image,
    Tags,
    Tag,
    Details,
    Title,
    Date,
    Description,
    Members,
    Avatar,
} from './ProjectCardStyles';
// import Img from '../../../images/Asclepius.png';

export type Project = {
    image: string;
    tags: string[];
    title: string;
    date: string;
    description: string;
    member?:
        | {
              img: string;
              name: string;
              github: string;
              linkedin: string;
          }[]
        | null;
    github: string;
    webapp?: string;
} | null;

type ProjectCardsProps = {
    project: Project | null;
    setOpenModal: (args: { state: boolean; project: Project }) => void;
};

const ProjectCards = ({ project, setOpenModal }: ProjectCardsProps) => {
    return (
        <Card onClick={() => setOpenModal({ state: true, project: project })}>
            <Image src={`${project?.image}`} />
            <Tags>
                {project?.tags?.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{project?.title}</Title>
                <Date>{project?.date}</Date>
                <Description>{project?.description}</Description>
            </Details>
            <Members>
                {project?.member?.map((member, index) => (
                    <Avatar key={index} src={member.img} />
                ))}
            </Members>
            {/* <Button>View Project</Button> */}
        </Card>
    );
};

export default ProjectCards;
