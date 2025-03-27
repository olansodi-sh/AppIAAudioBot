import React from 'react';
import { View } from 'react-native';
import { Canvas, RoundedRect, Shadow, Path, Skia } from '@shopify/react-native-skia';

interface Props {
    width: number;
    height: number;
}

const IAMessageBack = ({ width = 200, height = 60 }) => {
    
    return (
        <View style={{ position: 'absolute', left: 0, alignSelf: 'flex-start' }}>
            <Canvas style={{ width: width + 20, height: height + 30 }}>
                <RoundedRect x={10} y={15} width={width - 10} height={height - 8} r={20} color="#E6E9EF">
                    <Shadow dx={-5} dy={-5} blur={5} color="#FFFFFF90" inner={false} />
                    <Shadow dx={5} dy={5} blur={5} color="#A6B4C870" inner={false} />
                </RoundedRect>
            </Canvas>
        </View>
    );
};

export default IAMessageBack;
