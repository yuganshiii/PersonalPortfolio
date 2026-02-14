import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a backend
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl mb-4">Contact</h1>
              <div className="flex items-center justify-center mb-8">
                <div className="h-1 w-16 bg-[#D98880] rounded-full"></div>
                <div className="h-3 w-3 bg-[#D98880] rounded-full mx-2"></div>
                <div className="h-1 w-16 bg-[#D98880] rounded-full"></div>
              </div>
              <p className="text-gray-600 text-lg">
                Let's work together! Feel free to reach out for collaborations or just a friendly hello.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div className="bg-white p-8 rounded-sm shadow-sm">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-[#ffd100] p-3 rounded-sm">
                    <Mail className="text-gray-800" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Email</h3>
                    <p className="text-gray-600">hello@hannahyanhan.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-sm shadow-sm">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-[#ffd100] p-3 rounded-sm">
                    <MapPin className="text-gray-800" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Location</h3>
                    <p className="text-gray-600">Currently based in Singapore</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm">
              <h2 className="text-2xl mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#ffd100] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#ffd100] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#ffd100] focus:border-transparent resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-[#ffd100] hover:bg-[#E5CE00] text-gray-800 px-8 py-3 rounded-sm transition-colors flex items-center gap-2"
                >
                  <span>Send Message</span>
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}