import styled from 'styled-components';
import Flex from '../ui/Flex';

import weatherBackground from '../../assets/img/weather-background.jpg';

export const Container = styled.article`
    width: 80%;
    background-color: rgba(162, 164, 168, 0.8);
    background: center/ cover no-repeat url(${weatherBackground});

    @media(max-width: 1800px) {
        width: 90%;
    }

    @media(max-width: 600px) {
        width: 100%;
    }
`;

export const Current = styled(Flex)`
    min-height: 260px;
`;
