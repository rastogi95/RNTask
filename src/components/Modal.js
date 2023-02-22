import React from 'react';
import {Modal, StyleSheet, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import {BlurView} from '@react-native-community/blur';

const CustomModal = ({style, blurType, disableBackdrop, ...props}) => {
  function onRequestClose() {
    if (disableBackdrop) {
      return;
    }
    props.setVisible(false);
  }

  return (
    <Modal visible={props.visible} onRequestClose={onRequestClose} {...props}>
      <View style={[styles.container, style]}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.backdrop}
          onPress={onRequestClose}>
          <BlurView
            style={styles.backdrop}
            blurType={blurType || 'dark'}
            blurAmount={1.5} // ranges from 0-100
            onPress={onRequestClose}
            reducedTransparencyFallbackColor={'white'}
          />
        </TouchableOpacity>
        {props.children}
      </View>
    </Modal>
  );
};

CustomModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  animationType: PropTypes.string,
  transparent: PropTypes.bool,
  style: PropTypes.object,
  setVisible: PropTypes.func,
  children: PropTypes.object,
};

CustomModal.defaultProps = {
  animationType: 'fade',
  transparent: true,
};

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    flex: 1,
  },
});

export default CustomModal;
