import styled from 'styled-components';
import Flex from '../ui/Flex';

import background from '../../assets/img/weather-background.jpg';

const Wrapper = styled(Flex)`
    min-height: 100vh;
    position: relative;

    &:before {
        content: '';
        background: center / cover no-repeat url(${background});
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: -1;
        filter: blur(10px);
    }


`;

export default Wrapper;
