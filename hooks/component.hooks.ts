import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import SplitText from 'gsap/dist/SplitText';

const useComponentUtils = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);
  }, []);

  const homeAnim = (homeRef:any,textTitle:any) => {
    let textAnimation = gsap.timeline();
    let mySplitText = new SplitText(textTitle.current, { type: "lines" });
    let lines = mySplitText.lines
    let ctx = gsap.context(() => {
      textAnimation.from(lines, {
        opacity: 0,
        y: -50,
        stagger: {
          each: 0.07
        }
      });

    }, homeRef);

    return () => ctx.revert();
  }

  // const useIsSsr = () => {
  //   // we always start off in "SSR mode", to ensure our initial browser render
  //   // matches the SSR render
  //   const [isSsr, setIsSsr] = useState(true);
  
  //   useEffect(() => {
  //     // `useEffect` never runs on the server, so we must be on the client if
  //     // we hit this block
  //     setIsSsr(false);
  //   }, []);
  
  //   return isSsr;
  // }  
  return { homeAnim }
}

export default useComponentUtils;