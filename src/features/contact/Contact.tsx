import React, { useState } from 'react';
import content from '../../content.json';

const WEB3FORMS_KEY = import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY || '';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [newsletter, setNewsletter] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const data = {
      access_key: WEB3FORMS_KEY,
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      newsletter: newsletter ? 'Yes' : 'No'
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setNewsletter(false);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-light">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-2">{content.contact.title}</h2>
        <p className="text-gray-600 mb-8 sm:mb-12 text-base sm:text-lg">{content.contact.subtitle}</p>
        
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-dark transition-colors"
          />
          
          <input
            type="email"
            name="email"
            placeholder="Email*"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-dark transition-colors"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base resize-y focus:outline-none focus:border-dark transition-colors"
          />
          
          <label className="flex gap-2 text-left text-sm text-gray-600 cursor-pointer">
            <input
              type="checkbox"
              checked={newsletter}
              onChange={(e) => setNewsletter(e.target.checked)}
              className="mt-0.5"
            />
            <span>Sign up for our email list for updates, promotions, and more.</span>
          </label>

          <button 
            type="submit" 
            className="w-full bg-dark text-light px-4 py-3 rounded-lg text-base font-semibold hover:bg-secondary transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed mx-auto"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send'}
          </button>

          {status === 'success' && (
            <p className="mt-2 p-3 rounded-lg bg-green-100 text-green-800">
              Message sent successfully!
            </p>
          )}
          
          {status === 'error' && (
            <p className="mt-2 p-3 rounded-lg bg-red-100 text-red-800">
              Failed to send. Check .env configuration.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

