
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact-section" className="py-24 bg-stone-50 relative overflow-hidden border-t border-stone-200">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-50 hidden lg:block -skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-amber-600 font-bold uppercase tracking-[0.3em] text-xs">Get in Touch</span>
              <h2 className="text-4xl md:text-6xl font-black text-stone-900 tracking-tight leading-tight italic">Contact Us.</h2>
            </div>
            <p className="text-stone-600 text-lg leading-relaxed font-light">
              Have a question about our menu, private events, or just want to say hello? Our team is here to assist you with any inquiries you may have. We strive to respond to all messages within 24 hours.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center bg-stone-900 rounded-full group-hover:bg-amber-500 transition-colors">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 uppercase text-xs tracking-widest">Phone</h4>
                  <p className="text-stone-500 font-bold">+252-611003090</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center bg-stone-900 rounded-full group-hover:bg-amber-500 transition-colors">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 uppercase text-xs tracking-widest">Email</h4>
                  <p className="text-stone-500 font-bold">concierge@carshi.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 shadow-2xl border-t-4 border-amber-500 rounded-none transform transition-all">
            {submitted ? (
              <div className="text-center py-10 animate-[fadeIn_0.5s_ease-out]">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-stone-900 mb-2">Message Sent</h3>
                <p className="text-stone-500 mb-6 italic">Thank you for reaching out. A member of our team will contact you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 bg-stone-900 text-white font-bold uppercase tracking-widest text-xs hover:bg-stone-800"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-stone-500">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:border-amber-500 focus:ring-0 outline-none transition-all rounded-none"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-stone-500">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:border-amber-500 focus:ring-0 outline-none transition-all rounded-none"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-stone-500">Subject</label>
                  <input 
                    required
                    type="text" 
                    placeholder="General Inquiry"
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:border-amber-500 outline-none transition-all rounded-none"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-stone-500">Message</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:border-amber-500 outline-none transition-all rounded-none resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button 
                  disabled={isSubmitting}
                  className="w-full py-5 bg-stone-900 text-white font-bold uppercase tracking-widest hover:bg-stone-800 transition-colors disabled:bg-stone-400 group flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
