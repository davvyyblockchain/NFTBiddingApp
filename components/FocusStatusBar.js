import { StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/native'

const FocusStatusBar = (props) => {
    const isFocussed = useIsFocused()

  return isFocussed ? <StatusBar animated={true} {...props} /> : null
}

export default FocusStatusBar