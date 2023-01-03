const shadowView = {
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
};

export function checkOddEven(i) {
  if (i % 2 == 0) {
    return 0;
  } else {
    return 1;
  }
}

export default {shadowView, checkOddEven};
