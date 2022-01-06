import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

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

        <div>
          <input type="text" placeholder="Buscar"></input>
        </div>
      </main>
    </>
  );
};

export default Home;
