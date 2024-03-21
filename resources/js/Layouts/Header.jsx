import logo from '../../img/logo-iris-500x500.png';
import { ChevronDown } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { MoveRight } from 'lucide-react';
import Bandeau from '@/Layouts/Bandeau';
import Dropdown from '@/Components/Dropdown';

export default function Header({ auth }) {
    return (
        <>
            <Bandeau />
            <nav className="flex px-20 justify-between py-3 items-center border-b-[1px] border-bleu">
                <Link href={route("welcome")} className="text-black">
                    <img src={logo} alt="Logo Iris" className='w-12' />
                </Link>
                <ul className="flex items-center gap-x-8">
                    <li>
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="inline-flex w-full p-3 py-2 leading-5 text-noir border-b-4 border-transparent hover:border-b-4 hover:border-bleu focus:outline-none transition duration-150 ease-in-out">
                                    <button
                                        type="button"
                                        className="text-noir flex items-center gap-x-1"
                                    >
                                        S'informer<ChevronDown size="16" />
                                    </button>
                                </span>
                            </Dropdown.Trigger>

                            <Dropdown.Content >
                                <Dropdown.Link href="" className='py-4'>Le cyberharcèlement</Dropdown.Link>
                                <p className='border-b-2 border-bleu_fonce'></p>
                                <Dropdown.Link className='py-4' href="">Les réseaux sociaux</Dropdown.Link>
                                <p className='border-b-2 border-bleu_fonce'></p>
                                <Dropdown.Link className='py-4' href="">Le contrôle parental</Dropdown.Link>
                                <p className='border-b-2 border-bleu_fonce'></p>
                                <Dropdown.Link className='py-4' href="">Les jeux vidéos</Dropdown.Link>
                                <p className='border-b-2 border-bleu_fonce'></p>
                                <Dropdown.Link className='py-4' href="">Violations de données</Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="inline-flex w-full p-3 py-2 leading-5 text-noir border-b-4 border-transparent hover:border-b-4 hover:border-bleu focus:outline-none transition duration-150 ease-in-out">
                                    <button
                                        type="button"
                                        className="text-noir flex items-center gap-x-1"
                                    >
                                        Agir avec nous<ChevronDown size="16" />
                                    </button>
                                </span>
                            </Dropdown.Trigger>

                            <Dropdown.Content >
                                <Dropdown.Link href={route("donnation")} className='py-4'>Faire un don</Dropdown.Link>
                                <p className='border-b-2 border-bleu_fonce'></p>
                                <Dropdown.Link className='py-4' href={route("benevole")}>Devenir bénévole</Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </li>
                    <li>
                        <Link href="" className="block w-full p-3 py-2 leading-5 text-noir border-b-4 border-transparent hover:border-b-4 hover:border-bleu focus:outline-none transition duration-150 ease-in-out ">Nos actions</Link>
                    </li>
                    <li>
                        <Link href={route("forum.index")} className="block w-full p-3 py-2 leading-5 text-noir border-b-4 border-transparent hover:border-b-4 hover:border-bleu focus:outline-none transition duration-150 ease-in-out">Forum</Link>
                    </li>
                    <li>
                        <Link href={route("blog.index")} className="block w-full p-3 py-2 leading-5 text-noir border-b-4 border-transparent hover:border-b-4 hover:border-bleu focus:outline-none transition duration-150 ease-in-out">Blog</Link>
                    </li>
                </ul>
                <div>
                    <div className='bg-bleu text-white py-1 px-6 rounded-lg hover:bg-bleu_fonce'>
                        {auth.user.id ? (
                            <Dropdown>
                                <Dropdown.Trigger className="">
                                    <span className="inline-flex rounded-md ">
                                        <button
                                            type="button"
                                            className="flex items-center justify-between gap-x-3"
                                        >
                                            Mon compte <MoveRight />
                                        </button>
                                    </span>
                                </Dropdown.Trigger>

                                <Dropdown.Content >
                                    <Dropdown.Link href={route('profile.edit')} className='py-4'>Information profil</Dropdown.Link>
                                    <p className='border-b-2 border-bleu_fonce'></p>
                                    <Dropdown.Link href={route('logout')} method="post" as="button" className='py-4'>
                                        Se déconnecter
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        ) : (
                            <Link href={route('login')} className='flex items-center justify-between gap-x-3'>Se connecter <MoveRight /></Link>
                        )}
                    </div>
                </div>
            </nav>                                
        </>
    );
}