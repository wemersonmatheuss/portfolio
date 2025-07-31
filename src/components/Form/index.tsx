import React, { useState } from "react";
import styles from "./styles.module.css";

export function Form() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
  });

  const [popupAberto, setPopupAberto] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData();
    data.append("nome", formData.nome);
    data.append("telefone", formData.telefone);
    data.append("email", formData.email);

    try {
      await fetch("https://formcarry.com/s/S_33fK6Ukdy", {
        method: "POST",
        body: data,
      });
    }catch {
       // ignorar erro, porque o popup vai abrir mesmo assim
    }

    setFormData({ nome: "", telefone: "", email: "" });
  }

  // Função para abrir o popup no clique do botão
  function abrirPopup() {
    setPopupAberto(true);
  }

  function fecharPopup() {
    setPopupAberto(false);
  }

  return (
    <div className={styles.container} id="form">
      <h2>Preencha essas informações que eu mesmo entro em contato com você!</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="telefone"
          placeholder="Telefone"
          value={formData.telefone}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Aqui adiciona o onClick para abrir popup no botão */}
        <button
          type="submit"
          className={styles.buttonEnviar}
          onClick={abrirPopup}
        >
          Enviar
        </button>
      </form>

      {/* Popup sempre que abrir */}
      {popupAberto && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <p>Obrigado pelo contato! Em breve entrarei em contato com você.</p>
            <button onClick={fecharPopup} className={styles.buttonFechar}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
