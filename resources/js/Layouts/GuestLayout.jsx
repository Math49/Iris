import Logo from '../../img/IRIS logo.png'
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                <div className='flex justify-center mb-3'>
                    <Link href="/">
                        <img src={Logo} alt="" className='w-32' />
                    </Link>
                </div>
                {children}
            </div>
        </div>
    );
}
