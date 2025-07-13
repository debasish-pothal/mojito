import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

const Hero = () => {
  useGSAP(() => {
    const titleSplit = new SplitText(".title", {
      type: "chars, words",
    });

    const subtitleSplit = new SplitText(".subtitle", {
      type: "lines",
    });

    titleSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(titleSplit.chars, {
      yPercent: 100,
      stagger: 0.06,
      ease: "expo.out",
      duration: 1.8,
    });

    gsap.from(subtitleSplit.lines, {
      opacity: 0,
      yPercent: 100,
      stagger: 0.06,
      ease: "expo.out",
      duration: 1.8,
      delay: 0.5,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      })
      .to(
        ".left-leaf",
        {
          y: -200,
        },
        0
      )
      .to(
        ".right-leaf",
        {
          y: 200,
        },
        0
      );
  }, []);

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>
        <img
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool . Crisp . Classic</p>
              <p className="subtitle">
                Sip the sprit
                <br />
                of Summer
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>
              <a href="#cocktails">View Cocktails</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
