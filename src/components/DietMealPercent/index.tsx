import { useEffect, useState } from "react";
import { Container, ContainerStyleProps, Icon, Subtitle, Percent } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    type?: ContainerStyleProps;
}

export function DietMealPercent({type = 'PRIMARY',...rest}: Props){
    
    const [percent, setPercent] = useState<string>('20');

    function percentCalc (){
        setPercent(`${percent}%`);
    }

    useEffect(() => {
        percentCalc();
    }, []);

    return(
        <Container  type={'PRIMARY'}  {...rest}>
            <Icon/>
            
            <Percent >
                {percent}
            </Percent>
            
            <Subtitle>
                das refeições dentro da dieta
            </Subtitle>


        </Container>
    );
}