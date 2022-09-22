//ImageBackground serve para renderizar imagem como um background
import { ImageBackground } from 'react-native';

import backgroundImg from '../../assets/background-galaxy.png';

import { styles } from './styles';

interface Props {
  children: React.ReactNode;
}

export function Background({ children }: Props) {
  return (
    <ImageBackground
      source={backgroundImg}
      //vai memorizar a imagem padrão, vai acelerar o carregamento da imagem
      defaultSource={backgroundImg}
      style={styles.container}
    >
      {children}
    </ImageBackground>
  );
}