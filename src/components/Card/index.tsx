import { Container, ContainerData, Text, Time, VerticalLine, Data} from './styles';

import { useState } from 'react';

type Props = {
    title : string;
    time: string;
    data: string
}

export function Card({title, time, data, ...rest}: Props) {

    return(
        
        <ContainerData>
            <Data>
                {data}
            </Data>

            <Container {...rest}>
                <Time>
                    {time}
                </Time>

                <VerticalLine/>

                <Text>
                    {title}
                </Text>

            </Container>
        </ContainerData>
    );
}