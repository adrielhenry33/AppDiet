import styled from "styled-components/native";
import { SafeAreaView } from "react-native";


export const Container = styled(SafeAreaView)`
    flex-direction: row;
    margin-bottom: 31px;
`;

export const Image = styled.Image`
    width: 73.03px;
    height: 34.11px; 

    margin-left: 24px;
    margin-top: 65.89px;

`;

export const ProfileImage = styled.Image`
    width: 40px;
    height: 40px;

    margin-top: 64px;
    margin-right: 24px;
    margin-left: 215px;

    border-radius: 30px;
    border-width: 2px;
    border-color: ${({theme}) => theme.COLORS.GRAY_2};
`;
