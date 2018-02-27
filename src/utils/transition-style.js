const getTransitionStyles = timeout => ({
  entering: {
    transform: `translateY(100%)`,
  },
  entered: {
    transition: `transform ${timeout}ms ease-in-out`,
    transform: `translateY(0)`,
  },
  exiting: {
    transition: `transform ${timeout}ms ease-in-out`,
    transform: `translateY(100%)`,
  },
});

const getTransitionStyle = ({ timeout, status }) => getTransitionStyles(timeout)[status];

export default getTransitionStyle;
