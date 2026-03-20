export default function Creator() {
  return (
    <section className="creator-section">
      <div className="about-section-heading">
        <p className="about-section-kicker">Behind the platform</p>
        <h2>Meet the <span>Creator</span></h2>
        <p>The person shaping Webs_Dev is focused on making web development feel structured, practical, and beginner-friendly.</p>
      </div>

      <div className="creator-container">
        <div className="creator-image">
          <div className="creator-image__frame">
            <img src="/images/profile.jpg" alt="Sri Vikas" />
          </div>
          <div className="creator-highlight">
            <strong>Webs_Dev</strong>
            <span>Built to turn scattered tutorials into a clear roadmap.</span>
          </div>
        </div>

        <div className="creator-content">
          <h3>Sri Vikas</h3>
          <p className="creator-role">Frontend Developer</p>

          <p>
            I created Webs_Dev to simplify the journey of learning web
            development for beginners. Many learners struggle with scattered
            tutorials and unclear roadmaps. This platform focuses on structured
            learning paths and practical projects to help developers build real
            skills step by step.
          </p>

          <div className="creator-points">
            {/* short highlights about the platform approach */}
            <div className="creator-point">
              <strong>Clear Roadmaps</strong>
              <span>Lessons are arranged so beginners know what to learn next.</span>
            </div>
            <div className="creator-point">
              <strong>Project-Based Learning</strong>
              <span>Concepts are reinforced through practical builds, not just theory.</span>
            </div>
            <div className="creator-point">
              <strong>Beginner Focus</strong>
              <span>Explanations aim to reduce confusion and make progress feel manageable.</span>
            </div>
          </div>

          <div className="creator-links">
            <a href="https://github.com/Skywalker003" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/srivikas-sr/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}
