import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { Mail, Linkedin, Github, Instagram } from 'lucide-react';

const ContactSection = () => {
  const formRef = useRef();
  const [statusMessage, setStatusMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatusMessage('✅ Message sent successfully!');
      reset();
    } catch (error) {
      setStatusMessage('❌ Failed to send message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-pink-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-red-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-700 text-xl max-w-2xl mx-auto mt-4">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Social Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-pink-700">Let's Connect</h3>
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'gokulpriyan781@gmail.com',
                  href: 'mailto:gokulpriyan781@gmail.com',
                },
                {
                  icon: Linkedin,
                  label: 'LinkedIn',
                  value: '/in/gpriyan',
                  href: 'https://www.linkedin.com/in/gpriyan/',
                },
                {
                  icon: Github,
                  label: 'GitHub',
                  value: '/6127613876-1',
                  href: 'https://github.com/6127613876-1',
                },
                {
                  icon: Instagram,
                  label: 'Instagram',
                  value: '@itz_gokul_cbg',
                  href: 'https://www.instagram.com/itz_gokul_cbg/',
                },
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-5 bg-white rounded-xl border border-pink-200 hover:shadow-md transition-shadow"
                >
                  <contact.icon className="text-pink-600" size={24} />
                  <div>
                    <div className="font-semibold text-lg text-gray-800">{contact.label}</div>
                    <div className="text-sm text-gray-600">{contact.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white border border-pink-200 rounded-xl p-8 space-y-6 shadow-md"
            >
              <div>
                <label className="block text-lg font-medium text-gray-800 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-5 py-3 outline-none border border-pink-50 rounded-lg text-base focus:ring-2 focus:ring-pink-200"
                />
                {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-800 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: 'Invalid email format',
                    },
                  })}
                  className="w-full px-5 py-3 outline-none border border-pink-50 rounded-lg text-base focus:ring-2 focus:ring-pink-200"
                />
                {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-800 mb-2">Message</label>
                <textarea
                  rows="6"
                  placeholder="Tell me about your project or just say hello!"
                  {...register('message', { required: 'Message is required' })}
                  className="w-full px-5 py-3 outline-none border border-pink-50 rounded-lg text-base focus:ring-2 focus:ring-pink-200 resize-none"
                />
                {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-gradient-to-r outline-none from-pink-500 to-red-400 text-white py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {statusMessage && (
                <p className="text-center mt-4 text-sm font-medium text-green-600">{statusMessage}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
