import React from 'react';
import { View } from 'react-native';
import { Canvas, RoundedRect, Shadow, Path, Skia } from '@shopify/react-native-skia';

interface Props {
    width: number;
    height: number;
}

const UserMessageBack = ({ width, height }: Props) => {
    const tailWidth = 15;  // Ancho de la punta
    const tailPath = Skia.Path.Make();

    // Punto de inicio en la parte superior derecha de la burbuja
    tailPath.moveTo(width + 8, 22);
    tailPath.quadTo(width - 15, -5, width - tailWidth, 12); // Conexión suave a la burbuja
    tailPath.close(); // Cierra la figura

    return (
        <View style={{ position: 'absolute', right: 0, alignSelf: 'flex-end' }}>
            <Canvas style={{ width: width + 10, height: height }}>
                <Path path={tailPath} color="#A6B4C890" />
                <RoundedRect x={10} y={0} width={width - 10} height={height} r={25} color="#E6E9EF" >
                    <Shadow dx={-5} dy={-3} blur={6} color="#FFFFFF" inner={true} />
                    <Shadow dx={3} dy={3} blur={3} color="#A6B4C8" inner={true} />
                    <Shadow dx={-5} dy={1} blur={3} color="#A6B4C850" inner={true} />
                </RoundedRect>
            </Canvas>
        </View>

    );
};

export default UserMessageBack;
