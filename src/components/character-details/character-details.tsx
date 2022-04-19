import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { client } from '../../index';
import InfoContainer from './info-container/info-container';

function CharacterDetails() {
    const { idCharacter } = useParams();

    const GET_CHARACTER_DETAILS = gql`
        query {
            character(id: ${idCharacter}) {
                name
                status
                species
                type
                gender
                origin {
                name
                }
                image
                episode {
                episode
                name
                }
                location {
                name
                }
            }
        }
    `;

    const { loading, error, data } = useQuery(GET_CHARACTER_DETAILS, {
        client,
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error! {error.message}</p>;

    return (
        <div className="flex items-center justify-center m-20 gap-20 border-2 rounded-lg p-8">
            <div>
                <img src={data.character.image} alt={data.character.name} />
            </div>
            <div className="flex flex-col gap-y-2">
                <InfoContainer label="Name" value={data.character.name} />
                <InfoContainer label="Status" value={data.character.status} />
                <InfoContainer label="Species" value={data.character.species} />
                <InfoContainer label="Type" value={data.character.type} />
                <InfoContainer label="Gender" value={data.character.gender} />
                <InfoContainer
                    label="Origin"
                    value={data.character.origin.name}
                />
            </div>
        </div>
    );
}

export default CharacterDetails;
