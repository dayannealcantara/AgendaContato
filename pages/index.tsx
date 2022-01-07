import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import {database} from '../services/firebase'
import { FormEvent, useState } from "react";

const Home: NextPage = () => {
 const [nome, setNome] = useState('')
 const [email, setEmail] = useState('')
 const [contato, setContato] =  useState('')
 const [observacao, setObservacao] = useState('')

 console.log(nome, email, contato, observacao)

 function gravar(event: FormEvent){
   event.preventDefault()
   const ref = database.ref('contatos')

   const dados = {
     nome,
     email,
     contato,
     observacao
   }
   ref.push(dados)
 }


  return (
    <>
      <main className={styles.container}>
        <form onSubmit={gravar}>
          <h2>Adicione um contato</h2>
          <input type="text" placeholder="Nome" onChange={event => setNome(event.target.value)}></input>
          <input type="email" placeholder="Email" onChange={event => setEmail(event.target.value)} ></input>
          <input type="tel" placeholder="Contato" onChange={event => setContato(event.target.value)} ></input>
          <textarea placeholder="Observações"  onChange={event => setObservacao(event.target.value)}/>
          <button type="submit">Salvar</button>
        </form>
        <div className={styles.contatos}>
          <input type="text" placeholder="Buscar"></input>
          <div className={styles.contatoIndividual}>
            <div className={styles.box}>
              <p className={styles.nome}>Nome</p>
              <div>
                <a>Editar</a>
                <a>Excluir</a>
              </div>
            </div>
            <div className={styles.informacao}>
              <p>E-mail</p>
              <p>Contato</p>
              <p>tel</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
