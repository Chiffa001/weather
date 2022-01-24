import styled from 'styled-components';

interface IFlexProps {
    readonly justify?: string;
    readonly direction?: string;
    readonly margin?: string;
    readonly align?: string;
    readonly wrap?: string;
}

const Flex = styled.div<IFlexProps>`
    display: flex;
    justify-content: ${({ justify }) => justify || 'stretch'};
    flex-direction: ${({ direction }) => direction || 'row'};
    flex-wrap: ${({ wrap }) => wrap || 'nowrap'};
    margin: ${({ margin }) => margin || '0'};
    align-items: ${({ align }) => align || 'stretch'};
`;

export default Flex;
