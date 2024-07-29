import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Plus } from 'phosphor-react-native';


export const Container = styled(TouchableOpacity) `
    
    flex-direction: row;

    margin-right: 24px;
    margin-left: 24px;

    border-radius: 3px;

    background-color: ${({theme}) => theme.COLORS.GRAY_2};

    align-items: center;
    justify-content: center;

    min-height: 50px;
    max-height: 50px;
    max-width: 327px;
`;

export const Text = styled.Text`
    font-size: ${({theme}) =>theme.FONT_SIZE.SM}px;
    font-family: ${({theme}) =>theme.FONT_FAMILY.REGULAR };
    color: ${({theme}) =>theme.COLORS.WHITE};
    font-weight: 700;
`;

export const Icon = styled(Plus).attrs(({theme})=>({
    color: theme.COLORS.WHITE,
}))`
    size: 18px;
    margin-right: 12px;
`;


