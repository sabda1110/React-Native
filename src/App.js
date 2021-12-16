import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import FlexBox from './pages/FlexBox'
import Position from './pages/Position'
import ComponentDinamis from './pages/ComponentDinamis'
import DinamisState from './pages/DinamisState'
import StyleSimple from './pages/StyleSimple'
import Commucation from './pages/Commucation'
import Pertemuan1 from './pages/Pertemuan-Pertama'
import CallApiVanila from './pages/CallApiVanila'
import LocalApi from './pages/LocalApi'

export default function App() {
  return (
    <View>
    <ScrollView>
      {/* <DinamisState /> */}
       {/* <ComponentDinamis /> */}
       {/* <FlexBox /> */}
       {/* <StyleSimple />
       <Position /> */}
       {/* <Commucation /> */}
       <Pertemuan1/>
       {/* <CallApiVanila /> */}
       {/* <LocalApi /> */}
    </ScrollView>
    </View>
  )
}
