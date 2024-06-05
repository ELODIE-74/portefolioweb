import React, { useState } from 'react';
import './formcontact.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique d'envoi du formulaire
    console.log('Nom :', name);
    console.log('Email :', email);
    console.log('Message :', message);
    // Réinitialiser les champs du formulaire
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>Vous voulez me contacter ? Alors faites-moi signe !</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </section>
  );
};

export default ContactForm;