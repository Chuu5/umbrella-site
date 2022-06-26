function cards({name, image}) {

    return (
        <div className="card">
            <img src={image} alt="" />
            <h3>{name}</h3>
        </div>
    ) 
}

export default cards