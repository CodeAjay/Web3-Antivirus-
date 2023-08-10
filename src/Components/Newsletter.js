import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement your logic to submit the email to a backend or API
    console.log('Email submitted:', email);
    setEmail('');
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div>
        <section className="newsletter">
            <div className='container'>
            <h1>Subscribe to our Newsletter</h1>
            <p>Be the first to know about new threats, new features, and updates to Web3 Antivirus.</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
                <button type="submit">Subscribe</button>
            </form>
            <p>No spam No commitment Opt out anytime</p>
            </div>
        </section>
    </div>
  );
};

export default Newsletter;
