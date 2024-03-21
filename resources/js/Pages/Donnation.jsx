import Header from '@/Layouts/Header';
import Footer from '@/Layouts/Footer';
import PrimaryButton from '@/Components/PrimaryButton';
import BandeauDonnation from '@/Layouts/BandeauDonnation';

export default function Donnation({ auth }) {
    return(
        <>
        <Header auth={auth} />
        <div className='pt-32 pb-16 flex flex-col items-center gap-8'>
                <h1 className='text-noir uppercase text-6xl leading-[75px] text-center'>Soutenez notre cause : <br/> Luttez contre le cyberharcèlement</h1>
                <p className='text-center px-64'>Chaque geste compte, et même une petite action peut soutenir un grand nombre. Découvrez notre fonctionnement et nos actions pour luttez contre le harcèlement en ligne </p>
        </div>
        <div className='bg-gradient-to-bl from-gradient1 to-gradient2 h-[90vh] mt-28 flex flex-col justify-around items-center gap-x-3'>
            <h3 className='uppercase font-semibold text-4xl'>Titre</h3>
            <div className='flex gap-60'>
                <div className='flex flex-col gap-8 w-64 items-center'>
                    <div className=' bg-amber-500 rounded-full w-48 h-48'></div>
                    <div className=''>
                        <p className=' font-bold text-center'>Aider</p>
                        <p className='text-center'>Que dois-je faire façe à une situation de cyberharcèlement ? Trouvez ici nos conseils pour agir et vous protéger.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-8 w-64 items-center'>
                    <div className=' bg-amber-500 rounded-full w-48 h-48'></div>
                    <div className=''>
                        <p className=' font-bold text-center'>S’informer</p>
                        <p className='text-center'>Que dois-je faire façe à une situation de cyberharcèlement ? Trouvez ici nos conseils pour agir et vous protéger.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-8 w-64 items-center'>
                    <div className=' bg-amber-500 rounded-full w-48 h-48'></div>
                    <div className=''>
                        <p className=' font-bold text-center'>Changer</p>
                        <p className='text-center'>Que dois-je faire façe à une situation de cyberharcèlement ? Trouvez ici nos conseils pour agir et vous protéger.</p>
                    </div>
                </div>
            </div>
            <div>
                <PrimaryButton> Aider l’association </PrimaryButton>
            </div>
        </div>
        <div className='py-16'>
            <h3 className='uppercase font-semibold text-4xl ps-32'>Nos dernières actions</h3>
            {/* Carrousel */}
        </div>
        <div className=' py-16 flex flex-col gap-32 align-middle justify-center'>
            <h3 className='uppercase font-semibold text-4xl text-center'>Rejoignez un réseau pour impactez<br/> positivement le monde</h3>
            <div className='flex flex-col items-center gap-16'>
                <div>
                    <p className=' font-black text-9xl'>281+</p>
                    <p className='font-bold text-center'>personnes ont déjà donné</p>
                </div>
            <div className='flex justify-center'>
                <PrimaryButton>Je rejoins le mouvement</PrimaryButton>
            </div>
            </div>
        </div>
        <div className=' overflow-hidden h-[100vh] flex flex-col justify-center align-middle'>
            <BandeauDonnation />

        </div>
        <Footer />
        </>
    )
}