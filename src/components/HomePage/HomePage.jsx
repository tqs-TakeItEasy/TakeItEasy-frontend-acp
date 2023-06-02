import { Typography, Button } from 'antd';
import { RocketOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const HomePage = () => {
  return (
    <div style={{
      textAlign: 'center',
    }}>
      <Title>Welcome to Take It Easy</Title>
      <Paragraph data-testid="HomePage">
        We make delivery fast and hassle-free.
        <br />
        With Take It Easy, you can send and receive packages with ease.
      </Paragraph>
    </div>
  );
};

export default HomePage;