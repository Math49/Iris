import Header from '@/Layouts/Header';
import image from '../../img/MicrosoftTeams-image (1).png';
import {Link} from '@inertiajs/react';
import Footer from '@/Layouts/Footer';

import Mascote1 from '../../img/Mascot1.png';
import Mascote2 from '../../img/Mascot2.png';
import Mascote3 from '../../img/Mascot3.png';
import Mascote4 from '../../img/Mascot4.png';
import Mascote5 from '../../img/Mascot5.png';

export default function Welcome({ auth }) {
    return (
        <>
            <Header auth={auth} />
            <div className='pl-32 pr-12 flex justify-between'>
                <div className='w-[50vw] h-[85vh] flex flex-col items-center justify-center'>
                    <h1 className='text-noir uppercase text-6xl leading-[75px]'>Ensemble contre le <span className='font-bold'>cyber-harcèlement : brisons le silence !</span></h1>
                    <p className='mt-5'>Iris, votre guide en ligne pour une utilisation sécurisée d`internet. Protégez-vous contre le cyberharcèlement avec nos conseils. Restez en sécurité en ligne.</p>
                </div>                           
                <div className='flex justify-center items-center w-[40vw]'>
                    <img className="w-[30vw] h-[27vw] object-cover rounded-lg relative z-10" src={image} alt="" />
                    <div className='bg-bleu_fonce w-[30vw] h-[27vw] absolute rounded-lg z-1 ml-8 mt-8'></div>
                </div>
            </div>
            <div className='mt-10'>
                <h2 className='uppercase text-center text-4xl font-semibold text-noir'>SE PROTÉGER CONTRE LE cyberharcèlement</h2>
                <div className='flex justify-between px-20 mt-16'>
                    <div className='flex flex-col items-center w-[14rem]'>
                        <div className='h-27 w-27 rounded-full'>
                            <img src={Mascote1} alt="" />
                        </div>
                        <h3 className='text-bleu mt-2'>Le cyberharcèlement</h3>
                        <p className='w-full text-center mt-2 text-noir'>
                            Que dois-je faire façe à une situation de cyberharcèlement ? Trouvez ici nos conseils pour agir et vous protéger.
                        </p>
                    </div>
                    <div className='flex flex-col items-center w-[14rem]'>
                        <div className='h-27 w-27 rounded-full'>
                            <img src={Mascote2} alt="" />
                        </div>
                        <h3 className='text-bleu mt-2'>Les réseaux sociaux</h3>
                        <p className='w-full text-center mt-2 text-noir'>
                            Conseils et règles de sécurité pour protéger vos enfants des risques et dangers sur les réseaux sociaux. Risque et prévention.                        
                        </p>
                    </div>
                    <div className='flex flex-col items-center w-[14rem]'>
                        <div className='h-27 w-27 rounded-full'>
                            <img src={Mascote3} alt="" />
                        </div>
                        <h3 className='text-bleu mt-2'>Le contrôle parental</h3>
                        <p className='w-full text-center mt-2 text-noir'>
                            Nos ressources  vous aideront à installer le contrôle parental. Pourquoi utiliser des outils de contrôle parental ? Protégez-vous des contenus inappropriés                        
                        </p>
                    </div>
                    <div className='flex flex-col items-center w-[14rem]'>
                        <div className='h-27 w-27 rounded-full'>
                            <img src={Mascote4} alt="" />
                        </div>
                        <h3 className='text-bleu mt-2'>Jeux vidéos</h3>
                        <p className='w-full text-center mt-2 text-noir'>
                            Bien choisir les jeux vidéos pour son enfant. Trouvez des conseils pour choisir des jeux adaptés à votre enfant et des outils pour une pratique saine.                       
                        </p>
                    </div>
                    <div className='flex flex-col items-center w-[14rem]'>
                        <div className='h-27 w-27 rounded-full'>
                            <img src={Mascote5} alt="" />
                        </div>
                        <h3 className='text-bleu text-center mt-2'>Violation de données</h3>
                        <p className='w-full text-center mt-2 text-noir'>
                            Nos ressources pour traiter et se protéger contre les vols de données personnelles. Comprenez les risques et apprenez comment protéger votre vie privée en ligne.                       
                        </p>
                    </div>
                </div>
            </div>
            <div className='bg-gradient-to-bl from-gradient1 to-gradient2 h-[90vh] mt-28 flex justify-center items-center gap-x-3'>
                <div className="h-[75vh] w-[30vw] rounded-lg border-white border-[0.5px] px-6 py-14 bg-gradient-to-bl from-white/5 to-white/20">
                    <h2 className='uppercase text-4xl font-semibold text-noir mb-6'>Nos dernières actions auprès de vous</h2>
                    <p className='text-noir mb-8'>La sensibilisation et l'éducation sont des éléments essentiels dans la lutte contre le cyberharcèlement. Nous nous engageons à fournir des ressources complètes pour aider nos utilisateurs à prévenir et signaler le cyberharcèlement. Notre équipe dédiée travaille en étroite collaboration avec des experts pour développer du contenu engageant.</p>
                    <Link href={route('register')} className='inline-flex items-center px-4 py-2 bg-bleu border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-bleu_fonce focus:outline-none transition ease-in-out duration-150 '>
                        Tout voir
                    </Link>
                </div>
                <div className='flex justify-between flex-col h-[75vh]'>
                    <div className="h-[24vh] w-[50vw] rounded-lg border-white border-[0.5px] px-6 py-6 bg-gradient-to-bl from-white/5 to-white/20">
                        <h3 className='text-noir text-[1.6rem] font-medium'>Témoin ou victime : que faire en cas de cyberharcèlement ?</h3>
                        <p className='text-noir mt-3'>Messages d'insultes, mise en ligne de photos ou de vidéos compromettantes, diffusion de rumeurs, incitations au suicide... Les formes de cyberharcèlement.</p>
                    </div>
                    <div className="h-[24vh] w-[50vw] rounded-lg border-white border-[0.5px] px-6 py-6 bg-gradient-to-bl from-white/5 to-white/20">
                        <h3 className='text-noir text-[1.6rem] font-medium'>J'ai montré mon corps sur les réseaux sociaux</h3>
                        <p className='text-noir mt-3'>Le cyberharcèlement peut prendre de nombreuses formes, notamment le partage non consensuel de photos intimes et bien d'autres encore. Ces attaques peuvent avoir des conséquences dévastatrices.</p>
                    </div>
                    <div className="h-[24vh] w-[50vw] rounded-lg border-white border-[0.5px] px-6 py-6 bg-gradient-to-bl from-white/5 to-white/20">
                        <h3 className='text-noir text-[1.6rem] font-medium'>Impact du cyberharcèlement sur la santé mentale</h3>
                        <p className='text-noir mt-3'>Le cyberharcèlement peut avoir des conséquences profondes sur la santé mentale des individus qui en sont victimes. Parmi les effets les plus courants, on trouve l'anxiété, la dépression et le stress post-traumatique.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
