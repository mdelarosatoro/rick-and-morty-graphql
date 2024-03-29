import { Link } from 'react-router-dom';
import { LocationI } from '../../../../interfaces/location.interfaces';

function LocationItem({ location }: { location: LocationI }) {
    return (
        <Link to={`/location/${location.id}`}>
            <div className="flex flex-col items-center justify-center hover:scale-105 transition-all cursor-pointer	border-2 w-fit p-4 rounded-lg bg-violet-600">
                <p className="w-32 text-center text-white">{location.name}</p>
            </div>
        </Link>
    );
}

export default LocationItem;
