import Link from 'next/link';

export default function KoFiButton() {
    return (
        <Link
            href='https://ko-fi.com/zellnerlu'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 px-5 py-2.5 bg-[#29abe0] hover:bg-[#2495c3] text-white font-semibold rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200'
        >
            <span className='text-lg'>☕</span>
            <span>Buy me a Ko-fi</span>
        </Link>
    );
}
