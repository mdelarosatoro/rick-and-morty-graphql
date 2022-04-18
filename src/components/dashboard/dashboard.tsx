import { gql, useQuery } from '@apollo/client';
import { client } from '../../index';
import { CharacterI } from '../../interfaces/character.interfaces';
import DashboardCharacter from './dashboard-character/dashboard-character';

const GET_ALL_CHARACTERS = gql`
    query {
        characters {
            results {
                id
                name
                image
            }
        }
    }
`;

function Dashboard() {
    const { loading, error, data } = useQuery(GET_ALL_CHARACTERS, {
        client,
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error! {error.message}</p>;

    return (
        <div className="min-h-[calc(100vh-200px)]">
            <h1 className="text-3xl font-bold underline">
                Rick and Morty GraphQL
            </h1>
            <div className="flex items-center justify-center flex-wrap gap-16">
                {data &&
                    data.characters.results.map((character: CharacterI) => (
                        <DashboardCharacter character={character} />
                    ))}
            </div>
        </div>
    );
}

export default Dashboard;
