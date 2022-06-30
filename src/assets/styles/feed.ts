import {StyleSheet} from 'react-native';

const FeedStyles = StyleSheet.create({
    header: {
        marginTop: 10,
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    header_image: {
        height: 30,
        width: 100,
    },
    header_icon: {
        height: 20,
        width: 20,
    },
    story: {
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: 'space-around',
    },
    story_box: {
        alignItems: 'center',
        flexDirection: "column",
    },
    story_icon_box: {
        padding: 3,
        borderWidth: 2,
        borderColor: "red",
        borderRadius: 50
    },
    story_icon: {
        height: 50,
        width: 50,
    },
    feed: {
        flexDirection: "column",
    },
    feed_user: {
        flexDirection: "row",
        paddingVertical: 3,
        paddingHorizontal: 10
    },
    feed_user_icon: {
        height: 30,
        width: 30,
    },
    feed_user_text:{
        paddingVertical: 4,
        marginLeft: 5,
    },
    feed_post:{
        flexDirection: "column",
        paddingVertical: 4
    },
    feed_post_text:{
        paddingHorizontal: 10,
        paddingBottom: 6
    },
    feed_post_image:{
        resizeMode: "cover",
        height: 400,
        width: 400,
    },
    feed_post_actions:{
        paddingHorizontal: 10,
        flexDirection: "row",
        marginBottom: 10
    },
    feed_post_actions_icons:{
        height: 30,
        width: 30,
    },
});

export default FeedStyles;