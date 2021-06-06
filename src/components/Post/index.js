import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles.js';

const Post = (props) => {

    const post = props.post;

    console.log(post)

    return (
        <View style={styles.container}>
            {/* Image */}
            <Image 
            style={styles.image}
            source={{uri: post.image}}
            />
            
            {/* Bed and bedrooms */}
            <Text style={styles.bedrooms}>{post.bed} bed {post.bedroom} bedroom</Text>
            
            {/* Type and description */}
            <Text style={styles.description}>
                {post.type}. {post.title}
            </Text>

            {/* old and new price */}

            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>${post.oldPrice}</Text>
                <Text style={styles.newPrice}> ${post.newPrice} </Text>
                / night
            </Text>
            {/* total price */}

            <Text style={styles.totalPrice}>${post.totalPrice} total</Text>

        </View>
    )
}

export default Post;