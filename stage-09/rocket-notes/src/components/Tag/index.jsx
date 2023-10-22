import { Container } from "./style";

export function Tag({ title, ...rest }) {
  return (
    <Container {...rest}>
      <span>{title}</span>
    </Container>
  )
}
