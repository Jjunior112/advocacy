import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



const Clients = () => {

    const slideImages = [
        {
            url: 'client1.jpg',
            caption: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi quod aperiam, omnis deleniti ullam dolor optio adipisci expedita odit aliquid accusamus at vero necessitatibus vel reiciendis, repudiandae tempore ducimus?"'
        },
        {
            url: 'client2.jpg',
            caption: '"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis necessitatibus quidem, corrupti a magni animi repudiandae ex laboriosam id. Odit enim corporis voluptatem consequatur quidem provident mollitia earum, eius, ad quaerat hic. Nesciunt, debitis."'
        },
        {
            url: 'client3.jpg',
            caption: '"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ea eos voluptate sit exercitationem quibusdam!"'
        },
        {
            url: 'client4.jpg',
            caption: '"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ea eos voluptate sit exercitationem quibusdam!"'
        },
    ];
    return (
        <div className="clients" id="clients">

            <h1>Nossos Clientes</h1>

            <div className="slide-container">
                <Slide>
                    {slideImages.map((slideImage, index) => (
                        <div key={index}>
                            <div className='slider' style={{ 'backgroundImage': `url(${slideImage.url})` }}>
                                <span >{slideImage.caption}  </span>

                            </div>
                        </div>
                    ))}
                </Slide>
            </div>
        </div>
    )
}

export default Clients