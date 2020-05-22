import Styled from "styled-components/native";
import {
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

export const Container = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ViewSvg = Styled.View`
    height: 100%;
    width: 100%;
`;

export const ViewFlex = Styled.View`
  flex: ${(props) => props.flex};
`;

export const ViewTextoCarousel = Styled.View`
  flex: 2;
  padding-horizontal: ${responsiveWidth(5)};
  justify-content: center;
  align-items: center;
`;

export const TextoCarousel = Styled.Text`
  font-size: ${responsiveFontSize(2)};
  color: rgb(50, 50, 50);
  text-align: center;
`;

export const ViewBotao = Styled.View`
  flex: 1;
  padding-horizontal: ${responsiveFontSize(1)};
  padding-vertical: ${responsiveFontSize(1)};
`;

export const BotaoAvancar = Styled.TouchableOpacity`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.cor};
  justify-content: center;
  align-items: center;
  border-radius: ${responsiveFontSize(1)};
`;

export const TextoAvancar = Styled.Text`
  color: #fff;
  font-size: ${responsiveFontSize(2)};
`;
