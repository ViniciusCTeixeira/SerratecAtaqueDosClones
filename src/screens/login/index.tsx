import React from 'react';
import {Text, View, StatusBar, Image, TextInput, TouchableOpacity} from 'react-native';
import Styles from '../../assets/styles/general';
import LoginStyles from "../../assets/styles/login"

import LoginImage from "../../assets/images/login_logo.png"
import FacebookIcon from "../../assets/icons/faceboob_icon.png"

export default function Login() {
    return (
        <View style={Styles.container}>
            <StatusBar/>
            <View style={LoginStyles.login_select_language}>
                <Text>português (Brasil)</Text>
            </View>
            <View style={LoginStyles.login_form}>
                <Image style={LoginStyles.login_form_logo} source={LoginImage}/>
                <TextInput style={LoginStyles.login_form_input}
                           placeholder="Numero de telefone, email ou nome de usuário"/>
                <TextInput style={LoginStyles.login_form_input} placeholder="Senha"/>
                <TouchableOpacity style={LoginStyles.login_form_button}>
                    <Text style={LoginStyles.login_form_button_text}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={Styles.text_sm}>Esqueceu seus dados de login? <Text style={{color: "#0095f6"}}>Obter ajuda para entrar.</Text></Text>
                </TouchableOpacity>
                <Text style={LoginStyles.login_form_separator}>━━━━━━━━━━━ OU ━━━━━━━━━━━</Text>
                <View style={LoginStyles.login_form_facebook}>
                    <Image style={LoginStyles.login_form_facebook_icon} source={FacebookIcon}/>
                    <View style={LoginStyles.login_form_facebook_text}>
                        <Text style={{color: "#0095f6"}}>Entrar com o Facebook</Text>
                    </View>
                </View>
            </View>
            <View style={LoginStyles.login_footer}>
                <TouchableOpacity><Text style={Styles.text_sm}>Não tem uma conta? <Text style={{color: "#0095f6"}}>Cadastre-se.</Text></Text></TouchableOpacity>
            </View>
        </View>
    );
}