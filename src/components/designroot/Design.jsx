import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import './design.scss';
gsap.registerPlugin(ScrollTrigger);

const wrapTextInSpans = (element) => {
  const text = element.textContent;
  element.innerHTML = text
    .split('')
    .map((char) =>
      char === ' '
        ? '&nbsp;'
        : `<span class="letter" style="display:inline-block;opacity:0;">${char}</span>`
    )
    .join('');
};

const getSortedLetters = (text) => {
  return text
    .replace(/\s+/g, '')
    .split('')
    .sort((a, b) => a.localeCompare(b));
};

const Design = () => {
  const cardRefs = useRef([]);
  const headerRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  const addHeaderRefs = (el) => {
    if (el && !headerRefs.current.includes(el)) {
      headerRefs.current.push(el);
    }
  };

  useGSAP(() => {
    const [h2, p] = headerRefs.current;

    gsap.fromTo(
      h2,
      { opacity: 0, x: -200 },
      {
        duration: 1.5,
        opacity: 1,
        x: 0,
        ease: 'power3.out',
        scrollTrigger: {
          scrub: 2,
          trigger: h2,
          start: 'center center',
          end: 'bottom center',
        },
      }
    );

    gsap.fromTo(
      p,
      { opacity: 0, x: 200 },
      {
        duration: 1.5,
        opacity: 1,
        x: 0,
        ease: 'power3.out',
        scrollTrigger: {
          scrub: 2,
          trigger: p,
          start: 'center center',
          end: 'bottom center',
        },
      }
    );

    cardRefs.current.forEach((card) => {
      const h5 = card.querySelector('h5');
      const paragraphs = card.querySelectorAll('p');

      wrapTextInSpans(h5);

      const text = h5.textContent.replace(/\s+/g, '');
      const sortedLetters = getSortedLetters(text);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          scrub: 2,
          start: 'center center',
          end: 'bottom center',
          toggleActions: 'play none none none',
        },
      });

      sortedLetters.forEach((letter, index) => {
        const targetSpans = Array.from(h5.querySelectorAll('.letter')).filter(
          (span) => span.textContent === letter
        );
        targetSpans.forEach((targetSpan, spanIndex) => {
          tl.to(
            targetSpan,
            {
              opacity: 1,
              duration: 0.5,
              ease: 'power3.out',
            },
            index * 0.05 + spanIndex * 0.1
          );
        });
      });

      gsap.set(paragraphs, { opacity: 1 });

      gsap.from(paragraphs, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.3,
        scrollTrigger: {
          scrub: 2,
          trigger: card,
          start: 'center center',
          end: 'bottom center',
          toggleActions: 'play none none none',
        },
      });
    });
  }, cardRefs.current);

  return (
    <div>
      <div className="header-section">
        <h2 ref={addHeaderRefs}>WELCOME TO DESIGN ROOTS</h2>
        <p ref={addHeaderRefs}>One Stop Digital Manufacturing Solutions</p>
      </div>
      <div className="design-container">
        <div className="card" ref={addToRefs}>
          <div className="icon icon-1"></div>
          <h5>ADITIVE MANUFACTURING</h5>
          <p>FDM (Fused Deposition Modeling)</p>
          <p>SLS (Selective Laser Sintering)</p>
          <p>SLA (Stereolithography)</p>
          <p>DMLS (Direct Metal Laser Sintering)</p>
        </div>
        <div className="card highlighted" ref={addToRefs}>
          <div className="icon icon-2"></div>
          <h5>PROTOTYPING</h5>
          <p>3D Scanning Service</p>
          <p>Reverse Engineering</p>
          <p>3D Scan & Inspection Service</p>
          <p>DICOM to STL</p>
        </div>
        <div className="card lighted" ref={addToRefs}>
          <div className="icon icon-3"></div>
          <h5>VACUUM CASTING</h5>
          <p>Injection Moulding</p>
          <p>3D Printed Sand Casting Pattern</p>
          <p>3D Printed Investment Casting Wax Pattern</p>
          <p>Batch Production</p>
        </div>
      </div>
    </div>
  );
};

export default Design;
