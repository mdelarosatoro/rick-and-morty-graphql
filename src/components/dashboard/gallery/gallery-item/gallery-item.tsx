import { Link } from 'react-router-dom';
import { CharacterI } from '../../../../interfaces/character.interfaces';

function CharacterItem({ character }: { character: CharacterI }) {
    return (
        <Link to={`/character/${character.id}`}>
            <div className="flex flex-col items-center justify-center hover:scale-105 transition-all cursor-pointer	">
                <div className="w-32">
                    <img
                        className="rounded-full"
                        src={character.image}
                        alt={character.name}
                    />
                </div>
                <p className="w-32 text-center">{character.name}</p>
            </div>
        </Link>
    );
}

export default CharacterItem;
