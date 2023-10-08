
import PropTypes from 'prop-types';

const Team = ({ team }) => {
    const { name , position , description , image_url} = team
    return (
        <div className="card card-compact w-auto bg-base-100 shadow-2xl mb-5 mx-3">
            <figure><img src={image_url} alt="team member image" /></figure>
            <div className="card-body">
                <h2 className="text-2xl">{name} <span className='text-sm text-[#DA0037]'>{position}</span></h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

Team.propTypes = {
    team: PropTypes.object
};

export default Team;