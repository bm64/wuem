import {useRef} from 'react';

import useOnScroll from '../hooks/useOnScroll';

const withSlideIn = (Component, duration = 1000) => props => {
  const ref = useRef(null);
  const shouldSlide = useOnScroll(ref);

  return (
    <div
      style={{
        transition: `transform ${(duration / 1000.0).toFixed(2)}s`,
        transform: `translateX(${shouldSlide ? '0vw' : '100vw'})`,
      }}
      ref={ref}>
      <Component {...props} />
    </div>
  );
};

export const withLeftSlideIn = (Component, duration = 1000) => props => {
  const ref = useRef(null);
  const shouldSlide = useOnScroll(ref);

  return (
    <div
      style={{
        transition: `transform ${(duration / 1000.0).toFixed(2)}s`,
        transform: `translateX(${shouldSlide ? '0vw' : '-100vw'})`,
      }}
      ref={ref}>
      <Component {...props} />
    </div>
  );
};

export const withRightSlideIn = (Component, duration = 1000) => props => {
  const ref = useRef(null);
  const shouldSlide = useOnScroll(ref);

  return (
    <div
      style={{
        transition: `transform ${(duration / 1000.0).toFixed(2)}s`,
        transform: `translateX(${shouldSlide ? '0vw' : '100vw'})`,
      }}
      ref={ref}>
      <Component {...props} />
    </div>
  );
};

export default withSlideIn;
