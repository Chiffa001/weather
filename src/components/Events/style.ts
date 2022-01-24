import styled from 'styled-components';
import List from '../ui/List';

export const ListItem = styled.li`
    font-size: 1.2rem;
    font-style: italic;

    margin: 10px 0;
    color: #3d219c;
    text-align: center;
`;

export const EventsList = styled(List)`
    max-width: 300px;
`;
