import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



const Clients = () => {

    const slideImages = ['services.jpg', 'contact.jpg', 'home.jpg'

    ];

    return (
        <div className="clients" id="clients">

            <h1>Nossos Clientes</h1>

            <div className="slide-container">
                <Slide>
                    {slideImages.map((slideImage, index) => (
                        <div key={index}>
                            <div className='slider' style={{ 'backgroundImage': `url(${slideImage})` }}>

                            </div>
                        </div>
                    ))}
                </Slide>
            </div>
        </div>
    )
}

export default Clients