import React, { useState, useRef } from "react";
import Svg, { Circle } from "react-native-svg";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { withTheme } from "services/ThemeProvider";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import {
  Container,
  ViewSvg,
  ViewFlex,
  ViewBotao,
  BotaoAvancar,
  TextoAvancar,
} from "./styles";
import { Shadow } from "react-native-neomorph-shadows";
import ItemCarousel from "./ItemCarousel";

const Presentation = (props) => {
  const pages = [
    {
      text: "Seja bem-vindo ao Cantoo Speech.",
      animation: require("assets/lotties/voice-animation.json"),
      speed: 0.5,
    },
    {
      text: "É só falar que escrevemos para você.",
      animation: require("assets/lotties/voice-to-text.json"),
      speed: 1,
    },
  ];

  const carouselRef = useRef(null);

  const tamanho = pages.length - 1;

  const [activeSlide, setActiveSlide] = useState(0);

  const snapToItem = (index: number) => setActiveSlide(index);

  const _renderItem = ({ item, index }) => {
    return <ItemCarousel item={item} index={index} />;
  };

  const snapToNext = () => {
    if (activeSlide < tamanho) {
      carouselRef.current.snapToNext();
    } else {
      props.navigation.navigate("main");
    }
  };

  return (
    <Container>
      <ViewSvg>
        <Svg height="100%" width="100%">
          <Circle
            cx={responsiveWidth(75)}
            cy={responsiveHeight(50)}
            r={responsiveFontSize(5)}
            fill={props.theme.softDefault}
          />
          <Circle
            cx={responsiveWidth(85)}
            cy={responsiveHeight(10)}
            r={responsiveFontSize(30)}
            fill={props.theme.darkerDefault}
          />
          <Circle
            cx={responsiveWidth(15)}
            cy={responsiveHeight(70)}
            r={responsiveFontSize(10)}
            fill={props.theme.lighterDefault}
          />
          <Circle
            cx={responsiveWidth(95)}
            cy={responsiveHeight(95)}
            r={responsiveFontSize(20)}
            fill={props.theme.mediumDefault}
          />
        </Svg>
      </ViewSvg>
      <Shadow
        style={{
          shadowOffset: { width: 10, height: 10 },
          shadowOpacity: 0.5,
          shadowColor: props.theme.darkerDefault,
          shadowRadius: 20,
          position: "absolute",
          height: responsiveHeight(70),
          width: responsiveWidth(85),
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          borderRadius: responsiveFontSize(2),
          overflow: "hidden",
        }}
      >
        <ViewFlex flex={9}>
          <Carousel
            data={pages}
            renderItem={_renderItem}
            onSnapToItem={snapToItem}
            sliderWidth={responsiveWidth(85)}
            itemWidth={responsiveWidth(85)}
            ref={carouselRef}
            removeClippedSubviews={false}
          />
          <Pagination
            dotsLength={pages.length}
            activeDotIndex={activeSlide}
            containerStyle={{
              height: responsiveFontSize(5),
              paddingVertical: 0,
            }}
            dotStyle={{
              width: responsiveFontSize(1),
              height: responsiveFontSize(1),
              borderRadius: responsiveFontSize(1),
              backgroundColor: props.theme.default,
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
        </ViewFlex>
        <ViewBotao>
          <BotaoAvancar cor={props.theme.darkerDefault} onPress={snapToNext}>
            <TextoAvancar>
              {activeSlide < tamanho ? "Avançar" : "Entendi"}
            </TextoAvancar>
          </BotaoAvancar>
        </ViewBotao>
      </Shadow>
    </Container>
  );
};

export default withTheme(Presentation);
