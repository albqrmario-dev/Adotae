import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { animais } from '@/data/animais';

export default function HomeScreen() {
  const router = useRouter();

  const totalDisponiveis = animais.filter((a) => !a.adotado).length;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollConteudo}
      showsVerticalScrollIndicator={false}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=800',
        }}
        style={styles.banner}
      />

      <View style={styles.conteudo}>
        <Image
          source={require('../../assets/images/adotae_logo_blue.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.subtitulo}>Conectando corações a quatro patas</Text>

        <Text style={styles.descricao}>
          Encontre cães e gatos resgatados que aguardam uma família amorosa.
          Adotar é um ato de amor e responsabilidade.
        </Text>

        <View style={styles.resumoContainer}>
          <View style={styles.resumoCard}>
            <Text style={styles.resumoNumero}>{animais.length}</Text>
            <Text style={styles.resumoTexto}>Cadastrados</Text>
          </View>
          <View style={styles.resumoCard}>
            <Text style={styles.resumoNumero}>{totalDisponiveis}</Text>
            <Text style={styles.resumoTexto}>Disponíveis</Text>
          </View>
        </View>

        <Pressable
          style={({ pressed }) => [styles.botao, pressed && styles.botaoPressionado]}
          onPress={() => router.push('/animais')}>
          <Text style={styles.botaoTexto}>Ver Animais para Adoção</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollConteudo: {
    flexGrow: 1,
    paddingBottom: 24,
  },
  banner: {
    width: '100%',
    height: 220,
  },
  conteudo: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 160,
    height: 70,
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 16,
    color: '#4B5563',
    marginTop: 4,
    textAlign: 'center',
  },
  descricao: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
    marginTop: 10,
  },
  resumoContainer: {
    flexDirection: 'row',
    gap: 16,
    marginVertical: 16,
  },
  resumoCard: {
    backgroundColor: '#EFF6FF',
    borderWidth: 1,
    borderColor: '#BFDBFE',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    minWidth: 110,
  },
  resumoNumero: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2F80ED',
  },
  resumoTexto: {
    fontSize: 13,
    color: '#0F3778',
    marginTop: 2,
    fontWeight: '500',
  },
  botao: {
    backgroundColor: '#2F80ED',
    width: '100%',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 2,
    marginTop: 8,
  },
  botaoPressionado: {
    opacity: 0.85,
  },
  botaoTexto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
