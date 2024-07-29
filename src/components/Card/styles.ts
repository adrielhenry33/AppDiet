import styled from 'styled-components/native';


export const ContainerData = styled.View`
    margin: 32px 24px 8px 24px;
    background-color: ${({theme}) => theme.COLORS.GRAY_7};
`;

export const Container = styled.View`
    
    margin-top: 8px;
    width: 327px;
    height: 49px;

    border-radius: 6px;
    border-color: ${({theme}) => theme.COLORS.GRAY_5};
    border-width: 2px;

    flex-direction: row;

    align-items: center;
`;

export const Time = styled.Text `
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: ${({theme}) =>theme.FONT_SIZE.SM}px;
    padding-left: 12px;
`;

export const VerticalLine = styled.View`
    background-color: ${({theme}) => theme.COLORS.GRAY_5};
    
    height: 14px ;
    width: 2px ;

    margin-left: 7px ;

`;

export const Text = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    
    color: ${({theme}) =>theme.COLORS.GRAY_2};

    padding-left: 6px;
`;
export const Data = styled.Text`
    font-size: ${({theme}) =>theme.FONT_SIZE.LG}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`;
