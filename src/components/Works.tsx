import React, { useEffect } from "react";

// Extend the Window interface to include instgrm
declare global {
  interface Window {
    instgrm: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

const Works: React.FC = () => {
  useEffect(() => {
    const loadInstagramEmbed = () => {
      const script = document.createElement("script");
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    };

    window.instgrm?.Embeds?.process();
    loadInstagramEmbed();
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
              <div className="video-container">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink="https://www.instagram.com/reel/DGAf2eNIX0T/?utm_source=ig_embed&amp;utm_campaign=loading"
                  data-instgrm-version="14"
                  data-instgrm-captioned
                  style={{ background: "transparent" }}
                ></blockquote>
              </div>
              <p className="caption">
                In the spirit of the "month of love" what's something you
                inherited from the people before you that you're learning to
                love?
              </p>
            </div>
            <div className="gallery-item">
              <div className="video-container">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink="https://www.instagram.com/reel/DFPeSVfSgXc/?utm_source=ig_embed&amp;utm_campaign=loading"
                  data-instgrm-version="14"
                  data-instgrm-captioned
                  style={{ background: "transparent" }}
                ></blockquote>
              </div>
              <p className="caption">
                Rise Africa: "Does this make you feel uncomfortable?" series.
              </p>
            </div>
            <div className="gallery-item">
              <div className="video-container">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink="https://www.instagram.com/reel/Cydv3a5ubUa/?utm_source=ig_embed&amp;utm_campaign=loading"
                  data-instgrm-version="14"
                  data-instgrm-captioned
                  style={{ background: "transparent" }}
                ></blockquote>
              </div>
              <p className="caption">World Poetry Slam</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Works;
