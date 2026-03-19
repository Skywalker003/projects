export default function Project({id ,title, image, description, tech }){
    return(
        <div className="card">
            <img className="inner-img" src={image} alt="img" />
              <div className="inner-text">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div>
                    {tech.map((t) =>(
                        <span key={`${id}-${t}`}>
                            <button className="enroll-btn">{t}</button>
                        </span>
                    ))}
                  </div>
              </div>
        </div>
    )
}