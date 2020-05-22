import React from "react";
import LottieView from "lottie-react-native";
import { ViewFlex, ViewTextoCarousel, TextoCarousel } from "./styles";

const ItemCarousel = (props) => {
  return (
    <>
      <ViewFlex flex={6}>
        <LottieView
          source={props.item.animation}
          autoPlay
          loop
          speed={props.item.speed}
        />
      </ViewFlex>
      <ViewTextoCarousel>
        <TextoCarousel>{props.item.text}</TextoCarousel>
      </ViewTextoCarousel>
    </>
  );
};

export default React.memo(ItemCarousel);
