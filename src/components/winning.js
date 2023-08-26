import React, { useEffect } from "react";

const Confetti = () => {
  useEffect(() => {
    const confetti = {
      maxCount: 150,
      speed: 2,
      frameInterval: 15,
      alpha: 1,
      gradient: false,
    };

    const colors = [
      "rgba(30,144,255,",
      "rgba(107,142,35,",
      "rgba(255,215,0,",
      "rgba(255,192,203,",
      "rgba(106,90,205,",
      "rgba(173,216,230,",
      "rgba(238,130,238,",
      "rgba(152,251,152,",
      "rgba(70,130,180,",
      "rgba(244,164,96,",
      "rgba(210,105,30,",
      "rgba(220,20,60,",
    ];

    let isRunning = false;
    let isPaused = false;
    let lastTimestamp = Date.now();
    let confettiList = [];
    let animationFrameId = null;
    let canvas = null;
    let ctx = null;

    function createConfetti(x, y) {
      const color =
        colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
      const color2 =
        colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
      const diameter = 10 * Math.random() + 5;
      const tilt = 10 * Math.random() - 10;
      const tiltAngleIncrement = 0.07 * Math.random() + 0.05;
      const tiltAngle = Math.random() * Math.PI;

      return {
        x,
        y,
        color,
        color2,
        diameter,
        tilt,
        tiltAngleIncrement,
        tiltAngle,
      };
    }
    let animationTimeoutId = null;

    function startConfetti() {
      if (isRunning) return;
      isRunning = true;
      isPaused = false;
      lastTimestamp = Date.now();
      animationFrameId = requestAnimationFrame(updateConfetti);
    }

    function stopConfetti() {
      if (!isRunning) return;
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
      clearCanvas();
    }

    function pauseConfetti() {
      isPaused = true;
    }

    function resumeConfetti() {
      isPaused = false;
      animationFrameId = requestAnimationFrame(updateConfetti);
    }

    function updateConfetti(timestamp) {
      if (!isRunning) return;

      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!isPaused) {
        updateConfettiPosition(deltaTime);
        drawConfetti();
      }

      animationFrameId = requestAnimationFrame(updateConfetti);
    }
    function startConfettiWithTimeout() {
      startConfetti();
      animationTimeoutId = setTimeout(stopConfetti, 3000000); // 3000 seconds = 3000000 milliseconds
    }
    function updateConfettiPosition(deltaTime) {
      const screenWidth = canvas.width;
      const screenHeight = canvas.height;
      const halfScreenWidth = screenWidth / 2;

      confettiList.forEach((confetti) => {
        if (!isPaused && confetti.y < -15) {
          confetti.y = screenHeight + 100;
        } else {
          confetti.tiltAngle += confetti.tiltAngleIncrement;
          confetti.x += Math.sin(confetti.tilt) - 0.5;
          confetti.y +=
            0.5 *
            (Math.cos(confetti.tilt) + confetti.diameter + confetti.speed);
          confetti.tilt = 15 * Math.sin(confetti.tiltAngle);
        }

        if (
          confetti.x > screenWidth + 20 ||
          confetti.x < -20 ||
          confetti.y > screenHeight
        ) {
          if (isRunning && confettiList.length <= confetti.maxCount) {
            confettiList.push(
              createConfetti(Math.random() * screenWidth, screenHeight)
            );
          } else {
            const index = confettiList.indexOf(confetti);
            if (index > -1) {
              confettiList.splice(index, 1);
            }
          }
        }
      });
    }

    function drawConfetti() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      confettiList.forEach((confetti) => {
        ctx.beginPath();
        ctx.lineWidth = confetti.diameter;
        const xWithTilt = confetti.x + confetti.tilt;
        const endX = xWithTilt + confetti.diameter / 2;
        const endY = confetti.y + confetti.tilt + confetti.diameter / 2;

        if (confetti.gradient) {
          const gradient = ctx.createLinearGradient(
            endX,
            confetti.y,
            xWithTilt,
            endY
          );
          gradient.addColorStop("0", confetti.color);
          gradient.addColorStop("1.0", confetti.color2);
          ctx.strokeStyle = gradient;
        } else {
          ctx.strokeStyle = confetti.color;
        }

        ctx.moveTo(endX, confetti.y);
        ctx.lineTo(xWithTilt, endY);
        ctx.stroke();
      });
    }

    function clearCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    // Create and initialize the canvas element
    canvas = document.createElement("canvas");
    canvas.setAttribute("id", "confetti-canvas");
    canvas.setAttribute(
      "style",
      "display:block;z-index:999999;pointer-events:none;position:fixed;top:0"
    );
    document.body.prepend(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext("2d");

    // Start confetti animation
    startConfetti();

    return () => {
      // Cleanup on component unmount
      clearTimeout(animationTimeoutId); // Clear the timeout if the component unmounts early
      stopConfetti();
      document.body.removeChild(canvas);
    };
  }, []);

  return <div className="content"></div>;
};

export default Confetti;
