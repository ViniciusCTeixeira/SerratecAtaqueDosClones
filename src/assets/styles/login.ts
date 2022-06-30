import {StyleSheet} from 'react-native';

const LoginStyles = StyleSheet.create({
    login_select_language: {
        alignItems: 'center',
        paddingVertical: 10,
    },
    login_form: {
        flex: 1,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    login_form_logo: {
        width: 200,
        height: 100,
    },
    login_form_input: {
        height: 40,
        width: "100%",
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5
    },
    login_form_button: {
        elevation: 8,
        alignItems: 'center',
        width: "100%",
        backgroundColor: "#0095f6",
        borderRadius: 5,
        paddingVertical: 10,
        marginBottom: 10
    },
    login_form_button_text: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
    login_form_facebook: {
        flexDirection: "row",
        height: 40
    },
    login_form_facebook_icon: {
        width: 30,
        height: 30,
        marginRight: 10
    },
    login_form_facebook_text: {
        paddingVertical: 5,
    },
    login_form_separator: {
        fontSize: 18,
        fontWeight: "bold",
    },
    login_footer: {
        paddingVertical: 10,
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: "black",
    },
});

export default LoginStyles;