import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import {ArrowUpRight } from 'phosphor-react-native';

export type ContainerStyleProps = 'PRIMARY'|'SECUNDARY';

type Props ={
    type: ContainerStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
    
    width: ${(Props) => (Props.type === 'PRIMARY'? '327px':  '100%')} ;
    height:  ${(Props) => (Props.type === 'PRIMARY'? '102px':  '168px')} ;
    
    background-color: ${({theme, type}) => type === 'PRIMARY'? theme.COLORS.GREEN_LIGH : theme.COLORS.RED_LIGHT} ;
    border-radius: 8px;
    margin-right:  ${(Props) => (Props.type === 'PRIMARY'? '24px': '0')};
    margin-left:  ${(Props) => (Props.type === 'PRIMARY'? '24px':  0)};

`;

export const Icon = styled(ArrowUpRight)`
    color: ${({ theme }) => theme.COLORS.GREEN_DARK};
   
    height: 24px;
    width: 24px;
   
    margin-left: 295px;
    margin-top: 8px;
    padding-right: 8px;

`;

export const Percent = styled.Text `
    font-size: ${({theme}) => theme.FONT_SIZE.XXL}px;
    font-family: ${({theme}) =>theme.FONT_FAMILY.BOLD };
    
    text-align: center;
    margin-top:-12px;
`;

export const Subtitle = styled.Text `
    font-size: ${({theme}) =>theme.FONT_SIZE.SM}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    color: ${({theme}) => theme.COLORS.GRAY_2};
    font-weight: 400;
    text-align: center;
`;

