import { useEffect, useRef } from "react";
import anime from "animejs";

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    // Split text into spans
    const text = titleRef.current.innerText;
    titleRef.current.innerHTML = text
      .split("")
      .map((c) => `<span class="inline-block opacity-0">${c === ' ' ? '&nbsp;' : c}</span>`)
      .join("");

    // Letter animation
    anime.timeline()
      .add({
        targets: titleRef.current.children,
        opacity: [0, 1],
        translateY: [40, 0],
        rotateX: [-90, 0],
        delay: anime.stagger(30),
        easing: "easeOutExpo",
        duration: 1000,
      });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-light">
      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl font-serif font-bold tracking-tight text-dark"
        >
          AI & ML Engineer
        </h1>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
          Building intelligent systems, data-driven products,
          and research-grade solutions.
        </p>

        <a
          href="#projects"
          className="mt-10 inline-block bg-accent text-white font-bold text-lg px-8 py-3 rounded-full transition-all duration-300 hover:bg-teal-700 hover:scale-105 shadow-lg hover:shadow-xl"
        >
          View My Work
        </a>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center items-start p-1">
          <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
