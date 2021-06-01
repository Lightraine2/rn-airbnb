import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles.js';

const Post = (props) => {
    return (
        <View style={styles.container}>
            {/* Image */}
            <Image 
            style={styles.image}
            source={{uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg"}}
            />
            
            {/* Bed and bedrooms */}
            <Text style={styles.bedrooms}> bed 1 bedroom 1</Text>
            
            {/* Type and description */}
            <Text style={styles.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptatem odit perspiciatis error fugiat recusandae ipsa qui non dolore voluptas rerum, facere eos modi suscipit omnis ratione nihil optio quo. 
            </Text>

            {/* old and new price */}

            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>$36</Text>
                <Text style={styles.newPrice}> $30 </Text>
                / night
            </Text>
            {/* total price */}

            <Text style={styles.totalPrice}>$230 total</Text>

        </View>
    )
}

export default Post;