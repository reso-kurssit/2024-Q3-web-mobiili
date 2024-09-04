import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity } from "react-native";
import axios from "axios";
import he from "he";
import SwitchBackground from "./SwitchBackground";

const removeLinks = (text) => {
    return text.replace(/<a[^>]*>([^<]+)<\/a>/gi, '$1');
};

const SteamNews = ({ appId, count, maxLength }) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(`http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/`, {
                    params: {
                        appid: 1086940,
                        count: 4,
                        maxlength: 200,
                        format: 'json'
                    }
                });
                const decodedNews = response.data.appnews.newsitems.map((item) => ({
                    ...item,
                    title: he.decode(item.title),
                    contents: removeLinks(he.decode(item.contents)),
                }));
                setNews(decodedNews);
            } catch (error) {
                setError('Failed to fetch news...');
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [appId, count, maxLength]);

    if (loading) {
        return <Text>Loading...</Text>;
    }

    if (error) {
        return <Text>{error}</Text>;
    }


    return (
        <ScrollView>
            <View>
                {news.map((item, index) => (
                    <View key={index} style={styles.newsItem}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.contents}>{item.contents}</Text>
                        <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
                            <Text style={styles.url}>[ Read more ... ]</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

export default function Steam() {
    return (
        <View style={styles.container}>
            <SwitchBackground />
            <Text style={styles.info}>Uutisten seuranta suosikkipelistäni, Baldur's Gate III.</Text>
            <SteamNews />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    newsItem: {
        margin: 15,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#f1f1f1',
        opacity: 0.6,
    },
    title: {
        fontFamily: 'RobotoFlex',
        fontSize: 18,
        marginBottom: 5,
    },
    url: {
        color: '#375dcf',
        fontFamily: 'IndieFlower',
        fontSize: 14,
        marginTop: 10,
    },
    info: {
        fontFamily: 'IndieFlower',
        fontSize: 20,
        color: "#000000",
        margin: 20,
        padding: 10, 
        borderRadius: 10,
        backgroundColor: '#839670',
        opacity: 0.7,
    },
    contents: {
        fontFamily: 'RobotoFlex',
        fontSize: 14,
    },
    
});
