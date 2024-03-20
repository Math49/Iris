import Header from '@/Layouts/Header';
import Footer from '@/Layouts/Footer';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Send } from 'lucide-react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Welcome({ auth }) {
    return (
        <>
            <Header auth={auth} />
            <div className='flex items-center justify-between px-24 mt-20'>
                <div className='w-[45%]'>
                    <h1 className='text-noir uppercase text-6xl leading-[75px]'>Restez <span className='text-bleu'>informez</span> pour mieux vous <span className='text-bleu'>protéger</span></h1>
                    <div className='mt-10'>
                        <p>La newsletter d'Iris vous propose une documentation hebdomadaire sur diverse approche autour du cyberharcèlement. Entre les nouvelles lois, la documentation ou encore des liens exclusif vers nos dernières actualités.</p>
                    </div>
                </div>
                <div className='border-[1px] border-bleu w-[37vw] rounded-md px-6 py-8'>
                    <form action="" method="post" className='flex flex-col justify-between h-[70vh]'>
                        <div>
                            <p className='font-bold mb-2 text-2xl'>Rejoins la newsletter pour rester à jour !</p>
                        </div>
                        <div>
                            <div className='mb-4'>
                                <label htmlFor="name">Ton nom</label>
                                <input type="text" name="name" id="name" className='w-full border-[1px] bg-transparent focus:border-none border-bleu rounded-md px-2 py-1' placeholder='Tu peux rester anonyme' />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="name">Ton mail</label>
                                <input type="text" name="name" id="name" className='w-full border-[1px] bg-transparent focus:border-none border-bleu rounded-md px-2 py-1' placeholder='exemple@gmail.com' />
                            </div>
                        </div>
                        <div>
                            <p className='font-bold mb-2'>Vous êtes un :</p>
                            <div className='flex items-center gap-x-2 text-sm mb-2'>
                                <input className='border-bleu bg-transparent w-5 h-5 rounded-sm' type="radio" name="type" id="jeune" />
                                <label htmlFor="type">Jeune</label>
                            </div>
                            <div className='flex items-center gap-x-2 text-sm mb-2'>
                                <input className='border-bleu bg-transparent w-5 h-5 rounded-sm' type="radio" name="type" id="parent" />
                                <label htmlFor="type">Parent</label>
                            </div>
                            <div className='flex items-center gap-x-2 text-sm'>
                                <input className='border-bleu bg-transparent w-5 h-5 rounded-sm' type="radio" name="type" id="professionnel" />
                                <label htmlFor="type">Professionnel</label>
                            </div>
                            <div className='mt-8'>
                                <div className='flex items-center gap-x-2 text-sm mb-2'>
                                    <input className='border-bleu bg-transparent w-5 h-5 rounded-sm' type="checkbox" name="mails" id="mails" />
                                    <label htmlFor="mails">J'accepte que Iris m'envoie des mails</label>
                                </div>
                                <div className='flex items-center gap-x-2 text-sm'>
                                    <input className='border-bleu bg-transparent w-5 h-5 rounded-sm' type="checkbox" name="newsletter" id="newsletter" />
                                    <label htmlFor="newsletter">J'accepte que Iris utilise mes données dans le cadre de l'envoie de newlettter</label>
                                </div>
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