import React from "react";

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <main>
        <div className="home-content">
          <div className="left-section">
            <div className="profile-circle-wrapper">
              <div className="profile-circle">
                <img
                  src="/hero.png"
                  alt="Deborah Johnson"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="circle-ring"></div>
            </div>
            <div className="profile-info">
              <h2>DEBORAH JOHNSON</h2>
              <p className="subtitle">poet | art | life</p>
            </div>
          </div>

          <div className="right-section">
            <h1>HOME</h1>
            <div className="links-section">
              <div
                className="link-item"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/reel/DFItyVCoOBa/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA",
                    "_blank"
                  )
                }
              >
                <div className="arrow-circle">
                  <span className="arrow">→</span>
                </div>
                <span className="text">Rise Africa</span>
              </div>
              <div
                className="link-item"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/reel/Cydv3a5ubUa/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA",
                    "_blank"
                  )
                }
              >
                <div className="arrow-circle">
                  <span className="arrow">→</span>
                </div>
                <span className="text">World Poetry Slam</span>
              </div>
              <div
                className="link-item"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/reel/Cqa4AA4D25H/?igshid=MzRlODBiNWFlZA%3D%3D",
                    "_blank"
                  )
                }
              >
                <div className="arrow-circle">
                  <span className="arrow">→</span>
                </div>
                <span className="text">LipFest Winner</span>
              </div>
              <div
                className="link-item"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/reel/C4QqNPBINgA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA",
                    "_blank"
                  )
                }
              >
                <div className="arrow-circle">
                  <span className="arrow">→</span>
                </div>
                <span className="text">International Womens Day</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
