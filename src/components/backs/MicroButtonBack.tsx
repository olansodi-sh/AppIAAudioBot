import { Box, BoxShadow, Canvas, rect, RoundedRect, rrect, Shadow, translate } from '@shopify/react-native-skia';
import React from 'react'
import { View } from 'react-native'

interface Props {
    ancho: number;
    alto: number;
    enabled: boolean;
}

const MicroButtonBack = ({ ancho, alto, enabled }: Props) => {
    if (enabled) {
        return (
            <View style={{ position: "absolute", flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Canvas style={{ width: ancho*2, height: alto*3 }}>
                    <RoundedRect x={ancho/2 - 5} y={alto - 5} width={ancho + 10} height={alto + 10 } r={100} color="#E6E9EF" >
                        <Shadow dx={-8} dy={-8} blur={10} color="#FFFFFF70" inner={false} />
                        <Shadow dx={-5} dy={-5} blur={10} color="#A6B4C850" inner={false} />
                        <Shadow dx={10} dy={15} blur={12} color="#A6B4C870" inner={false} />
                        <Shadow dx={8} dy={12} blur={10} color="#A6B4C850" inner={false} />
                    </RoundedRect>
                    
                    <RoundedRect x={ancho/2} y={alto} width={ancho} height={alto} r={100} color="#6c757d" >
                        <Shadow dx={8} dy={8} blur={8} color="#212529" inner={true} />
                        <Shadow dx={-8} dy={-8} blur={8} color="#ced4da" inner={true} />
                    </RoundedRect>
                </Canvas>
            </View>
        )
    } else {
        return (
            <View style={{ position: "absolute", flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Canvas style={{ width: ancho*2, height: alto*3 }}>
                    <RoundedRect x={ancho/2 - 5} y={alto - 5} width={ancho + 10} height={alto + 10 } r={100} color="#E6E9EF" >
                        <Shadow dx={-8} dy={-8} blur={10} color="#FFFFFF70" inner={false} />
                        <Shadow dx={-5} dy={-5} blur={10} color="#A6B4C850" inner={false} />
                        <Shadow dx={10} dy={15} blur={12} color="#A6B4C870" inner={false} />
                        <Shadow dx={8} dy={12} blur={10} color="#A6B4C850" inner={false} />
                    </RoundedRect>
                    
                    <RoundedRect x={ancho/2} y={alto} width={ancho} height={alto} r={100} color="#660708" >
                    </RoundedRect>
                </Canvas>
            </View>
        )
    }
}

export default MicroButtonBack;
