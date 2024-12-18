import { InputFieldProps } from "../types/types";
import {
  ActivityIndicator,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const InputField = ({
  icon,
  secureTextEntry = false,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  loading,
  ...props
}: InputFieldProps) => (
  <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="border border-secondary-700 rounded-3xl my-2 w-full">
        <View
          className={`flex flex-row items-center justify-start relative bg-neutral-100 rounded-3xl border border-neutral-100 focus:border-primary-500 ${containerStyle}`}
        >
          {icon && !loading && (
            <Image source={icon} className={`w-6 h-6 ml-4 ${iconStyle}`} />
          )}
          {loading && (
            <ActivityIndicator size="small" className="ml-4" />
          )}
          <TextInput
            className={`rounded-3xl p-4 font-JakartaSemiBold text-[15px] flex-1 ${inputStyle} text-left`}
            secureTextEntry={secureTextEntry}
            {...props}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);

export default InputField;
