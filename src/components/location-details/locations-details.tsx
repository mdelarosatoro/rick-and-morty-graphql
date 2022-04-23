import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { client } from '../../index';
import InfoContainer from '../core/info-container/info-container';

function LocationDetails() {
    const { idLocation } = useParams();

    const GET_LOCATION_DETAILS = gql`
        query {
            location(id: ${idLocation}) {
                name
                type
                dimension
                residents {
                    id
                    name
                    image
                }
            }
        }
    `;

    const { loading, error, data } = useQuery(GET_LOCATION_DETAILS, {
        client,
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error! {error.message}</p>;

    return (
        <div className="flex items-center justify-center m-20 gap-20 border-2 rounded-lg p-8">
            <div className="flex flex-col gap-y-2">
                <InfoContainer label="Name" value={data.location.name} />
                <InfoContainer label="Type" value={data.location.type} />
                <InfoContainer
                    label="Dimension"
                    value={data.location.dimension}
                />
            </div>
        </div>
    );
}

export default LocationDetails;
