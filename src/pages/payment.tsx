import React from 'react';

const Payment = () => {
  return (
    <div className="payment-container" style={{ padding: '2rem' }}>
      <h1>Payment Details</h1>
      <form className="payment-form" style={{ maxWidth: '500px', margin: '0 auto' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="cardName">Name on Card</label>
          <input
            type="text"
            id="cardName"
            style={{ width: '100%', padding: '0.5rem' }}
            required
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            style={{ width: '100%', padding: '0.5rem' }}
            required
          />
        </div>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ flex: 1 }}>
            <label htmlFor="expiry">Expiry Date</label>
            <input
              type="text"
              id="expiry"
              placeholder="MM/YY"
              style={{ width: '100%', padding: '0.5rem' }}
              required
            />
          </div>
          <div style={{ flex: 1 }}>
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              style={{ width: '100%', padding: '0.5rem' }}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '0.75rem',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Complete Payment
        </button>
      </form>
    </div>
  );
};

export default Payment;
