import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    //para os cartões não ficarem grudados
    marginRight: 24,
  },
  //capa
  cover: {
    width: 240,
    height: 320,
    justifyContent: 'flex-end',
    borderRadius: 8,
    //para garantir que o conteúdo não ultrapasse os limites do cartão
    overflow: 'hidden',
  },
  footer: {
    width: '100%',
    height: 120,
    padding: 16,
    justifyContent: 'flex-end'
  },
  name: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD
  },
  ads: {
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  }
});