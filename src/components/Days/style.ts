import styled from 'styled-components';
import List from '../ui/List';

export const DayList = styled(List)`
    width: 100%;
    background-color: rgba(1, 7, 31, 0.9);
    padding: 20px;

    @media(max-width: 600px) {
        justify-content: space-around;
    }
`;
