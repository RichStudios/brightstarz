import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  React.useEffect(() => {
    // Initialize feather icons after component mounts
    if (window.feather) {
      window.feather.replace();
    }
  }, []);

  return (
    <div>
      {/* Services Header */}
      <section className="bg-yellow-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 playfair">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive educational theater and sensitization programs designed for Kenyan high schools
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Setbook Performances */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="bg-yellow-100 p-4 rounded-full inline-block mb-6">
                <i data-feather="book" className="text-yellow-500 w-8 h-8"></i>
              </div>
              <h2 className="text-3xl font-bold mb-6 playfair">Setbook Performances</h2>
              <p className="text-gray-600 mb-6">
                Professional dramatization of KCSE setbooks to enhance student understanding and appreciation of literature. 
                Our performances bring characters to life and make complex themes accessible and memorable.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <i data-feather="check-circle" className="text-yellow-500 mr-3"></i>
                  Complete novel dramatizations
                </li>
                <li className="flex items-center">
                  <i data-feather="check-circle" className="text-yellow-500 mr-3"></i>
                  Character analysis through performance
                </li>
                <li className="flex items-center">
                  <i data-feather="check-circle" className="text-yellow-500 mr-3"></i>
                  Theme exploration workshops
                </li>
                <li className="flex items-center">
                  <i data-feather="check-circle" className="text-yellow-500 mr-3"></i>
                  Post-performance Q&A sessions
                </li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="http://static.photos/education/640x480/1" 
                alt="Setbook Performance" 
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Sensitization Campaigns */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="http://static.photos/people/640x480/2" 
                  alt="Sensitization Campaign" 
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-yellow-100 p-4 rounded-full inline-block mb-6">
                <i data-feather="users" className="text-yellow-500 w-8 h-8"></i>
              </div>
              <h2 className="text-3xl font-bold mb-6 playfair">Sensitization Campaigns</h2>
              <p className="text-gray-600 mb-6">
                Interactive theater programs addressing critical social issues affecting Kenyan youth. 
                Our campaigns use drama to engage students in meaningful conversations about important topics.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <i data-feather="check-circle" className="text-yellow-500 mr-3"></i>
                  HIV/AIDS awareness programs
                </li>
                <li className="flex items-center">
                  <i data-feather="check-circle" className="text-yellow-500 mr-3"></i>
                  Gender-based violence prevention
                </li>
                <li className="flex items-center">
                  <i data-feather="check-circle" className="text-yellow-500 mr-3"></i>
                  Hygiene and sanitation education
                </li>
                <li className="flex items-center">
                  <i data-feather="check-circle" className="text-yellow-500 mr-3"></i>
                  Mental health awareness
                </li>
              </ul>
            </div>
          </div>

          {/* Partnership Programs */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-yellow-100 p-4 rounded-full inline-block mb-6">
                <i data-feather="users" className="text-yellow-500 w-8 h-8"></i>
              </div>
              <h2 className="text-3xl font-bold mb-6 playfair">Partnership Programs</h2>
              <p className="text-gray-600 mb-6">
                Collaborating with CBOs and NGOs to deliver impactful educational programs in schools. 
                We work with organizations to create customized theater programs that align with their mission and goals.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <i data-feather="check-circle" className="text-yellow-500 mr-3"></i>
                  Custom campaign development
                </li>
                <li className="flex items-center">
                  <i data-feather="check-circle" className="text-yellow-500 mr-3"></i>
                  Multi-school tour coordination
                </li>
                <li className="flex items-center">
                  <i data-feather="check-circle" className="text-yellow-500 mr-3"></i>
                  Impact assessment reporting
                </li>
                <li className="flex items-center">
                  <i data-feather="check-circle" className="text-yellow-500 mr-3"></i>
                  Long-term program partnerships
                </li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="http://static.photos/office/640x480/3" 
                alt="Partnership Programs" 
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 playfair">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From initial consultation to final performance, we ensure every program meets your needs
            </p>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yellow-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="font-bold mb-2">Consultation</h3>
              <p className="text-gray-600 text-sm">We discuss your needs and objectives</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="font-bold mb-2">Customization</h3>
              <p className="text-gray-600 text-sm">We tailor the program to your requirements</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="font-bold mb-2">Performance</h3>
              <p className="text-gray-600 text-sm">Professional delivery at your school</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="font-bold mb-2">Follow-up</h3>
              <p className="text-gray-600 text-sm">Assessment and feedback collection</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 playfair">Ready to Book Our Services?</h2>
          <p className="text-xl mb-8">Contact us today to discuss how we can bring educational theater to your school</p>
          <Link 
            to="/contact" 
            className="inline-block bg-white hover:bg-gray-100 text-yellow-600 px-8 py-3 rounded-full font-medium transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;