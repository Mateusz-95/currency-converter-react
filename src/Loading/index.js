import Clock from "../Clock";
import { LoadingDiv, Header, Content } from "./styled";

const Loading = ({ contentText, errorContent }) => {
  return (
    <LoadingDiv>
      <Clock></Clock>
      <Header>Przelicznik walut</Header>
      <Content
        errorContent={errorContent}
        dangerouslySetInnerHTML={{ __html: contentText }}
      />
    </LoadingDiv>
  );
};

export default Loading;
