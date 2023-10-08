import { useEffect, useState } from "react";
import Team from "./Team";


const Teams = () => {
    const [teams , SetTeam] = useState([])
    useEffect(()=>{
        fetch('OurTeam.json')
        .then(res => res.json())
        .then(data => SetTeam(data))
    },[])
    return (
        <div className='mt-7 font-Bebas'>
            <div className="w-full text-center">
            <h1 className="text-3xl md:text-5xl mb-4">Our <span className="text-[#DA0037]">Team</span></h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-7xl mx-auto px-5 mb-4">
                {
                    teams.map(team => <Team key={team.id} team={team}></Team>)
                }
            </div>
        </div>
    );
};

export default Teams;