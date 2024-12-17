import { TextInputProps, TouchableOpacityProps } from "react-native";

declare interface InputFieldProps extends TextInputProps {
  icon?: any;
  containerStyle?: string;
  inputStyle?: string;
  iconStyle?: string;
  className?: string;
}
