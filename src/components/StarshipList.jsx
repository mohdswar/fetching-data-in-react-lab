import StarshipCard from "./StarshipCard";

function StarshipList(props) {
    return (
        <>
            {props.starships ? (
                <div>
                    <p>Number of results: {props.starships.length}</p>
                    {props.starships.map((starship) => (
                        <StarshipCard starship={starship} />
                    ))}
                </div>
            ) : ('loading ...')}


        </>
    )
}

export default StarshipList;