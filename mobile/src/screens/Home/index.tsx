//rnbc
import { View, Image, FlatList } from 'react-native';

import logoImg from '../../assets/logo-nlw-esports.png'
import { GameCard } from '../../components/GameCard';
import { Heading } from '../../components/Heading';

import { GAMES } from '../../utils/games'

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={logoImg}
        style={styles.logo}
      />

      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que você deseja jogar..."
      />

      <FlatList
        data={GAMES}
        //boa pratica. serve para dizer qual dado vai ser utilizado como chave
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <GameCard
            data={item}
          />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}
      />

      
    </View>
  );
}