import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";
import { Container, Form } from "./style";

import { Link } from "react-router-dom";

import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { api } from "../../services/api";

export function New() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState('');

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  const navigate = useNavigate();

  function handleAddLink() {
    if (!newLink) return;

    setLinks(prevState => [...prevState, newLink]);
    setNewLink('');
  }

  function handleRemoveLink(link) {
    setLinks(prevState => prevState.filter(item => item !== link));
  }

  function handleAddTag() {
    if (!newTag) return;

    setTags(prevState => [...prevState, newTag]);
    setNewTag('');
  }

  function handleRemoveTag(tag) {
    setTags(prevState => prevState.filter(item => item !== tag));
  }

  async function handleNewNote() {
    if (!title) {
      return alert("O campo de título é obrigatório!");
    }

    if (newTag || newLink) {
      return alert("Os campos links ou tags possuem itens que não foram adicionados.");
    }

    await api.post("/notes", {
      title,
      description,
      links,
      tags
    }).then(() => {
      alert("Nota criada com sucesso!");
      setTitle('');
      setDescription('');
      setLinks([]);
      setTags([]);
      navigate(-1);
    }).catch((error) => {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Erro ao criar nota. Tente novamente.");
      }
    });
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">
              <FiArrowLeft /> Voltar
            </Link>
          </header>

          <Input
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}
            value={title}
          />
          <TextArea
            placeholder="Descrição"
            onChange={e => setDescription(e.target.value)}
            value={description}
          />

          <Section title="Links úteis">
            { links.length > 0 && links.map((link, index) =>
              (
                <NoteItem
                  key={index}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                />
              ))
            }
            <NoteItem
              isNew
              placeholder="Novo link"
              onChange={e => setNewLink(e.target.value)}
              value={newLink}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
            { tags.length > 0 && tags.map((tag, index) =>
              (
                <NoteItem
                  key={index}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))
            }
            <NoteItem
              isNew
              placeholder="Novo marcador"
              onChange={e => setNewTag(e.target.value)}
              value={newTag}
              onClick={handleAddTag}
            />
            </div>
          </Section>

          <Button onClick={handleNewNote} title="Salvar" />
        </Form>
      </main>
    </Container>
  );
}
