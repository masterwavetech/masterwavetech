import React, { useEffect, useState } from "react";
import "./GoToTopStyled.css";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      <section className="wrapper">
        {isVisible && (
          <div className="top-btn" onClick={goToBtn}>
            <i className="ri-arrow-up-s-line top-btn--icon"></i>
          </div>
        )}
      </section>
    </>
  );
};

export default GoToTop;
