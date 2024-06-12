import React, { useState } from 'react';
import './formcontact.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formsubmit.co/minerva.elodie@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      });

      if (response.ok) {
        alert('Formulaire envoyé avec succès !');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert('Une erreur s\'est produite lors de l\'envoi du formulaire.');
      }
    } catch (error) {
      alert('Une erreur s\'est produite lors de l\'envoi du formulaire.');
      console.error('Erreur :', error);
    }
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <p className='titlecontact'>Vous voulez me contacter ? Alors faites-moi signe !</p>
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