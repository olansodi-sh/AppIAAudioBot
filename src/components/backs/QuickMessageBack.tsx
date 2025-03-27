import React, { useState } from 'react';
import { View } from 'react-native';
import { Canvas, RoundedRect, Shadow, Path, Skia } from '@shopify/react-native-skia';

const QuickMessageBack = ({ width = 150, height = 60 }) => {
    return (
        <View style={{ position: 'absolute',  }} >
            <Canvas style={{ width: width * 2, height: height * 3 }}>
                <RoundedRect x={width/2} y={height} width={width} height={height} r={25} color="#E6E9EF">
                    <Shadow dx={-5} dy={-5} blur={10} color="#FFFFFF70" inner={false} />
                    <Shadow dx={5} dy={5} blur={5} color="#A6B4C870" inner={false} />
                    <Shadow dx={13} dy={14} blur={12} color="#A6B4C850" inner={false} />
                </RoundedRect>
            </Canvas>
        </View>
    );
};

export default QuickMessageBack;
