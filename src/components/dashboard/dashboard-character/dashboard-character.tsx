import { CharacterI } from '../../../interfaces/character.interfaces';

function DashboardCharacter({ character }: { character: CharacterI }) {
    return (
        <a href={`/character/${character.id}`}>
            <div className="flex flex-col items-center justify-center hover:scale-105 transition-all cursor-pointer	">
                <div className="w-32">
                    <img
                        className="rounded-full"
                        src={character.image}
                        alt=""
                    />
                </div>
                <p className="w-32 text-center">{character.name}</p>
            </div>
        </a>
    );
}

export default DashboardCharacter;
