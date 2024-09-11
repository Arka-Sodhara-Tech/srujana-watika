import * as React from 'react';
import { Avatar, Card, IconButton, Text } from 'react-native-paper';
import { ScrollView, StyleSheet, View, Dimensions } from 'react-native';

export default function Gallery() {
  const screenWidth = Dimensions.get('window').width;
  const isLaptop = screenWidth >= 1024;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={isLaptop ? styles.laptopGrid : styles.mobileGrid}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Card key={index} style={[styles.card, isLaptop ? styles.laptopCard : styles.mobileCard]}>
            <Card.Title
              title={`Card Title ${index + 1}`}
              subtitle="Card Subtitle"
              left={(props) => <Avatar.Icon {...props} icon="folder" />}
              right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
            />
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={styles.image} />
            <Card.Content>
              <Text variant="titleLarge" style={styles.title}>Card title {index + 1}</Text>
              <Text variant="bodyMedium" style={styles.content}>Card content</Text>
            </Card.Content>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  laptopGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  mobileGrid: {
    flexDirection: 'column',
    width: '100%',
  },
  card: {
    marginBottom: 15,
  },
  laptopCard: {
    flexBasis: '48%',
    marginHorizontal: 5,
  },
  mobileCard: {
    width: '100%',
    marginHorizontal: 0,
  },
  image: {
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    fontWeight: 'bold',
  },
  content: {
    marginTop: 5,
  },
});
