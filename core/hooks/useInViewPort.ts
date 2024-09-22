import { useEffect, useMemo, useRef, useState } from "react";

/**
 * @param ref Target element
 * @returns { isInView, reset }
 */
const THRESHOLD = 0.75;
const OBSERVATION_TIMEOUT = 1500;

const useIsInViewport = ({ ref }: { ref: React.RefObject<Element> }) => {
  const [isInView, setIsInView] = useState(false);
  let observationTimeout: NodeJS.Timeout;
  const observer = useMemo(() => {
    return new IntersectionObserver(
      (entries) => {
        const { intersectionRatio, isIntersecting } = entries[0];

        setIsInView(isIntersecting);
      },
      { threshold: THRESHOLD }
    );
  }, []);

  const reset = () => {
    setIsInView(false);
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
    reset,
  };
};

export default useIsInViewport;
