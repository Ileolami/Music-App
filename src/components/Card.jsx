import { FaPlay } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Card = ({artistDetails, url}) => {
const navigate = useNavigate();

    const handleClick = () => {
        navigate(url);
    }
    return (  
        <div className='flex items-center'>
          <div className='card' onClick={handleClick}>
            <section>
          <div className='card_image'>
                <img src={artistDetails?.images[1].url} alt="artist" className="w-40 h-40 rounded-full " />
            </div>
            </section>
                <FaPlay className='start_icon'/>
            <div className="card_details flex flex-col items-center italic">
                <b className=' animate-pulse shadow-2xl shadow-neutral-700 border-transparent text-rose-800'>{ artistDetails?.name}</b>
                <b>{artistDetails?.type}</b>
            </div>
          </div>
        </div>
    );
}
 
export default Card;