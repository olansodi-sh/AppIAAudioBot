import { Box, BoxShadow, Canvas, rect, RoundedRect, rrect, Shadow } from '@shopify/react-native-skia';
import React from 'react'
import { View } from 'react-native'

const InputFormBack = () => {
    return (
        <View style={{ position: "absolute", top: 0, }}>
            <Canvas style={{ width: 300, height: 50, flex: 1, justifyContent: "center", alignItems: "center" }}>
                <RoundedRect x={0} y={0} width={300} height={50} r={25} color="#E6E9EF" >
                    <Shadow dx={8} dy={8} blur={16} color="#A6B4C890" inner={true} />
                    <Shadow dx={-8} dy={-8} blur={16} color="#FFFFFF70" inner={true} />
                </RoundedRect>
            </Canvas>
        </View>
    )
}

export default InputFormBack;
