import { View, Text, Image } from 'react-native'
import { COLORS, SHADOWS, SIZES, assets } from '../constants'
import { useNavigation } from '@react-navigation/native'
import { CircleButton, RectButton } from './Button'
import { SubInfo, NFTTitle, EthPrice, ImageCmp, People, EndDate } from './SubInfo'
const NFTCard = ({data}) => {
  const navigation = useNavigation();

  return (
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark
    }}>
      <View style={{width: "100%", height: 250}}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font
          }}
          />
      </View>
      <CircleButton imgUrl={assets.heart} top={10} right={10}/>
      <SubInfo />
      <View style={{
        padding: SIZES.font,
        width: '100%'
      }}>
        <NFTTitle 
          title={data.name} 
          titleSize={SIZES.large} 
          subTitle={data.creator} 
          subTitleSize={SIZES.small}
        />

        <View style={{
          marginTop: SIZES.font,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <EthPrice price={data.price} />
          <RectButton 
            minWidth={120} 
            fontSize={SIZES.font} 
            handlePress={() => navigation.navigate("Details", {data})}
          />
        </View>
      </View>
    </View>
  )
}

export default NFTCard