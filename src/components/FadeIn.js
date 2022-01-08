import { animated, useTransition } from '@react-spring/web'

const FadeIn = ({ isVisible, children }) => {
    const transitions = useTransition(isVisible, {
        from: { opacity: 0, maxHeight: '0px' },
        enter: { opacity: 1, maxHeight: '1000px' },
        leave: { opacity: 0, maxHeight: '0px' },
        reverse: isVisible,
      })

    return transitions(
        (styles, item) => item && <animated.div style={styles}>{children}</animated.div>
    );
};

export default FadeIn;