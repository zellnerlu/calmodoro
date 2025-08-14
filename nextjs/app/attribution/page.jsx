import { bib, images } from '../constants';

export default function Attribution() {
    return (
        <section className='max-w-3xl mx-auto p-6 md:p-8 my-12 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm leading-relaxed text-gray-800 dark:text-gray-200'>
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
                {Object.values(bib.topping).map((item, index) => (
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
