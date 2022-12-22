import {Carousel} from 'react-bootstrap'
import hero1 from './../assets/IMG_0648.JPG'
import hero2 from './../assets/IMG_0654.JPG'
import hero3 from './../assets/IMG_0664.JPG'

const Intro = () => {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img className="d-block w-100" src={hero1} alt="First slide"/>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img className="d-block w-100"src={hero2} alt="Second slide"/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={hero3} alt="Third slide"/>
            </Carousel.Item>
        </Carousel>
    )
}

export default Intro;