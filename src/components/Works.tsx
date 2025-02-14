import React, { useEffect } from "react";

const Works: React.FC = () => {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="works-page">
      <main>
        <div className="works-content">
          <h1>WORKS</h1>
          <div className="swipe-indicator">
            <div className="arrow-circle2">
              <span className="arrow">→</span>
            </div>
            <span>Swipe for more</span>
          </div>

          <div className="gallery">
            <div className="gallery-item">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/reel/DGAf2eNIX0T/?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="14"
              ></blockquote>
              <p className="caption">
                In the spirit of the "month of love" what's something you
                inherited from the people before you that you're learning to
                love?
              </p>
            </div>
            <div className="gallery-item">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/reel/DFVGvmGy8FY/?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="14"
              ></blockquote>
              <p className="caption">
                Rise Africa: "Does this make you feel uncomfortable?" series.
              </p>
            </div>
            <div className="gallery-item">
              <img src="/deb3.png" alt="Performance at event" />
              <p className="caption">Pan-Africanism</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Works;
