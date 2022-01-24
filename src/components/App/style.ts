import styled from 'styled-components';
import Flex from '../ui/Flex';

import background from '../../assets/img/background.jpg';

const Wrapper = styled(Flex)`
    min-height: 100vh;
    background: center / cover url(${background});
`;

export default Wrapper;
