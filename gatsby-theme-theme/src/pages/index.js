import { StaticImage } from "gatsby-plugin-image";
import { Container, Heading, Paragraph } from "theme-ui";

export default function Home() {
  return (
    <Container>
      <Heading sx={{ my: 3 }}>Homepage</Heading>
      <Paragraph sx={{ my: 3 }}>
        <StaticImage src="https://placekitten.com/800/600" alt="A kitten" />
      </Paragraph>
    </Container>
  );
}
