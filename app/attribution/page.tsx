import { bib, images } from '../constants';

export default function Attribution() {
    return (
        <section className='max-w-3xl mx-auto p-6 md:p-8 my-12 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm leading-relaxed text-gray-800 dark:text-gray-200'>
            <h1 className='text-2xl font-semibold mb-4'>Attribution</h1>

            <div>
                <h5 className='text-lg font-medium mt-4 mb-2'>Images</h5>
                {images.map((img, index) => (
                    <p
                        key={index}
                        className='images-attribution text-sm mb-1'
                        dangerouslySetInnerHTML={{ __html: `${img.title}: ${img.attribution}` }}
                    />
                ))}

                <hr className='my-4 border-gray-300 dark:border-gray-600' />

                <h5 className='text-lg font-medium mt-4 mb-2'>Audio</h5>

                <hr className='my-2 border-gray-300 dark:border-gray-600' />
                <h6 className='font-medium mt-2 mb-1'>Ambient</h6>
                {Object.values(bib.ambient).map((item, index) => (
                    <p
                        key={index}
                        className='audios-attribution text-sm mb-1'
                        dangerouslySetInnerHTML={{ __html: `${item.title}: ${item.attribution}` }}
                    />
                ))}

                <hr className='my-2 border-gray-300 dark:border-gray-600' />
                <h6 className='font-medium mt-2 mb-1'>Nature</h6>
                {Object.values(bib.nature).map((item, index) => (
                    <p
                        key={index}
                        className='audios-attribution text-sm mb-1'
                        dangerouslySetInnerHTML={{ __html: `${item.title}: ${item.attribution}` }}
                    />
                ))}

                <hr className='my-2 border-gray-300 dark:border-gray-600' />
                <h6 className='font-medium mt-2 mb-1'>Topping</h6>
                {Object.values(bib.topping).map((item, index) => (
                    <p
                        key={index}
                        className='audios-attribution text-sm mb-1'
                        dangerouslySetInnerHTML={{ __html: `${item.title}: ${item.attribution}` }}
                    />
                ))}
            </div>
        </section>
    );
}
