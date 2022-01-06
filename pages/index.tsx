import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <main className={styles.container}>
        <form>
          <input type="text" placeholder="Nome"></input>
          <input type="email" placeholder="Email"></input>
          <input type="tel" placeholder="Contato"></input>
          <textarea placeholder="Observações" />
          <button type="submit">Salvar</button>
        </form>
        <div className={styles.contatos}>
          <input type="text" placeholder="Buscar"></input>
          <div className={styles.contatoIndividual}>
            <p className={styles.nome}>Nome</p>
            <p>E-mail</p>
            <p>Contato</p>
            <p>tel</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
