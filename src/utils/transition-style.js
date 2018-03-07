const getTransitionStyles = timeout => ({
  entering: {
    opacity: 1,
    transform: `translateY(100%)`,
  },
  entered: {
    transition: `transform ${timeout}ms ease-in-out`,
    transform: `translateY(0)`,
  },
  exiting: {
    transition: `transform ${timeout}ms ease-in-out, opacity ${timeout}ms`,
    opacity: 0,
    transform: `translateY(100%)`,
  },
});

const getTransitionStyle = ({ timeout, status }) => getTransitionStyles(timeout)[status];

export default getTransitionStyle;
