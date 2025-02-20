
function StarshipCard() {
    return (
        <>

            <h4>{props.starship.name}</h4>
            <p>class: {props.starship.starship_class}</p>
            <p>manufacturer{props.starship.manufacturer}</p>
            <p>model:{props.starship.model}</p>
        </>
    )
}

export default StarshipCard;