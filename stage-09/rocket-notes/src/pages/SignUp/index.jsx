import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useState } from "react";

import { Container, Form, Background } from "./style";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api.post("/users", {
      name,
      email,
      password
    }).then(() => {
      alert("Conta criada com sucesso!");
      navigate("/");
    }).catch((error) => {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível efetuar o cadastro. Tente novamente.");
      }
    })
  }

  return (
    <Container>
      <Background />

      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="email"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

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

        <Button
          title="Cadastrar"
          onClick={handleSignUp}
        />

        <Link to="/">
          <ButtonText title="Voltar para o login" isActive />
        </Link>
      </Form>
    </Container>
  );
}
