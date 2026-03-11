export default function Project({title, image, description, tech }){
    return(
        <div className="card">
            <img className="inner-img" src={image} alt="img" />
              <div className="inner-text">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div>
                    {tech.map((t, index) =>(
                        <span><button key={index} className="enroll-btn">{t}</button></span>
                    ))}
                  </div>
              </div>
        </div>
    )
}