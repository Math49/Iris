import { UserRound } from 'lucide-react';
import Dropdown from '@/Components/Dropdown';

export default function Welcome({ auth }) {
    return ( 
        <>
            <nav className='flex justify-end w-[95%] mx-auto mt-2'>
                {auth.user ? (
                    <div className='flex'>
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="inline-flex rounded-md">
                                    <button type="button" className="text-black flex items-center">
                                        Mon compte

                                        <svg
                                            className="ms-2 -me-0.5 h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                <Dropdown.Link href={route('logout')} method="post" as="button">
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                ) : (
                    <div className='flex'>
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="inline-flex rounded-md">
                                    <button type="button" className="text-black flex gap-x-2 items-center">
                                        <UserRound />
                                        Connexion
                                    </button>
                                </span>
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                <Dropdown.Link href={route('login')} className="text-black">Se connecter</Dropdown.Link>
                                <p className='mt-2 border-t-2 border-gray-100 text-xs pl-2 pt-2 text-black opacity-80'>Vous n'avez pas de compte ?</p>
                                <Dropdown.Link href={route('register')}>S'inscrire</Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                )}
            </nav>
        </>           
    );
}
