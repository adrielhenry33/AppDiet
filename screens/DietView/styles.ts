import { SafeAreaView } from "react-native";
import styled from "styled-components/native";


export const Container = styled(SafeAreaView) `
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_7};
    
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;

    margin: 20px 282px 6px 26px;    
`;

