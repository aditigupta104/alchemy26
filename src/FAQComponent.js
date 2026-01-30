import React, { useState, useEffect } from 'react';
import faqData from './faqData.json';

const FAQComponent = () => {
  const [faqs, setFaqs] = useState([]);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    setFaqs(faqData);
  }, []);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="faq-section" id="faqs">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq) => (
          <div key={faq.id} className={`faq-item ${openFaq === faq.id ? 'open' : ''}`}>
            <div className="faq-ques" onClick={() => toggleFaq(faq.id)}>
              <span>{faq.question}</span>
              <span className={`faq-arrow ${openFaq === faq.id ? 'open' : ''}`}>
                ▼
              </span>
            </div>
            <div className={`faq-ans ${openFaq === faq.id ? 'show' : ''}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQComponent;
