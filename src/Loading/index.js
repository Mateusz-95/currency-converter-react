import Clock from "../Clock";
import { LoadingDiv, Header, Content } from "./styled";

const Loading = () => {
  return (
    <LoadingDiv>
      <Clock></Clock>
      <Header>Przelicznik walut</Header>
      <Content>
        Sekundka... <br></br> Ładuję kursy walut z Europejskiego Banku
        Centralnego... 😎
      </Content>
    </LoadingDiv>
  );
};

export default Loading;
