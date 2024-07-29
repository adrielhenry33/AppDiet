import { Container, Icon, Text } from "./styles";
type Props ={
    title: string;
}

export function Button ({title}: Props){
    return(
        <Container>
            <Icon/>
            <Text>
                {title}
            </Text>
        </Container>
    );
}