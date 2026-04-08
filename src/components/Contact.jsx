import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000)); // simulate send
    setStatus('success');
    setLoading(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus(null), 5000);
  };

  const contactItems = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone.replace(/\s/g, '')}`,
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      value: 'Yash Kalyani',
      href: personal.linkedin,
      external: true,
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: personal.location,
      href: null,
    },
  ];

  const inputClass =
    'w-full bg-[#0d0d0d] border border-white/08 rounded-xl px-4 py-3.5 text-[#ececec] font-outfit text-sm placeholder:text-[#444] focus:outline-none focus:border-[#39FF14]/50 focus:ring-1 focus:ring-[#39FF14]/20 transition-all duration-300 hover:border-white/15';

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="orb orb-green w-[600px] h-[600px] -left-40 top-1/2 -translate-y-1/2 opacity-20" />
      <div className="orb orb-blue w-[400px] h-[400px] right-0 bottom-0 opacity-15" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="section-label mb-4 justify-center">Get In Touch</div>
          <h2 className="font-bebas text-white leading-none mb-4" style={{ fontSize: 'clamp(40px, 7vw, 80px)' }}>
            Let's Build Something <span className="text-[#39FF14]">Together</span>
          </h2>
          <p className="font-outfit text-[#666] max-w-lg mx-auto text-base">
            I'm currently open to freelance work and full-time opportunities. Feel free to reach out — I'd love to connect!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* ── Left: Contact Info ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <h3 className="font-outfit font-bold text-[#ececec] text-lg mb-6">Contact Details</h3>

            {contactItems.map((item, i) => {
              const content = (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="glass-card p-5 rounded-2xl border border-white/06 flex items-center gap-4 hover:border-[#39FF14]/25 transition-all group cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#39FF14]/08 border border-[#39FF14]/20 flex items-center justify-center text-[#39FF14] shrink-0 group-hover:bg-[#39FF14]/15 group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-fira text-xs text-[#555] uppercase tracking-wider mb-0.5">{item.label}</div>
                    <div className="font-outfit text-sm text-[#ccc] group-hover:text-[#39FF14] transition-colors truncate max-w-[180px]">
                      {item.value}
                    </div>
                  </div>
                </motion.div>
              );

              return item.href ? (
                <a
                  key={i}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer' : undefined}
                >
                  {content}
                </a>
              ) : (
                <div key={i}>{content}</div>
              );
            })}

            {/* Availability badge */}
            <div className="mt-6 p-5 rounded-2xl border border-[#39FF14]/15 bg-[#39FF14]/05">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#39FF14] animate-pulse-neon" />
                <span className="font-outfit font-semibold text-[#39FF14] text-sm">Available for Work</span>
              </div>
              <p className="font-outfit text-xs text-[#666]">
                Actively seeking frontend roles. Ready to join a team or take on freelance projects immediately.
              </p>
            </div>
          </motion.div>

          {/* ── Right: Form ───────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8 rounded-2xl border border-white/08 hover:border-white/12 transition-all">
              <h3 className="font-outfit font-bold text-[#ececec] text-lg mb-1">Send a Message</h3>
              <p className="font-outfit text-xs text-[#555] mb-8">Usually respond within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block font-fira text-xs text-[#555] uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-fira text-xs text-[#555] uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block font-fira text-xs text-[#555] uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Frontend Developer Role / Collaboration / ..."
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-fira text-xs text-[#555] uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Hi Yash, I'd like to discuss..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Status message */}
                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-2 p-3 rounded-xl text-sm font-outfit ${
                      status === 'success'
                        ? 'bg-[#39FF14]/08 border border-[#39FF14]/25 text-[#39FF14]'
                        : 'bg-red-500/08 border border-red-500/25 text-red-400'
                    }`}
                  >
                    {status === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
                    {status === 'success'
                      ? "Message sent! I'll be in touch soon."
                      : 'Something went wrong. Try again.'}
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-[#39FF14] text-[#070707] font-outfit font-bold py-4 rounded-xl hover:shadow-[0_0_30px_rgba(57,255,20,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99] group"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-[#070707]/30 border-t-[#070707] rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
