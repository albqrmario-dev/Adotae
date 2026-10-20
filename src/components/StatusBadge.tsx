import { StyleSheet, Text, View } from 'react-native';

type StatusBadgeProps = {
  adotado: boolean;
};

export default function StatusBadge({ adotado }: StatusBadgeProps) {
  return (
    <View style={[styles.badge, adotado ? styles.badgeAdotado : styles.badgeDisponivel]}>
      <Text style={[styles.texto, adotado ? styles.textoAdotado : styles.textoDisponivel]}>
        {adotado ? 'Adotado' : 'Disponível'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  badgeDisponivel: {
    backgroundColor: '#DBEAFE',
  },
  badgeAdotado: {
    backgroundColor: '#F3F4F6',
  },
  texto: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  textoDisponivel: {
    color: '#0F3778',
  },
  textoAdotado: {
    color: '#4B5563',
  },
});
