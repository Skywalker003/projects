import "./StatsBar.css"

export default function StatsBar() {
    return (
        <div className="stats-bar">
            <div className="stats-bar_item">
                <div className="stats-bar_number">2019</div>
                <div className="stats-bar_label">YEAR FOUNDED</div>
            </div>
            <div className="stats-bar_item">
                <div className="stats-bar_number">50+</div>
                <div className="stats-bar_label">SOLUTIONS OFFERED</div>
            </div>
            <div className="stats-bar_item">
                <div className="stats-bar_number">25+</div>
                <div className="stats-bar_label">BUSINESS DOMAINS</div>
            </div>
            <div className="stats-bar_item">
                <div className="stats-bar_number">20+</div>
                <div className="stats-bar_label">ASSOCIATED PROFESSIONALS</div>
            </div>
        </div>
    )
}