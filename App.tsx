import { StatusBar } from 'react-native';
import { ThemeProvider} from 'styled-components/native';

import { useFonts, NunitoSans_700Bold, NunitoSans_400Regular } from '@expo-google-fonts/nunito-sans';

import theme from 'src/theme';

import { DietView } from 'screens/DietView';
import { Loading }  from 'src/components/Loading';


export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_700Bold, NunitoSans_400Regular });

  return (
    <ThemeProvider theme ={theme}>
      <StatusBar
        barStyle = 'dark-content'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded? <DietView/>: <Loading/>}
    </ThemeProvider>
  );
}
