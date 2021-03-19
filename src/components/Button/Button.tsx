import React, {FC} from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
}

const Button: FC<ButtonProps> = ({title, loading, ...otherProps}) => {
  return (
    <TouchableOpacity
      style={{backgroundColor: 'blue'}}
      testID="button-touchable"
      {...otherProps}>
      {loading ? (
        <ActivityIndicator testID="button-indicator" />
      ) : (
        <Text testID="button-text">{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
