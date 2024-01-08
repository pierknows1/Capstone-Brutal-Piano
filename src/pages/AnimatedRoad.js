import React, { useEffect } from 'react';
import './AnimatedRoad.css';

const AnimatedRoad = () => {
  useEffect(() => {
    let dist = 1;
    let rotation = 0;
    let direction = 1;

    const frameCallback = function () {
      const lineGap = 6;
      const lineSize = 6;
      dist -= 1;
      rotation += direction;

      if (dist >= lineGap + lineSize) {
        dist = lineSize;
        const midRoadCont = document.getElementById("mid-road-cont");
        const newMidRoad = document.createElement("div");
        newMidRoad.className = "mid-road";
        midRoadCont.prepend(newMidRoad);
        midRoadCont.lastElementChild.remove();
      } else {
        const midRoad = document.querySelectorAll(".mid-road")[0];
        midRoad.style.marginTop = dist + "px";
        midRoad.style.transform = `rotate(${rotation}deg)`;
      }
      requestAnimationFrame(frameCallback);
    };
    requestAnimationFrame(frameCallback);
  }, []);

  return (
    <div className="canvas">
      <div className="road">
        <div className="mid-road-container" id="mid-road-cont">
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>
        <div className="mid-road"></div>

        </div>
      </div>
    </div>
  );
};

export default AnimatedRoad;
