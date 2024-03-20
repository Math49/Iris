import PrimaryButton from '@/Components/PrimaryButton';
import footer_img from '../../img/Mascot footer.png';
import { Link } from '@inertiajs/react';
import { MoveRight } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';

export default function Header({ }) {
    return(
        <footer className="shadow-[0px_-4px_16px_0px_#00000008] py-12 px-24 mt-12">
            <div className="flex justify-between">
                <div className='w-[11vw] mb-5'>
                    <img src={footer_img} alt="" className='mb-4 mx-auto' />
                    <p className='mb-3 text-sm'>12 rue George Mandel, 49000 - Angers</p>
                    <p className='text-sm'>05 00 85 85 55</p>
                    <p className='text-sm'>contact@iris.com</p>
                </div>
                <div className='w-[11vw]'>
                    <p className='text-bleu mb-4'>Explorer</p>
                    <Link href={route("forum.index")}><p className='text-sm mb-2'>Forum</p></Link>
                    <Link href=''><p className='text-sm mb-2'>Les actualités</p></Link>
                    <Link href=''><p className='text-sm'>Nos actions</p></Link>
                </div>
                <div className='w-[11vw]'>
                    <p className='text-bleu mb-4'>A propos</p>
                    <Link href=''><p className='text-sm mb-2'>Devenir bénévole</p></Link>
                    <Link href={route("contact")}><p className='text-sm mb-2'>Contact</p></Link>
                    <Link href=''><p className='text-sm'>Blog</p></Link>
                </div>
                <div className='w-[11vw]'>
                    <p className='text-bleu mb-4'>En savoir plus</p>
                    <Link href={route("newsletter")}><p className='text-sm mb-2'>Newsletter</p></Link>
                    <Link href=''><p className='text-sm mb-2'>Mentions légales</p></Link>
                    <Link href=''><p className='text-sm'>Gestion des cookies</p></Link>
                </div>
            </div>
            <div className="border-t-[1px] border-bleu">
                <div className='flex justify-between mt-5'>
                    <p className='text-sm font-semibold'>Encore plus</p>
                    <p className='text-sm font-semibold'>Nous suivre</p>
                </div>
                <div className='flex justify-between mt-2'>
                    <div className='flex gap-x-4'>
                        <div className='bg-transparent border-bleu border-2 px-4 py-1 rounded-md cursor-pointer uppercase font-semibold text-xs flex items-center hover:bg-bleu/5 transition ease-in-out duration-150 text-bleu gap-x-2'>
                            Demander une intervention
                            <MoveRight />
                        </div>
                        <PrimaryButton className='flex items-center gap-x-2'>
                            Faire un don
                            <MoveRight />
                        </PrimaryButton>
                    </div>
                    <div className='flex gap-x-2'>
                        <Link href='' className='w-12 h-12 rounded-md bg-noir relative cursor-pointer'>
                            <Instagram size={32} className='text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                        </Link>
                        <Link href='' className='w-12 h-12 rounded-md bg-noir relative cursor-pointer'>
                            <Facebook size={32} className='text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                        </Link>
                        <Link href='' className='w-12 h-12 rounded-md bg-noir relative cursor-pointer'>
                            <Linkedin size={32} className='text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
