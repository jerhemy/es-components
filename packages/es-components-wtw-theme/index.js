const white = '#fff';
const gray1 = '#f7f7f7';
const gray2 = '#eee';
const gray3 = '#ddd';
const gray4 = '#ced4da';
const gray5 = '#aaa';
const gray6 = '#888';
const gray7 = '#495057';
const gray8 = '#666';
const gray9 = '#444';
const black = '#000';
const darkBlue = '#006685';

const defaultColor = gray9;
const defaultHover = black;
const defaultBtnText = white;
const primary = '#5a0c6f';
const primaryHover = '#4d1659';
const info = '#1b6284';
const infoHover = '#144962';
const infoLight = '#227ba6';
const success = '#006600';
const successHover = '#003d00';
const successLight = '#d9eedf';
const warning = '#ebaf00';
const warningHover = '#c29100';
const warningLight = '#ffedb8';
const danger = '#af140c';
const dangerHover = '#891009';
const dangerLight = '#fde7e7';
const advisor = '#ff6310';
const advisorLight = '#ffe8dc';
const popoverHeader = darkBlue;

const vbBlue = '#00a0d2';
const vbGreen = '#00c389';
const vbMagenta = '#c110a0';
const wtwGray = '#63666a';

const boxShadowLight = 'rgba(0, 0, 0, 0.075)';
const boxShadowDark = 'rgba(0, 0, 0, 0.5)';

const inputBorder = gray4;
const inputFocus = '#66afe9';
const inputBoxShadow = 'rgba(102, 175, 233, 0.6)';

const violet = '#5a0c6f';
const blueLighter = '#d2f4ff';
const greenLighter = '#c3ffed';
const violetLighter = '#eac9f2';


// Datepicker colors
const navArrow = gray;
const navArrowHover = grayDark;
const selected = '#216ba5';
const hover = '#1d5d90';
const keyboard = '#2a87d0';
const inRange = 'rgba(33, 107, 165, 0.5)';
const highlight = '#3dcc4a';
const highlightHover = '#32be3f';

const theme = {
  colors: {
    black: black,
    gray1: gray1,
    gray2: gray2,
    gray3: gray3,
    gray4: gray4,
    gray5: gray5,
    gray6: gray6,
    gray7: gray7,
    gray8: gray8,
    gray9: gray9,
    white: white,
    defaultColor: defaultColor,
    defaultHover: defaultHover,
    defaultBtnText: defaultBtnText,
    primary: primary,
    primaryHover: primaryHover,
    success: success,
    successHover: successHover,
    successLight: successLight,
    info: info,
    infoHover: infoHover,
    infoLight: infoLight,
    warning: warning,
    warningHover: warningHover,
    warningLight: warningLight,
    danger: danger,
    dangerHover: dangerHover,
    dangerLight: dangerLight,
    advisor: advisor,
    advisorLight: advisorLight,
    boxShadowLight: boxShadowLight,
    boxShadowDark: boxShadowDark,
    inputFocus: inputFocus,
    popoverHeader: popoverHeader,
    greenLighter: greenLighter,
    violetLighter: violetLighter,
    blueLighter: blueLighter,
    violet: violet
  },
  brandColors: {
    vbBlue: vbBlue,
    vbGreen: vbGreen,
    vbMagenta: vbMagenta,
    wtwGray: wtwGray
  },
  datepickerColors: {
    navArrow,
    navArrowHover,
    selected,
    hover,
    keyboard,
    inRange,
    highlight,
    highlightHover
  },
  notificationStyles: {
    success: {
      base: {
        bgColor: success,
        textColor: white
      },
      light: {
        bgColor: successLight,
        textColor: gray8
      },
      messageOnly: {
        bgColor: 'transparent',
        textColor: success
      }
    },
    info: {
      base: {
        bgColor: info,
        textColor: white
      },
      light: {
        bgColor: infoLight,
        textColor: gray8
      },
      messageOnly: {
        bgColor: 'transparent',
        textColor: info
      }
    },
    warning: {
      base: {
        bgColor: warning,
        textColor: white
      },
      light: {
        bgColor: warningLight,
        textColor: gray8
      },
      messageOnly: {
        bgColor: 'transparent',
        textColor: warning
      }
    },
    danger: {
      base: {
        bgColor: danger,
        textColor: white
      },
      light: {
        bgColor: dangerLight,
        textColor: gray8
      },
      messageOnly: {
        bgColor: 'transparent',
        textColor: danger
      }
    },
    advisor: {
      base: {
        bgColor: advisor,
        textColor: white
      },
      light: {
        bgColor: advisorLight,
        textColor: gray8
      },
      messageOnly: {
        bgColor: 'transparent',
        textColor: advisor
      }
    }
  },
  buttonStyles: {
    buttonsNormal: {
      // these button types are dynamic, so you can add/remove/rename them
      primary: {
        bgColor: primary,
        textColor: white,
        hoverBgColor: primaryHover,
        hoverTextColor: white,
        activeBgColor: primaryHover,
        activeTextColor: white,
        boxShadowColor: primaryHover
      },
      default: {
        bgColor: defaultColor,
        textColor: white,
        hoverBgColor: defaultHover,
        hoverTextColor: white,
        activeBgColor: defaultHover,
        activeTextColor: white,
        boxShadowColor: defaultHover
      },
      success: {
        bgColor: success,
        textColor: white,
        hoverBgColor: successHover,
        hoverTextColor: white,
        activeBgColor: successHover,
        activeTextColor: white,
        boxShadowColor: successHover
      },
      info: {
        bgColor: info,
        textColor: white,
        hoverBgColor: infoHover,
        hoverTextColor: white,
        activeBgColor: infoHover,
        activeTextColor: white,
        boxShadowColor: infoHover
      },
      warning: {
        bgColor: warning,
        textColor: black,
        hoverBgColor: warningHover,
        hoverTextColor: black,
        activeBgColor: warningHover,
        activeTextColor: black,
        boxShadowColor: warningHover
      },
      danger: {
        bgColor: danger,
        textColor: white,
        hoverBgColor: dangerHover,
        hoverTextColor: white,
        activeBgColor: dangerHover,
        activeTextColor: white,
        boxShadowColor: dangerHover
      }
    },
    buttonsOutline: {
      // these can be independent of the main buttons, but generally
      // should have matching sets
      primary: {
        bgColor: white,
        textColor: primary,
        hoverBgColor: primary,
        hoverTextColor: white,
        activeBgColor: primaryHover,
        activeTextColor: white,
        borderColor: primary
      },
      default: {
        bgColor: white,
        textColor: defaultColor,
        hoverBgColor: defaultColor,
        hoverTextColor: white,
        activeBgColor: defaultHover,
        activeTextColor: white,
        borderColor: defaultColor
      },
      success: {
        bgColor: white,
        textColor: success,
        hoverBgColor: success,
        hoverTextColor: white,
        activeBgColor: successHover,
        activeTextColor: white,
        borderColor: success
      },
      info: {
        bgColor: white,
        textColor: info,
        hoverBgColor: info,
        hoverTextColor: white,
        activeBgColor: infoHover,
        activeTextColor: white,
        borderColor: info
      },
      warning: {
        bgColor: white,
        textColor: warning,
        hoverBgColor: warning,
        hoverTextColor: black,
        activeBgColor: warningHover,
        activeTextColor: black,
        borderColor: warning
      },
      danger: {
        bgColor: white,
        textColor: danger,
        hoverBgColor: danger,
        hoverTextColor: white,
        activeBgColor: dangerHover,
        activeTextColor: white,
        borderColor: danger
      }
    }
  },
  // buttonSizes should always have default, lg, sm, xs
  buttonSizes: {
    lg: {
      borderRadius: '5px',
      fontSize: '26px',
      paddingTop: '6px',
      paddingSides: '20px',
      paddingBottom: '5px'
    },
    default: {
      borderRadius: '4px',
      fontSize: '18px',
      paddingTop: '5px',
      paddingSides: '15px',
      paddingBottom: '4px'
    },
    sm: {
      borderRadius: '3px',
      fontSize: '17px',
      paddingTop: '4px',
      paddingSides: '10px',
      paddingBottom: '3px'
    },
    xs: {
      borderRadius: '3px',
      fontSize: '15px',
      paddingTop: '3px',
      paddingSides: '10px',
      paddingBottom: '2px',
      textTransform: 'uppercase'
    }
  },
  validationIconName: {
    success: 'ok',
    warning: 'exclamation-sign',
    danger: 'remove'
  },
  validationTextColor: {
    success: success,
    warning: warningHover,
    danger: danger
  },
  validationInputColor: {
    success: {
      borderColor: success,
      boxShadow: 'inset 0 0 5px ' + success,
      focusBorderColor: success,
      focusBoxShadow: '0 0 6px ' + success
    },
    warning: {
      borderColor: warning,
      boxShadow: 'inset 0 0 5px ' + warning,
      focusBorderColor: warning,
      focusBoxShadow: '0 0 6px ' + warning
    },
    danger: {
      borderColor: danger,
      boxShadow: 'inset 0 0 5px ' + danger,
      focusBorderColor: danger,
      focusBoxShadow: '0 0 6px ' + danger
    },
    default: {
      borderColor: inputBorder,
      boxShadow: 'inset 0 1px 1px ' + boxShadowLight,
      focusBorderColor: inputFocus,
      focusBoxShadow: '0 0 8px ' + inputBoxShadow
    }
  },
  sizes: {
    baseFontSize: '18px',
    baseLineHeight: 1.428
  },
  screenSize: {
    retina: '320px',
    phone: '480px',
    tablet: '768px',
    desktop: '900px',
    widescreen: '1200px'
  }
};

module.exports = theme;
