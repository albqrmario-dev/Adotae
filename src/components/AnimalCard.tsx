import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Animal } from '@/data/animais';
import StatusBadge from './StatusBadge';

type AnimalCardProps = {
  animal: Animal;
  onPress: () => void;
};

export default function AnimalCard({ animal, onPress }: AnimalCardProps) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image source={animal.imagem} style={styles.imagem} />
      <View style={styles.info}>
        <View style={styles.headerLinha}>
          <Text style={styles.nome}>{animal.nome}</Text>
          <StatusBadge adotado={animal.adotado} />
        </View>
        <Text style={styles.detalhes}>
          {animal.especie} • {animal.idade}
        </Text>
        <Text style={styles.descricao} numberOfLines={2}>
          {animal.descricao}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    elevation: 2,
  },
  imagem: {
    width: '100%',
    height: 180,
  },
  info: {
    padding: 14,
  },
  headerLinha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  detalhes: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 6,
  },
  descricao: {
    fontSize: 13,
    color: '#4B5563',
    lineHeight: 18,
  },
});
