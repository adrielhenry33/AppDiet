import { Container,  Image, ProfileImage } from "./styles";

import VectorImg from '@assets/vector.png';
import Profile from '@assets/Design sem nome (4).png';

export function Header(){
    return (
        <Container>
            <Image source={VectorImg}/>
            <ProfileImage source={Profile}/>
        </Container>
    );
}