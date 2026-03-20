const learningPath = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
];

export default function LearningPath() {
  return (
    <section className="learning-path" aria-labelledby="learning-path-title">
      <p className="learning-path-label">Start here</p>
      <h2 id="learning-path-title">
        Learning <span>Path</span>
      </h2>
      <p className="learning-path-copy">
        Follow this structured roadmap to move from core web basics to
        full-stack development.
      </p>

      <div className="learning-path-track">
        {/* mapping each step so the roadmap can be changed from one array */}
        {learningPath.map((step, index) => (
          <div
            className="learning-path-item"
            key={step}
            style={{ "--step-delay": `${0.1 + index * 0.2}s` }}
          >
            <div className="learning-path-step">{step}</div>
            {index < learningPath.length - 1 && (
              <span className="learning-path-arrow" aria-hidden="true">
                &rarr;
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
