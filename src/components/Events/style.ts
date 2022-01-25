import styled from 'styled-components';
import List from '../ui/List';

export const ListItem = styled.li`
    font-size: 1.2rem;
    font-style: italic;

    margin: 10px 0;
    color: #3d219c;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const EventsList = styled(List)`
    max-width: 300px;
`;

export const EventTime = styled.span`
    color: white;
    display: inline-block;
    border-radius: 20px;
    background-color: #4e4f4f;
    padding: 5px 10px;
`;

export const EventTask = styled.span`
    color: white;
    margin-left: 20px;
    text-decoration: underline;
`;
