import React from 'react'
import {Text, View, StatusBar, Image, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Styles from "../../assets/styles/general";
import FeedStyles from "../../assets/styles/feed";

import Logo from "../../assets/images/logo.png"
import SendIcons from "../../assets/icons/sent.png"
import ChatIcons from "../../assets/icons/chat.png"
import LikeIcons from "../../assets/icons/like.png"
import PersonIcons from "../../assets/icons/person.png"

export default function Feed() {
    const PostImage = "https://source.unsplash.com/random";
    return (
        <View style={Styles.container}>
            <StatusBar/>
            <View style={FeedStyles.header}>
                <Image source={Logo} style={FeedStyles.header_image}/>
                <Image source={SendIcons} style={FeedStyles.header_icon}/>
            </View>
            <ScrollView horizontal={false} showsVerticalScrollIndicator={true}>
                <View style={FeedStyles.story}>
                    <View style={FeedStyles.story_box}>
                        <View style={FeedStyles.story_icon_box}>
                            <Image source={PersonIcons} style={FeedStyles.story_icon}/>
                        </View>
                        <Text>Fulano</Text>
                    </View>
                    <View style={FeedStyles.story_box}>
                        <View style={FeedStyles.story_icon_box}>
                            <Image source={PersonIcons} style={FeedStyles.story_icon}/>
                        </View>
                        <Text>Fulano</Text>
                    </View>
                    <View style={FeedStyles.story_box}>
                        <View style={FeedStyles.story_icon_box}>
                            <Image source={PersonIcons} style={FeedStyles.story_icon}/>
                        </View>
                        <Text>Fulano</Text>
                    </View>
                    <View style={FeedStyles.story_box}>
                        <View style={FeedStyles.story_icon_box}>
                            <Image source={PersonIcons} style={FeedStyles.story_icon}/>
                        </View>
                        <Text>Fulano</Text>
                    </View>
                    <View style={FeedStyles.story_box}>
                        <View style={FeedStyles.story_icon_box}>
                            <Image source={PersonIcons} style={FeedStyles.story_icon}/>
                        </View>
                        <Text>Fulano</Text>
                    </View>
                </View>

                <View style={Styles.divider}/>

                <View style={FeedStyles.feed}>
                    <View style={FeedStyles.feed_user}>
                        <Image source={PersonIcons} style={FeedStyles.feed_user_icon}/>
                        <Text style={FeedStyles.feed_user_text}>Fulano</Text>
                    </View>
                    <View style={Styles.divider}/>
                    <View style={FeedStyles.feed_post}>
                        <Text style={FeedStyles.feed_post_text}>Seu Post</Text>
                        <Image source={{uri: PostImage}} style={FeedStyles.feed_post_image}/>
                    </View>
                    <View style={FeedStyles.feed_post_actions}>
                        <Image source={LikeIcons} style={FeedStyles.feed_post_actions_icons}/>
                        <Image source={ChatIcons} style={FeedStyles.feed_post_actions_icons}/>
                        <Image source={SendIcons} style={FeedStyles.feed_post_actions_icons}/>
                    </View>
                </View>

                <View style={FeedStyles.feed}>
                    <View style={FeedStyles.feed_user}>
                        <Image source={PersonIcons} style={FeedStyles.feed_user_icon}/>
                        <Text style={FeedStyles.feed_user_text}>Fulano</Text>
                    </View>
                    <View style={Styles.divider}/>
                    <View style={FeedStyles.feed_post}>
                        <Text style={FeedStyles.feed_post_text}>Seu Post</Text>
                        <Image source={{uri: PostImage}} style={FeedStyles.feed_post_image}/>
                    </View>
                    <View style={FeedStyles.feed_post_actions}>
                        <Image source={LikeIcons} style={FeedStyles.feed_post_actions_icons}/>
                        <Image source={ChatIcons} style={FeedStyles.feed_post_actions_icons}/>
                        <Image source={SendIcons} style={FeedStyles.feed_post_actions_icons}/>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
