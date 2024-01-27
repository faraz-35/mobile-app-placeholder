import {
  Alert as NativeAlert,
  CloseIcon,
  HStack,
  IconButton,
  VStack,
  Text,
  IAlertProps,
} from "native-base";
import React from "react";

interface IProps {
  title: string;
  status: "success" | "error" | "warning" | "info";
  handleClose: () => void;
  containerStyles?: IAlertProps;
}

const Alert: React.FC<IProps> = ({
  status,
  title,
  handleClose,
  containerStyles,
}) => {
  return (
    <NativeAlert
      w="100%"
      status={status}
      variant="subtle"
      my={3}
      {...containerStyles}
    >
      <VStack space={2} flexShrink={1} w="100%">
        <HStack flexShrink={1} space={2} justifyContent="space-between">
          <HStack space={2} flexShrink={1}>
            <NativeAlert.Icon mt="1" />
            <Text fontSize="md" color="coolGray.800">
              {title}
            </Text>
          </HStack>
          <IconButton
            variant="unstyled"
            _focus={{
              borderWidth: 0,
            }}
            icon={<CloseIcon size="3" />}
            _icon={{
              color: "coolGray.600",
            }}
            onPress={handleClose}
          />
        </HStack>
      </VStack>
    </NativeAlert>
  );
};
export default Alert;
