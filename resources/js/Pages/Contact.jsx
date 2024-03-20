import Header from '@/Layouts/Header';
import Footer from '@/Layouts/Footer';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Send } from 'lucide-react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Contact({ auth }) {
    return (
        <>
            <Header auth={auth} />
            <div className='flex items-center justify-between px-24 mt-20'>
                <div className='w-[45%]'>
                    <h1 className='text-noir uppercase text-6xl leading-[75px]'>Prenons contact pour <span className='text-bleu'>changer</span> les choses</h1>
                    <div className='mt-16 flex flex-col gap-y-10'>
                        <p className='flex items-center gap-x-2'><Mail className='text-bleu' />contact@iris.com</p>
                        <p className='flex items-center gap-x-2'><Phone className='text-bleu' />05 00 85 85 55</p>
                        <p className='flex items-center gap-x-2'><MapPin className='text-bleu' />12 rue George Mandel, 49000 - Angers</p>
                    </div>
                </div>
                <div className='border-[1px] border-bleu w-[37vw] rounded-md px-6 py-8'>
                    <form action="" method="post" className='flex flex-col justify-between h-[70vh]'>
                        <div>
                            <p className='font-bold mb-2'>Je prend contact pour ...</p>
                            <div className='flex flex-wrap gap-2'>
                                <div className='px-4 py-1 border-[1px] border-noir rounded-md cursor-pointer'>
                                    <p>Une intervention</p>
                                </div>
                                <div className='px-4 py-1 border-[1px] border-noir rounded-md cursor-pointer'>
                                    <p>Je suis victime</p>
                                </div>
                                <div className='px-4 py-1 border-[1px] border-noir rounded-md cursor-pointer'>
                                    <p>Je suis témoin</p>
                                </div>
                                <div className='px-4 py-1 border-[1px] border-noir rounded-md cursor-pointer'>
                                    <p>Je suis harceleur</p>
                                </div>
                                <div className='px-4 py-1 border-[1px] border-noir rounded-md cursor-pointer'>
                                    <p>Presse</p>
                                </div>
                                <div className='px-4 py-1 border-[1px] border-noir rounded-md cursor-pointer'>
                                    <p>Témoignage</p>
                                </div>
                                <div className='px-4 py-1 border-[1px] border-noir rounded-md cursor-pointer'>
                                    <p>Autre</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='mb-4'>
                                <label htmlFor="name">Ton nom</label>
                                <input type="text" name="name" id="name" className='w-full border-[1px] bg-transparent focus:border-none border-bleu rounded-md px-2 py-1' placeholder='Tu peux rester anonyme' />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="mail">Ton mail</label>
                                <input type="text" name="mail" id="mail" className='w-full border-[1px] bg-transparent focus:border-none border-bleu rounded-md px-2 py-1' placeholder='exemple@gmail.com' />
                            </div>
                            <div>
                                <label htmlFor="message">Ton message</label>
                                <textarea name="message" id="message" className='w-full border-[1px] bg-transparent focus:border-none border-bleu rounded-md px-2 py-1 resize-none' placeholder='Insère ton message ici ...' />
                            </div>
                        </div>
                        <div className='flex'>
                            <PrimaryButton className='flex items-center gap-x-2'>
                                Envoyer
                                <Send size={16} />
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}