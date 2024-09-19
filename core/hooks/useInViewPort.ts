import { useEffect, useMemo, useRef, useState } from "react";

/**
 * @param ref Target element
 * @returns { isInView, timesInView }
 */
const THRESHOLD = 0.75;
const OBSERVATION_TIMEOUT = 1500;

const useIsInViewport = ({ ref }: { ref: React.RefObject<Element> }) => {
  const [isInView, setIsInView] = useState(false);
  const timesInView = useRef(0);
  let observationTimeout: NodeJS.Timeout;
  const observer = useMemo(() => {
    return new IntersectionObserver(
      (entries) => {
        const { intersectionRatio, isIntersecting } = entries[0];
        if (isIntersecting && intersectionRatio >= THRESHOLD) {
          timesInView.current += 1;
        }
        setIsInView(isIntersecting);
      },
      { threshold: THRESHOLD }
    );
  }, []);

  const reset = () => {
    setIsInView(false);
    timesInView.current = 0;
  };

  useEffect(() => {
    observationTimeout = setTimeout(() => {
      if (ref.current && observer) {
        observer.observe(ref.current);
      }
    }, OBSERVATION_TIMEOUT);

    return () => {
      if (ref.current && observer) {
        observer.unobserve(ref.current);
      }
      if (observationTimeout) {
        clearTimeout(observationTimeout);
      }
    };
  }, []);
  return {
    isInView,
    timesInView: timesInView.current,
    isViewed: !!timesInView.current,
    reset,
  };
};

export default useIsInViewport;
