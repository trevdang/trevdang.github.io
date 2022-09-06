import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/overlay.png";
import { Clipboard } from "react-bootstrap-icons";
import Typewriter from "typewriter-effect";
import Resume from "../assets/Trevor_Dang_-_SW3.pdf"

export const Banner = () => {
    // const [loopNum, setLoopNum] = useState(0);
    // const [isDeleting, setIsDeleting] = useState(false);
    // const toRotate = ["I'm a third-year Computer Engineering student,", "a Software Engineer,", "a Full-Stack Developer,", "and a Gamer."];
    // const [text, setText] = useState('');
    // const [delta, setDelta] = useState(50);
    // const period = 2000;

    // useEffect (() => {
    //     let ticker = setInterval(() => {
    //         tick();
    //     }, delta)

    //     return () => { clearInterval(ticker)};
    // }, [text])

    // const tick = () => {
    //     let i = loopNum % toRotate.length;
    //     let fullText = toRotate[i];
    //     let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    //     setText(updatedText);

    //     if(isDeleting) {
    //         setDelta(prevDelta => prevDelta/2)
    //     }

    //     if(!isDeleting && updatedText === fullText) {
    //         setIsDeleting(true);
    //         setDelta(period);
    //     } else if(isDeleting && updatedText === '') {
    //         setIsDeleting(false);
    //         setLoopNum(loopNum + 1);
    //         setDelta(100);
    //     }
    // }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h3>{'Hi! My Name is'}<h1>Trevor Dang</h1></h3>
                        <h4>
                            <Typewriter 
                        options={{
                            loop: true,
                        }}
                        onInit={(typewriter) => {
                            typewriter.changeDelay(25)
                            .changeDeleteSpeed(10)
                            .start()
                            .pauseFor(1000)
                            .typeString("I am a third-year Computer Engineering student,")
                            .pauseFor(1250)
                            .deleteAll()
                            .typeString("a Software Engineer,")
                            .pauseFor(1250)
                            .deleteAll()
                            .typeString("a Full-Stack Developer,")
                            .pauseFor(1250)
                            .deleteAll()
                            .typeString("and a Gamer.")
                            .pauseFor(1250)
                            .deleteAll()
                            }}
                    
                            />
                        </h4>
                        <p>Hello, I'm Trevor, a third-year Computer Engineering student at the University of British Columbia.</p>
                        <p>In my free time I enjoy learning new things in full-stack development, playing sports, and playing video games. Please feel free to explore around the web page.</p>
                        <a className="resume-button" href={Resume} rel="noopener noreferrer" target="_blank"><button>Resume<Clipboard size={25} /></button></a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img height={540} width={540} src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}