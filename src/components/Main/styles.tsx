import Styled from "styled-components/native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

export const Container = Styled.View`
  flex: 1;
`;

export const ViewSvg = Styled.View`
    height: 100%;
    width: 100%;
    position: absolute;
`;

export const ViewFlex = Styled.View`
  flex: ${(props) => props.flex};
`;

export const ViewFlexCenter = Styled.View`
  flex: ${(props) => props.flex};
  justify-content: center;
  align-items: center;
`;

export const Content = Styled.View`
  background-color: rgba(255, 255, 255, 0.3);
  flex: 1;
`;

export const ViewDescription = Styled.View`
  flex: 6;
  padding-horizontal: ${responsiveWidth(10)};
`;

export const TextDescription = Styled.Text`
  font-size: ${responsiveFontSize(1.75)};
  color: rgb(50, 50, 50);
  text-align: center;
`;

export const ViewSpeech = Styled.View`
  padding-vertical: ${responsiveHeight(5)};
  padding-horizontal: ${responsiveWidth(5)};
  flex: 6;
`;

export const ViewSpeechText = Styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  borderColor: ${(props) => props.cor},
  border-width: 1px;
  border-radius: ${responsiveFontSize(4)};
  padding-horizontal: ${responsiveWidth(5)};
  padding-vertical: ${responsiveHeight(2.5)};
`;

export const TextInputSpeech = Styled.TextInput`
  height: 100%;
  width: 100%;
  text-align-vertical: top;
`;

export const ViewButtons = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-vertical: ${responsiveHeight(2.5)};
  flex-direction: row;
`;

export const BottomButton = Styled.TouchableOpacity`
  border-radius: ${responsiveFontSize(7.5)};
  height: ${responsiveFontSize(7.5)};
  width: ${responsiveFontSize(7.5)};
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
