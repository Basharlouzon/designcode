import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";
import Card from "./components/Card";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <ScrollView>
          <TitleBar>
            <Avatar source={require("./assets/avatar.jpg")} />
            <Title>Welcome Back,</Title>
            <Name>Bashar</Name>
          </TitleBar>
          <Subtitle>Continue Learning</Subtitle>
          <ScrollView horizontal={true}>
            <Card
              title="Styled Components"
              image={require("./assets/background1.jpg")}
              caption="React Native"
              logo={require("./assets/logo-react.png")}
              subtitle="5 of 12 sections"
            />
            <Card
              title="Components"
              image={require("./assets/background2.jpg")}
              caption="Adobe XD"
              logo={require("./assets/logo-xd.png")}
              subtitle="5 of 12 sections"
            />
          </ScrollView>
        </ScrollView>
      </Container>
    );
  }
}

const Subtitle = styled.Text`
  color: #a2a2a2;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 50px;
  text-transform: uppercase;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #a2a2a2;
  font-weight: 500;
`;
const Name = styled.Text`
  font-size: 20pt;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;
