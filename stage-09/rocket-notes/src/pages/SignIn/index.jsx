import { FiMail, FiLock } from "react-icons/fi";
import { Container, Form, Background } from "./style";

import { useAuth } from "../../hooks/auth";

import { Link } from "react-router-dom";

import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useState } from "react";

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  function handleSignIn() {
    if (!email || !password) {
      return alert("Preencha todos os campos!");
    }

    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>

        <Input
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <Button onClick={handleSignIn} title="Entrar" />

        <Link to="/register">
          <ButtonText title="Criar conta" isActive />
        </Link>

      </Form>
      <Background />
    </Container>
  );
}
