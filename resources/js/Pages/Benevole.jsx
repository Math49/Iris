import Header from '@/Layouts/Header';
import Footer from '@/Layouts/Footer';
import { Send } from 'lucide-react';
import PrimaryButton from '@/Components/PrimaryButton';
import image from '../../img/gem0701938-jpg-29468.jpg';
import React from "react";
import MultipleItems from '@/Components/MultipleItems';

export default function Benevole({ auth }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    return (
        <>
            <Header auth={auth} />
            <div className='pl-32 pr-12 flex justify-between'>
                <div className='w-[40vw] h-[86vh] flex flex-col items-center justify-center'>
                    <h1 className='text-noir uppercase text-6xl leading-[75px]'>devenir bénévole : <span className='text-bleu'>s'engager</span> auprès <br /> des victimes</h1>
                    <p className='mt-5'>Agir pour le bien commun c'est permettre aux 15 bénévoles d'apporter un soutien à des personnes cyberharcelés !</p>
                </div>                           
                <div className='flex justify-center items-center w-[40vw]'>
                    <img className="w-[30vw] h-[27vw] object-cover rounded-lg relative z-10" src={image} alt="" />
                    <div className='bg-bleu_fonce w-[30vw] h-[27vw] absolute rounded-lg z-1 ml-8 mt-8'></div>
                </div>
            </div>

            <div className='px-10'>
                <MultipleItems />
            </div>


            <div>
                <div className='flex'>
                    <div className='w-[50%] bg-bleu h-[50vh]'>

                    </div>
                    <div className='w-[50%] py-10 px-16 flex justify-between flex-col'>
                        <div>
                            <p className='uppercase text-yellow font-bold text-sm'>POURQUOI</p>
                            <h3 className='uppercase font-semibold text-4xl'>apporter du soutien</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor facilisis augue. Nullam egestas, purus at viverra feugiat, augue ante cursus est, et suscipit augue ligula pharetra ligula. Proin elementum ornare ex, quis sollicitudin neque mattis in. Mauris ac ipsum nec lacus varius dignissim quis id mi. Ut tempus urna ac turpis pretium, eu mollis eros pulvinar. Nulla fringilla eros tellus, ut maximus ligula ultrices vel. Donec quis velit tempus, imperdiet tortor in, hendrerit nisi. Nulla facilisi.</p>
                        <div>
                            <PrimaryButton>
                                Je m'engage
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-[50%] py-10 px-16 flex justify-between flex-col'>
                        <div>
                            <p className='uppercase text-yellow font-bold text-sm'>comment</p>
                            <h3 className='uppercase font-semibold text-4xl'>Des missions impactantes</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor facilisis augue. Nullam egestas, purus at viverra feugiat, augue ante cursus est, et suscipit augue ligula pharetra ligula. Proin elementum ornare ex, quis sollicitudin neque mattis in. Mauris ac ipsum nec lacus varius dignissim quis id mi. Ut tempus urna ac turpis pretium, eu mollis eros pulvinar. Nulla fringilla eros tellus, ut maximus ligula ultrices vel. Donec quis velit tempus, imperdiet tortor in, hendrerit nisi. Nulla facilisi.</p>
                        <div>
                            <PrimaryButton>
                                Je soutiens
                            </PrimaryButton>
                        </div>
                    </div>             
                    <div className='w-[50%] bg-bleu h-[50vh]'>

                    </div>
                </div>
            </div>




            <div className='flex items-center justify-between px-24 mt-20'>
                <div className='w-[45%]'>
                    <h1 className='text-noir uppercase text-6xl leading-[75px]'>Aider, <br/> S'informer, <br/>Changer.</h1>
                    <div className='mt-10'>
                        <p>Faire une demande pour nous rejoindre en tant que bénévole.</p>
                    </div>
                </div>
                <div className='border-[1px] border-bleu w-[37vw] rounded-md px-6 py-8'>
                    <form action="" method="post" className='flex flex-col justify-between h-[70vh]'>
                        <div>
                            <p className='font-bold mb-2 text-2xl'>Agir avec Iris</p>
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