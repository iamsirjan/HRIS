import { extendTheme } from '@chakra-ui/react';

import { THEME_COLORS } from './colors';
import { FONT_WEIGHTS } from './FontWeight.theme';

// Components Theme
import { ButtonTheme } from './components/Button.theme';
import { DatePickerTheme } from './components/DatePicker.theme';
import { InputTheme } from './components/Input.theme';
import { ModalTheme } from './components/Modal.theme';
import { TextTheme } from './components/Text.theme';

const theme = extendTheme({
  colors: THEME_COLORS,
  fontWeight: FONT_WEIGHTS,
  fonts: { body: `'Satoshi', sans-serif`, heading: `'Satoshi', sans-serif` },

  components: {
    Button: ButtonTheme,
    DatePicker: DatePickerTheme,
    Input: InputTheme,
    Modal: ModalTheme,
    Text: TextTheme,
  },
});

export default theme;
