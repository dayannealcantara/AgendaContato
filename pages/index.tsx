import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { database } from "../services/firebase";
import { FormEvent, useState, useEffect } from "react";

type contato = {
  chave: string;
  nome: string;
  email: string;
  contato: string;
  observacao: string;
};

const Home: NextPage = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [contato, setContato] = useState("");
  const [observacao, setObservacao] = useState("");

  const [contatos, setContatos] = useState<contato[]>();

  useEffect(() => {
    const refContatos = database.ref("contatos");

    refContatos.on("value", (resultado) => {
      const resultadoContatos = Object.entries<contato>(
        resultado.val() ?? {}
      ).map(([chave, valor]) => {
        return {
          chave: chave,
          nome: valor.nome,
          email: valor.email,
          contato: valor.contato,
          observacao: valor.observacao,
        };
      });

      setContatos(resultadoContatos);
    });
  }, []);

  function gravar(event: FormEvent) {
    event.preventDefault();
    const ref = database.ref("contatos");

    const dados = {
      nome,
      email,
      contato,
      observacao,
    };
    ref.push(dados);

    setNome("");
    setEmail("");
    setContato("");
    setObservacao("");
  }

  return (
    <>
      <main className={styles.container}>
        <form onSubmit={gravar}>
          <h2>Adicione um contato</h2>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          ></input>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></input>
          <input
            type="tel"
            placeholder="Contato"
            value={contato}
            onChange={(event) => setContato(event.target.value)}
          ></input>
          <textarea
            placeholder="Observações"
            value={observacao}
            onChange={(event) => setObservacao(event.target.value)}
          />
          <button type="submit">Salvar</button>
        </form>
        <div className={styles.contatos}>
          <input type="text" placeholder="Buscar"></input>
          {contatos?.map((contato) => {
            return (
              <div key={contato.email} className={styles.contatoIndividual}>
                <div className={styles.box}>
                  <p className={styles.nome}>{contato.nome}</p>
                  <div>
                    <a>Editar</a>
                    <a>Excluir</a>
                  </div>
                </div>
                <div className={styles.informacao}>
                  <p>{contato.email}</p>
                  <p>{contato.contato}</p>
                  <p>{contato.observacao}</p>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </>
  );
};

export default Home;
