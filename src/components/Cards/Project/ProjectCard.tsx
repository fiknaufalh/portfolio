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

export type Project = {
    image: string;
    tags?: string[];
    title: string;
    date: string;
    description: string;
    member?: { img: string }[];
} | null;

type ProjectCardsProps = {
    project: Project | null;
    openModal: {
        state: boolean;
        project: Project;
    };
    setOpenModal: (args: { state: boolean; project: Project }) => void;
};

const ProjectCards = ({ project, setOpenModal }: ProjectCardsProps) => {
    return (
        <Card onClick={() => setOpenModal({ state: true, project: project })}>
            <Image src={project?.image} />
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
