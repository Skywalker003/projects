import "./StatsBar.css"

export default function StatsBar() {
    return (
        <div className="stats-bar">
            <div className="stats-bar__item">
                <div className="stats-bar__number">2019</div>
                <div className="stats-bar__label">YEAR FOUNDED</div>
            </div>
            <div className="stats-bar__item">
                <div className="stats-bar__number">50+</div>
                <div className="stats-bar__label">SOLUTIONS OFFERED</div>
            </div>
            <div className="stats-bar__item">
                <div className="stats-bar__number">25+</div>
                <div className="stats-bar__label">BUSINESS DOMAINS</div>
            </div>
            <div className="stats-bar__item">
                <div className="stats-bar__number">20+</div>
                <div className="stats-bar__label">ASSOCIATED PROFESSIONALS</div>
            </div>
        </div>
    )
}