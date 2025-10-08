import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    school: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  React.useEffect(() => {
    // Initialize feather icons after component mounts
    if (window.feather) {
      window.feather.replace();
    }
  }, []);

  return (
    <div>
      {/* Contact Header */}
      <section className="contact-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 playfair">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Reach out to discuss how we can bring educational theater to your school
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 playfair">Send Us a Message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent" 
                      required 
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent" 
                  />
                </div>
                <div>
                  <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-2">
                    School/Organization
                  </label>
                  <input 
                    type="text" 
                    id="school" 
                    name="school" 
                    value={formData.school}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent" 
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select 
                    id="service" 
                    name="service" 
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="setbook">Setbook Performances</option>
                    <option value="sensitization">Sensitization Campaigns</option>
                    <option value="partnership">Partnership Programs</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent" 
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-medium transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 playfair">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <i data-feather="map-pin" className="text-yellow-500 w-6 h-6"></i>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Address</h3>
                    <p className="text-gray-600">Nairobi, Kenya</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <i data-feather="phone" className="text-yellow-500 w-6 h-6"></i>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Phone</h3>
                    <p className="text-gray-600">+254 700 005399</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <i data-feather="mail" className="text-yellow-500 w-6 h-6"></i>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Email</h3>
                    <p className="text-gray-600">info@brightstarzproduction.com</p>
                  </div>
                </div>

              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/share/1BU1g1bj3u/" className="bg-gray-100 hover:bg-yellow-100 p-3 rounded-full transition duration-300">
                    <i data-feather="facebook" className="text-gray-600 hover:text-yellow-600 w-5 h-5"></i>
                  </a>
                  <a href="https://x.com/brightstarz_prod" className="bg-gray-100 hover:bg-yellow-100 p-3 rounded-full transition duration-300">
                    <svg className="text-gray-600 hover:text-yellow-600 w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-yellow-100 p-3 rounded-full transition duration-300">
                    <i data-feather="instagram" className="text-gray-600 hover:text-yellow-600 w-5 h-5"></i>
                  </a>
                  <a href="https://www.youtube.com/@brightstarz-arts" className="bg-gray-100 hover:bg-yellow-100 p-3 rounded-full transition duration-300">
                    <i data-feather="youtube" className="text-gray-600 hover:text-yellow-600 w-5 h-5"></i>
                  </a>
                  <a href="https://tiktok.com/@brightstarz6" className="bg-gray-100 hover:bg-yellow-100 p-3 rounded-full transition duration-300">
                    <svg className="text-gray-600 hover:text-yellow-600 w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 playfair">Frequently Asked Questions</h2>
            <p className="text-gray-600">Find answers to common questions about our services</p>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4"></div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-bold mb-3">How far in advance should we book performances?</h3>
              <p className="text-gray-600">
                We recommend booking at least 2-3 weeks in advance to ensure availability. 
                For peak seasons (exam periods), we suggest booking 4-6 weeks ahead.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-bold mb-3">What is the typical duration of a performance?</h3>
              <p className="text-gray-600">
                Most performances last 60-90 minutes, including a 15-minute Q&A session. 
                Sensitization campaigns can be tailored to fit your schedule.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-bold mb-3">Do you travel outside of Nairobi?</h3>
              <p className="text-gray-600">
                Yes, we travel nationwide. Travel costs are calculated based on distance and included in the quotation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-bold mb-3">Can performances be customized for our specific needs?</h3>
              <p className="text-gray-600">
                Absolutely! We work with schools to tailor performances to highlight specific themes or address particular student needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
