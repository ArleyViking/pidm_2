
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

class Corpo extends Component {

    render() {
        return (
            <View style={styles_cont.div}>
                <Image
                   style={styles_img.container_img}
                    source={{ uri: 'https://scontent.ffor17-1.fna.fbcdn.net/v/t1.6435-9/100939222_1986294188167258_3904480753622188032_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=wEW_04SUgkEAX9-C7XF&_nc_ht=scontent.ffor17-1.fna&oh=4937a8ec064ceae0ed59302caa1712d0&oe=61939763', }}
                />
            </View>

        );
    }
}

const styles_img = StyleSheet.create({
    container_img: {
        width: 200,
        height: 200,
        borderRadius: 20,
    },
  });

  const styles_cont = StyleSheet.create({
    div: {
        marginTop: 20,
        backgroundColor: '#c1c1c1',
        borderRadius: 20,
       
    
    },
  });

export default Corpo
