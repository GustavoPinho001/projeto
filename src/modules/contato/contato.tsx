import React from 'react';
import Header from '../../primario/header';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-gray-700">
      <Header/>
      <div className="h-[93.7vh] flex items-center justify-center">
      
      <div className="w-1/5 p-5 bg-opacity-80 border  backdrop-blur-sm rounded-sm  shadow-md">
        <h1 className="text-2xl text-white font-semibold mb-4">Entre em Contato</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-white font-medium mb-2">Nome</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-medium mb-2">E-mail</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white font-medium mb-2">Mensagem</label>
            <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"></textarea>
          </div>
          <button
            type="submit"
            className="relative bg-black text-white px-4 py-2 rounded-md hover:bg-opacity-70 backdrop-blur-sm focus:ring focus:ring-blue-300"
          >
            Enviar
          </button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default ContactPage;