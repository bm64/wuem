import {useState, useRef, useEffect} from 'react';

const withSlideIn = Component => () => {
  const ref = useRef(null);
  const [shouldSlide, setShouldSlide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const offset = ref.current.getBoundingClientRect().top;
        const h = Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0,
        );
        setShouldSlide(offset - h < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={ref}>
      <Component
        style={{
          transition: 'transform 1s',
          transform: `translateX(${shouldSlide ? '0vw' : '100vw'})`,
        }}
      />
    </div>
  );
};

export default withSlideIn;
