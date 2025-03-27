import { Box, BoxShadow, Canvas, rect, RoundedRect, rrect, Shadow, translate } from '@shopify/react-native-skia';
import React from 'react'
import { View } from 'react-native'

interface Props {
    ancho: number;
    alto: number;
}

const RegularButton = ({ ancho, alto }: Props) => {
    return (
        <View style={{ position: "absolute", flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Canvas style={{ width: ancho*2, height: alto*3 }}>
                <RoundedRect x={ancho/2} y={alto} width={ancho} height={alto} r={25} color="#E6E9EF" >
                    <Shadow dx={-5} dy={-5} blur={10} color="#FFFFFF70" inner={false} />
                    <Shadow dx={13} dy={14} blur={12} color="#A6B4C870" inner={false} />
                </RoundedRect>
            </Canvas>
        </View>
    )
}

export default RegularButton;
