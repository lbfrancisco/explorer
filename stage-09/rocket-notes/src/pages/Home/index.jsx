import { useState, useEffect } from "react";

import { RiAddFill, RiSearch2Line } from "react-icons/ri";

import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";

import { Container, Brand, Menu, Search, Content, NewNote } from "./style";

import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

export function Home() {
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [search, setSearch] = useState('');
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data);
    }

    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}&tags=${selectedTags}`);
      setNotes(response.data);
    }

    fetchNotes();

  }, [selectedTags, search]);

  function handleSelectTag(tagName) {
    if (selectedTags.includes(tagName)) {
      return setSelectedTags(prevState => prevState.filter(tag => tag !== tagName));
    }

    setSelectedTags(prevState => [...prevState, tagName]);
  }

  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            title="Todos"
            isActive={selectedTags.length === 0}
            onClick={() => setSelectedTags([])}
          />
        </li>
        { tags && tags.map(tag => (
          <li key={tag.id}>
            <ButtonText
              title={tag.name}
              isActive={selectedTags.includes(tag.name)}
              onClick={() => handleSelectTag(tag.name)}
            />
          </li>
        ))}
      </Menu>

      <Search>
        <Input
          icon={RiSearch2Line}
          placeholder="Pesquisar pelo título"
          onChange={e => setSearch(e.target.value)}
          value={search}
        />
      </Search>

      <Content>
        <Section title="Minhas notas">
          {notes.map(note => (
            <Note
              key={note.id}
              onClick={() => navigate(`/details/${note.id}`)}
              data={{
                title: note.title,
                tags: note.tags
              }} />
          ))}
        </Section>
      </Content>

      <NewNote to="/new">
        <RiAddFill />
        <span>Criar nota</span>
      </NewNote>
    </Container>
  )
}
