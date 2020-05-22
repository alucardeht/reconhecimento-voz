import React, { useEffect, useState } from "react";
import Svg, { Circle } from "react-native-svg";
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { withTheme } from "services/ThemeProvider";
import {
  Container,
  ViewSvg,
  ViewFlexCenter,
  Content,
  ViewDescription,
  TextDescription,
  ViewSpeech,
  ViewSpeechText,
  TextInputSpeech,
  ViewButtons,
  BottomButton,
} from "./styles";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import LinearGradient from "react-native-linear-gradient";
import { Shadow } from "react-native-neomorph-shadows";
import Voice from "@react-native-community/voice";
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import LottieView from "lottie-react-native";
import Share from "react-native-share";

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Main = (props) => {
  const [speechText, setSpeechText] = useState("");

  const showShare = speechText !== "";
  const animation = require("assets/lotties/voice-navigation.json");

  useEffect(() => {
    props.navigation.navigate("presentation");
  }, []);

  const startRecording = () => {
    ReactNativeHapticFeedback.trigger("impactLight", options);
    Voice.start("pt-BR");
  };

  const stopRecording = () => {
    Voice.stop();
    ReactNativeHapticFeedback.trigger("notificationSuccess", options);
  };

  const onSpeechResults = (e) => {
    setSpeechText(e.value[0]);
  };

  Voice.onSpeechResults = onSpeechResults;

  const share = () => {
    const shareOptions = {
      message: speechText,
      social: Share.Social,
    };
    Share.open(shareOptions)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        err && console.log(err);
      });
  };

  return (
    <Container>
      <ViewSvg>
        <Svg height="100%" width="100%">
          <Circle
            cx={responsiveWidth(15)}
            cy={responsiveHeight(40)}
            r={responsiveFontSize(10)}
            fill={props.theme.softDefault}
          />
          <Circle
            cx={responsiveWidth(85)}
            cy={responsiveHeight(75)}
            r={responsiveFontSize(25)}
            fill={props.theme.darkerDefault}
          />
          <Circle
            cx={responsiveWidth(70)}
            cy={responsiveHeight(70)}
            r={responsiveFontSize(15)}
            fill={props.theme.lighterDefault}
          />
          <Circle
            cx={responsiveWidth(5)}
            cy={responsiveHeight(100)}
            r={responsiveFontSize(10)}
            fill={props.theme.lighterDefault}
          />
          <Circle
            cx={responsiveWidth(95)}
            cy={responsiveHeight(5)}
            r={responsiveFontSize(20)}
            fill={props.theme.mediumDefault}
          />
        </Svg>
      </ViewSvg>

      <Content>
        <ViewDescription>
          <ViewFlexCenter flex={6}>
            <LottieView source={animation} />
          </ViewFlexCenter>

          <ViewFlexCenter flex={1}>
            <TextDescription>
              Aperte, segure e fale, deixa que escrevemos para você
            </TextDescription>
          </ViewFlexCenter>
        </ViewDescription>

        <ViewSpeech>
          <Shadow
            style={{
              shadowOffset: { width: 2, height: 5 },
              shadowOpacity: 0.3,
              shadowColor: props.theme.darkerDefault,
              shadowRadius: 5,
              height: responsiveHeight(40),
              width: responsiveWidth(90),
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              borderRadius: responsiveFontSize(4),
            }}
          >
            <ViewSpeechText
              cor={`rgba(${props.theme.numbersDarkerDefault}, 0.7)`}
            >
              <TextInputSpeech
                value={speechText}
                onChangeText={setSpeechText}
                multiline={true}
              />
            </ViewSpeechText>
          </Shadow>
        </ViewSpeech>

        <ViewButtons>
          <ViewFlexCenter flex={1} />

          <ViewFlexCenter flex={1}>
            <Shadow
              style={{
                shadowOffset: { width: 2, height: 5 },
                shadowOpacity: 0.3,
                shadowColor: props.theme.darkerDefault,
                shadowRadius: 5,
                height: responsiveFontSize(7.5),
                width: responsiveFontSize(7.5),
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: responsiveFontSize(7.5),
              }}
            >
              <BottomButton
                onPressIn={startRecording}
                onPressOut={stopRecording}
              >
                <LinearGradient
                  colors={[
                    props.theme.softDefault,
                    props.theme.lighterDefault,
                    "#f5a7a7",
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0.5, y: 1.0 }}
                  locations={[0, 0.4, 1]}
                  style={{ height: "100%", width: "100%" }}
                />
                <Icon
                  name="microphone"
                  size={responsiveFontSize(4)}
                  color={props.theme.softDefault}
                  style={{ position: "absolute" }}
                />
              </BottomButton>
            </Shadow>
          </ViewFlexCenter>

          <ViewFlexCenter flex={1}>
            {showShare && (
              <Shadow
                style={{
                  shadowOffset: { width: 2, height: 5 },
                  shadowOpacity: 0.3,
                  shadowColor: props.theme.darkerDefault,
                  shadowRadius: 5,
                  height: responsiveFontSize(7.5),
                  width: responsiveFontSize(7.5),
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  borderRadius: responsiveFontSize(7.5),
                }}
              >
                <BottomButton onPress={share}>
                  <LinearGradient
                    colors={["#b4f2e1", "#58b4ae", "#007892"]}
                    start={{ x: 0.9, y: 0 }}
                    end={{ x: 0.5, y: 1.0 }}
                    locations={[0, 0.4, 0.8]}
                    style={{ height: "100%", width: "100%" }}
                  />
                  <Icon
                    name="share-alt"
                    size={responsiveFontSize(3.5)}
                    color={props.theme.softDefault}
                    style={{ position: "absolute" }}
                  />
                </BottomButton>
              </Shadow>
            )}
          </ViewFlexCenter>
        </ViewButtons>
      </Content>
    </Container>
  );
};

export default withTheme(Main);
