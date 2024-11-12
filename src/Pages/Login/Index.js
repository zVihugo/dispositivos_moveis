
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

export  function Login({navigation}) {

  const handlePressNavigateRegister = () => {
    navigation.navigate("NovaConta");
  }

  const handlePressNavigateForgotPassword = () => {
    navigation.navigate("RecuperarSenha");
  }

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.TitleText}>Satisfying.you</Text>
        <Icon name="sentiment_satisfied" size={40} color="#fff" />
      </View>
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
        <TouchableOpacity style={styles.buttonContent}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonHelp}>
        <TouchableOpacity style={styles.buttonRegister} onPress={handlePressNavigateRegister}>
          <Text style={styles.helpText}>Criar minha conta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonChangePassword} onPress={handlePressNavigateForgotPassword}>
          <Text style={styles.helpText}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#372775",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
    marginBottom: 50,
  },
  TitleText: {
    color: "#fff",
    fontSize: 35,
    paddingLeft: "1%",
    fontFamily: "AveriaLibre-Bold",
  },
  inputGroup: {
    width: "80%",
    marginBottom: 10,
  },
  textContent: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "AveriaLibre-Regular",
    marginBottom: 5,
    textAlign: "left",
  },
  inputContext: {
    backgroundColor: "#fff",
    width: "100%",
    height: 40,
    paddingLeft: 10,
  },
  buttonContent: {
    backgroundColor: "#37BD6D",
    width: "80%",
    height: 40,
    fontFamily: "AveriaLibre-Regular",
    paddingLeft: 10,
    marginBottom: 10,
    marginTop: 30,
    padding: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "AveriaLibre-Regular",
    textAlign: "center",
  },
  buttonHelp: {
    paddingTop: 30,
    fontFamily: "AveriaLibre-Regular",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 30, 
  },
  buttonRegister: {
    backgroundColor: "#419ED7",
    width: "80%",
    height: 30,
    paddingLeft: 10,
    marginBottom: 10,
    padding: 8,
  },
  helpText: {
    fontFamily: "AveriaLibre-Regular",
    textAlign: "center",
    color: "#fff",
    fontSize: 14,
  },
  buttonChangePassword: {
    backgroundColor: "#B0CCDE",
    width: "80%",
    height: 30,
    paddingLeft: 10,
    marginBottom: 10,
    padding: 8,
  },
});