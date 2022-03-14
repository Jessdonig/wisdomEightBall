import {StatusBar} from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import moment from 'moment';
// import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';

export default function App() {
  const [answer, setAnswer] = useState('Ask a question to receive my wisdom.');
  const [findOutWhy, setWhy] = useState(false);
  const phrase1 =
    '\n"Never let a wishbone grow where a backbone should be."\n-Clementine Paddleford';
  const phrase2 =
    '\n“Anxiety is a thin stream of fear trickling through the mind. If encouraged, it cuts a channel into which all other thoughts are drained."\n- Arthur Somers Roche';

  const phrase3 =
    '\n“Half the worry in the world is caused by people trying to make decisions before they have sufficient knowledge on which to base a decision.”\n- Herbert E. Hawkesphrase';
  const phrase4 =
    "\n“If a problem is fixable, if a situation is such that you can do something about it, then there is no need to worry. If it's not fixable, then there is no help in worrying. There is no benefit in worrying whatsoever.”\n- The Dalai Lama";
  const phrase5 =
    "\n“Why worry? If you've done the very best you can, worrying won't make it any better.”\n-Walt Disney\n";

  const phrase6 =
    '“There is a great difference between worry and concern. A worried person sees a problem, and a concerned person solves a problem.”- Harold Stephens.';

  const pickPhrase = () => {
    let randomNumber = Math.floor(Math.random() * 6);
    let chosenPhrase;
    switch (randomNumber) {
      case 0:
        chosenPhrase = phrase1;
        break;
      case 1:
        chosenPhrase = phrase2;
        break;
      case 2:
        chosenPhrase = phrase3;
        break;
      case 3:
        chosenPhrase = phrase4;
        break;
      case 4:
        chosenPhrase = phrase5;
        break;
      case 5:
        chosenPhrase = phrase6;
        break;
      default:
        return phrase1;
    }
    return chosenPhrase;
  };

  console.log(answer);
  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Ask me a question about the future.</Text>
      <TextInput
        style={styles.input}
        // multiline={true}
        placeholder="What do you want to know?"
        // onChangeText={newText => setText(newText)}
        // defaultValue={text}
      />
      <Button
        // onPress={onPressLearnMore}
        title="get the answer"
        onPress={() => setAnswer(pickPhrase())}
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Image
        style={styles.image}
        source={
          answer === 'Ask a question to receive my wisdom.'
            ? {
                uri: 'https://www.horoscope.com/images-US/games/game-magic-8-ball-no-text.png',
              }
            : {
                uri: 'http://www.joiedevivre.net/joieweb/sell/classictoys/magic8ball600x600.gif',
              }
        }
      />
      <Text style={styles.title}>Eight ball says:</Text>
      <Text style={styles.answer}>{answer}</Text>
      <Button
        title={
          answer !== 'Ask a question to receive my wisdom.'
            ? 'WTF is up with these answers??? I just want to know my future!! 🤬'
            : ''
        }
        onPress={() => setWhy(!findOutWhy)}
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Text style={styles.explanation}>
        {findOutWhy === true
          ? 'If you are using a magic eight ball on a mobile device to attempt to predict the future, it is time to adjust your strategy. Instead of worrying about whether the universe will magically give you what you want, set aside some time today to practice a skill that will get you closer to your goal.'
          : ''}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  input: {
    borderBottomWidth: 2,
    borderColor: 'grey',
    height: 40,
    fontSize: 18,
    alignContent: 'center',
    paddingBottom: 20,
  },
  prompt: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  answer: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingRight: 10,
    paddingBottom: 20,
    fontStyle: 'italic',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    paddingTop: 40,
  },
  explanation: {
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  emoji: {
    textAlign: 'center',
    fontSize: 24,
  },
});
