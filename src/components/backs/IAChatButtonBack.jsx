import { Box, BoxShadow, Canvas, rect, RoundedRect, rrect, Shadow } from '@shopify/react-native-skia';
import React from 'react'
import { View } from 'react-native'

const IAChatButtonBack = () => {
    return (
        <View style={{ position: "absolute", bottom: -43, right: -43 }}>
            <Canvas style={{ width: 120, height: 120, flex: 1, justifyContent: "center", alignItems: "center" }}>
                <RoundedRect x={35} y={35} width={50} height={50} r={15} color="#E6E9EF" >
                    <Shadow dx={-5} dy={-5} blur={20} color="#FFFFFF" inner={false} />
                    <Shadow dx={13} dy={14} blur={12} color="#A6B4C870" inner={false} />
                </RoundedRect>
            </Canvas>
        </View>
    )
}

export default IAChatButtonBack;
