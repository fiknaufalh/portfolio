import { 
    // Document, 
    Description, 
    Span, 
    Card, 
    Top, 
    Image, 
    Body, 
    Name, 
    Degree, 
    Date, 
    Grade 
} from './EducationCardStyles'

type EducationCardProps = {
    education: {
        img: string
        school: string
        degree: string
        date: string
        grade: string
        desc: string
    }
}

const EducationCard = ({ education }: EducationCardProps) => {
    return (
        <Card>
            <Top>
                <Image src={education.img} />
                <Body>
                    <Name>{education.school}</Name>
                    <Degree>{education.degree}</Degree>
                    <Date>{education.date}</Date>
                </Body>
            </Top>
            <Grade><b>Grade: </b>{education.grade}</Grade>
            <Description>
                <Span>{education.desc}</Span>
            </Description>
        </Card>
    )
}

export default EducationCard