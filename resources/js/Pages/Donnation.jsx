import Header from '@/Layouts/Header';
import Footer from '@/Layouts/Footer';
import PrimaryButton from '@/Components/PrimaryButton';
import BandeauDonnation from '@/Layouts/BandeauDonnation';
import CarouselBlog from '@/Components/CarouselBlog';
import don from '../../img/AdobeStock_209438048.jpeg';
import aider from '../../img/humanitarian-help.png';
import informer from '../../img/information 2.png';
import changer from '../../img/manifestation.png';


export default function Donnation({ auth, blogs }) {
    return(
        <>
        <Header auth={auth} />
        <div className='pt-16 pb-16 flex flex-col items-center gap-8'>
                <h1 className='text-noir uppercase text-6xl leading-[75px] text-center'>Soutenez notre cause : <br/> Luttez contre le cyberharcèlement</h1>
                <p className='text-center px-64'>Chaque geste compte, et même une petite action peut soutenir un grand nombre. Découvrez notre fonctionnement et nos actions pour luttez contre le harcèlement en ligne </p>
        </div>
        <div className='bg-gradient-to-bl from-gradient1 to-gradient2 h-[90vh] mt-4 flex flex-col justify-around items-center gap-x-3'>
            <h3 className='uppercase font-semibold text-4xl'>MOBILISONS-NOUS</h3>
            <div className='flex gap-60'>
                <div className='flex flex-col gap-8 w-64 items-center'>
                    <img src={aider} alt="" className='w-48 h-48' />
                    <div className=''>
                        <p className=' font-bold text-center'>Aider</p>
                        <p className='text-center'>Que dois-je faire façe à une situation de cyberharcèlement ? Trouvez ici nos conseils pour agir et vous protéger.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-8 w-64 items-center'>
                    <img src={informer} alt="" className='w-48 h-48' />
                    <div className=''>
                        <p className=' font-bold text-center'>S’informer</p>
                        <p className='text-center'>Que dois-je faire façe à une situation de cyberharcèlement ? Trouvez ici nos conseils pour agir et vous protéger.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-8 w-64 items-center'>
                    <img src={changer} alt="" className='w-48 h-48' />
                    <div className=''>
                        <p className=' font-bold text-center'>Changer</p>
                        <p className='text-center'>Que dois-je faire façe à une situation de cyberharcèlement ? Trouvez ici nos conseils pour agir et vous protéger.</p>
                    </div>
                </div>
            </div>
            <div>
                <PrimaryButton> Aider l'association </PrimaryButton>
            </div>
        </div>
        <div className='pt-16 px-32'>
            <h3 className='uppercase font-semibold text-4xl mb-8'>Nos dernières actions</h3>
            <CarouselBlog blogs={blogs} />
        </div>
        <div className=' pt-16 flex flex-col gap-16 align-middle justify-center'>
            <h3 className='uppercase font-semibold text-4xl text-center'>Rejoignez un réseau pour impactez<br/> positivement le monde</h3>
            <div className='flex flex-col items-center gap-12'>
                <div>
                    <p className=' font-black text-9xl'>281+</p>
                    <p className='font-bold text-center'>personnes ont déjà donné</p>
                </div>
            <div className='flex justify-center'>
                <PrimaryButton>Je rejoins le mouvement</PrimaryButton>
            </div>
            </div>
        </div>
        <div className=' overflow-hidden h-[60vh] flex flex-col justify-center align-middle'>
            <BandeauDonnation />
        </div>
        <div className='flex flex-row-reverse mt-6'>
            <div className='w-[50%] py-10 px-16 flex justify-between flex-col'>
                <div>
                    <p className='uppercase text-yellow font-bold text-sm'>Ensemble</p>
                    <h3 className='uppercase font-semibold text-4xl'>Agissons maintenant</h3>
                </div>
                <p>Votre soutien peut faire une réelle différence dans la lutte contre le  cyberharcèlement. En faisant un don à Iris, vous contribuez à fournir  des ressources essentielles, à sensibiliser et à soutenir les jeunes  confrontés à cette menace en ligne. Chaque euro compte dans notre  mission visant à créer un environnement numérique plus sûr et  bienveillant pour tous. Rejoignez-nous dans cette cause et ensemble,  changeons les choses.</p>
                <div>
                    <PrimaryButton>
                        Je soutiens
                    </PrimaryButton>
                </div>
            </div>             
            <img className='w-[50%] bg-bleu h-[50vh] object-cover' src={don} />
        </div>
        <Footer />
        </>
    )
}