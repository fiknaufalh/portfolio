import {
    Document,
    Description,
    Span,
    Card,
    Top,
    Image,
    Body,
    Role,
    Company,
    Date,
    Skills,
    ItemWrapper,
    Skill
} from './ExperienceCardStyles'

type ExperienceCardProps = {
    experience: {
        id: number
        img: string
        role: string
        company: string
        date: string
        desc: string
        skills?: string[]
        doc?: string
    }
}

const ExperienceCard = ({ experience }: ExperienceCardProps ) => {
    return (
        <Card>
            <Top>
                <Image src={experience.img} />
                <Body>
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>
                    <Date>{experience.date}</Date>
                </Body>
            </Top>
            <Description>
                {experience?.desc &&
                    <Span>{experience?.desc}</Span>

                }
                {experience?.skills &&
                    <>
                        <br />
                        <Skills>
                            <b>Skills:</b>
                            <ItemWrapper>
                                {experience?.skills?.map((skill) => (
                                    <Skill>• {skill}</Skill>
                                ))}
                            </ItemWrapper>
                        </Skills>
                    </>
                }
            </Description>
            {experience.doc &&
                <a href={experience.doc} target="new">
                    <Document src={experience.doc} />
                </a>
            }
        </Card>
    )
}

export default ExperienceCard