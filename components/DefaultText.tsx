import { View, Text } from 'react-native'
import React from 'react'

const DefaultText = ({
  bold,
  text,
  textStyle = ''
}: {  textStyle?: string, bold?: boolean, text: string }) => {
  return (
    <Text className={`text-primary-100 ${bold ? 'font-bold' : ''} ${textStyle}`}>{text}</Text>
  )
}

export default DefaultText;