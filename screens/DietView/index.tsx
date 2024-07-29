import { Container, Title } from './styles';

import { Header } from "@components/Header";
import { DietMealPercent } from "@components/DietMealPercent";
import { Button } from "@components/Button";
import { Card } from "@components/Card";

export function DietView (){

    return(
       <Container>
            <Header/>
            <DietMealPercent/>
            
            <Title>
                Refeições
            </Title>

            <Button
                title="Nova refeição"
            />

            <Card 
                data = "22.06.23" 
                time = "17:34" 
                title = "X-tudo"
            />

            <Card 
                data = "22.06.23" 
                time = "17:34" 
                title = "X-tudo"
            />

       </Container> 
       
    );
}