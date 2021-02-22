import {Alert} from 'react-native';

/**
 * Returns an alert message with one button, it is uncancellable
 * @param {string} title Dialog Title
 * @param {string} bodyText Body text for the dialog
 * @param {string} btnText Button text value
 * @param {function} onClose Closing function, it is required
 */
function Dialog(title, bodyText, btnText, onClose) {
  return Alert.alert(
    title,
    bodyText,
    [
      {
        text: btnText,
        onPress: () => {
          onClose();
        },
      },
    ],
    {cancelable: false},
  );
}

export default Dialog;
