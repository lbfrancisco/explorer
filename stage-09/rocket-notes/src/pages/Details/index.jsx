import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { api } from "../../services/api.js";

import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";

import { BackButton, Container, Content, Links } from "./style.js";

export function Details() {
  const [note, setNote] = useState([]);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);

      setNote(response.data);
    }

    fetchNote();
  }, []);

  async function handleDeleteNote() {
    if (window.confirm("Você tem certeza que deseja deletar esta nota?")) {
      await api.delete(`/notes/${params.id}`).then(() => {
        navigate(-1);
      });
    }
  }

  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText onClick={handleDeleteNote} title="Excluir a nota" isActive />

          <h1>{note.title}</h1>
          <p>{note.description}</p>

          <Section title="Links úteis">
            <Links>
              {note.links && note.links.map((link) => (
                <li key={link.id}>
                  <a target="_blank" href={link.url}>{link.url}</a>
                </li>
              ))}
            </Links>
          </Section>
          <Section title="Marcadores">
            {note.tags && note.tags.map((tag) => (
              <Tag key={tag.id} title={tag.name} />
            ))}
          </Section>

          <BackButton type="button" onClick={() => navigate(-1)}>
            Voltar
          </BackButton>
        </Content>
      </main>
    </Container>
  );
}
