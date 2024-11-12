import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export function NovaConta({navigation}) {

    const handlePressNavigateLogin = () => {
        navigation.navigate("Login");
    }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.inputGroup}>
          <Text style={styles.textContent}>E-mail</Text>
          <TextInput
            style={styles.inputContext}
            placeholder="Digite seu e-mail"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.textContent}>Senha</Text>
          <TextInput
            style={styles.inputContext}
            placeholder="Digite sua senha"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.textContent}>Repetir senha</Text>
          <TextInput
            style={styles.inputContext}
            placeholder="Digite sua senha"
          />
        </View>
        <TouchableOpacity style={styles.buttonContent} onPress={handlePressNavigateLogin}>
          <Text style={styles.buttonText}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#372775',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
    marginBottom: 50,
  },
  TitleText: {
    color: '#fff',
    fontSize: 35,
    paddingLeft: '1%',
    fontFamily: 'AveriaLibre-Bold',
  },
  inputGroup: {
    width: '80%',
    marginBottom: 10,
  },
  textContent: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'AveriaLibre-Regular',
    marginBottom: 5,
    textAlign: 'left',
  },
  inputContext: {
    backgroundColor: '#fff',
    width: '100%',
    height: 40,
    paddingLeft: 10,
  },
  buttonContent: {
    backgroundColor: '#37BD6D',
    width: '80%',
    height: 40,
    fontFamily: 'AveriaLibre-Regular',
    paddingLeft: 10,
    marginBottom: 10,
    marginTop: 30,
    padding: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'AveriaLibre-Regular',
    textAlign: 'center',
  },
  buttonHelp: {
    paddingTop: 30,
    fontFamily: 'AveriaLibre-Regular',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  buttonRegister: {
    backgroundColor: '#419ED7',
    width: '80%',
    height: 30,
    paddingLeft: 10,
    marginBottom: 10,
    padding: 8,
  },
  helpText: {
    fontFamily: 'AveriaLibre-Regular',
    textAlign: 'center',
    color: '#fff',
    fontSize: 14,
  },
  buttonChangePassword: {
    backgroundColor: '#B0CCDE',
    width: '80%',
    height: 30,
    paddingLeft: 10,
    marginBottom: 10,
    padding: 8,
  },
});
