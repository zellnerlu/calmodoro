import bib from '../components/SoundPlayer';
// import images from '../page/images';

export default function Attribution() {
    return (
        <section>
            <h1>Attribution</h1>
            <div>
                <h5>Images</h5>
                {images.map((img, index) => (
                    <p key={index} className='images-attribution'>
                        {img.title}: {img.attribution}
                    </p>
                ))}

                <hr />
                <h5>Audio</h5>
                <hr />

                <h6>Ambient</h6>
                {Object.values(bib.ambient).map((item, index) => (
                    <p key={index} className='audios-attribution'>
                        {item.title}:{' '}
                        <a href={item.mp3} target='_blank' rel='noopener noreferrer'>
                            Listen
                        </a>
                    </p>
                ))}

                <hr />
                <h6>Nature</h6>
                {Object.values(bib.nature).map((item, index) => (
                    <p key={index} className='audios-attribution'>
                        {item.title}:{' '}
                        <a href={item.mp3} target='_blank' rel='noopener noreferrer'>
                            Listen
                        </a>
                    </p>
                ))}

                <hr />
                <h6>Topping</h6>
                {Object.values(bib.asmr).map((item, index) => (
                    <p key={index} className='audios-attribution'>
                        {item.title}:{' '}
                        <a href={item.mp3} target='_blank' rel='noopener noreferrer'>
                            Listen
                        </a>
                    </p>
                ))}
            </div>
        </section>
    );
}
