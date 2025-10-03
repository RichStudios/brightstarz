import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  React.useEffect(() => {
    // Initialize feather icons after component mounts
    if (window.feather) {
      window.feather.replace();
    }
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-bg text-white py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 playfair">
            Bringing Setbooks to Life Through Theater
          </h1>
          <p className="text-xl mb-8">
            Educational performances and sensitization campaigns that engage, educate, and inspire Kenyan high school students.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/services" 
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full font-medium transition duration-300"
            >
              Our Services
            </Link>
            <Link 
              to="/gallery" 
              className="bg-transparent hover:bg-white hover:text-gray-800 border-2 border-white px-8 py-3 rounded-full font-medium transition duration-300"
            >
              Watch Performances
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-yellow-500 mb-2">150+</div>
              <div className="text-gray-600">Schools Reached</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-yellow-500 mb-2">25+</div>
              <div className="text-gray-600">Setbooks Performed</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-yellow-500 mb-2">10+</div>
              <div className="text-gray-600">Partner Organizations</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-yellow-500 mb-2">50K+</div>
              <div className="text-gray-600">Students Impacted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 playfair">Our Core Services</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div 
                className="h-48 bg-cover bg-center" 
                style={{backgroundImage: "url('http://static.photos/education/640x360/1')"}}
              ></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-100 p-2 rounded-full mr-3">
                    <i data-feather="book" className="text-yellow-500"></i>
                  </div>
                  <h3 className="text-xl font-bold">Setbook Performances</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Professional dramatization of KCSE setbooks to enhance student understanding and appreciation of literature.
                </p>
                <Link to="/services" className="text-yellow-500 font-medium flex items-center">
                  Learn more <i data-feather="arrow-right" className="ml-2"></i>
                </Link>
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div 
                className="h-48 bg-cover bg-center" 
                style={{backgroundImage: "url('http://static.photos/people/640x360/2')"}}
              ></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-100 p-2 rounded-full mr-3">
                    <i data-feather="users" className="text-yellow-500"></i>
                  </div>
                  <h3 className="text-xl font-bold">Sensitization Campaigns</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Interactive theater programs addressing critical issues like HIV/AIDS, GBV, and hygiene education.
                </p>
                <Link to="/services" className="text-yellow-500 font-medium flex items-center">
                  Learn more <i data-feather="arrow-right" className="ml-2"></i>
                </Link>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div 
                className="h-48 bg-cover bg-center" 
                style={{backgroundImage: "url('http://static.photos/office/640x360/3')"}}
              ></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-100 p-2 rounded-full mr-3">
                    <i data-feather="users" className="text-yellow-500"></i>
                  </div>
                  <h3 className="text-xl font-bold">Partnership Programs</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Collaborating with CBOs and NGOs to deliver impactful educational programs in schools.
                </p>
                <Link to="/services" className="text-yellow-500 font-medium flex items-center">
                  Learn more <i data-feather="arrow-right" className="ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 playfair">Featured Performances</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Watch excerpts from our most popular setbook dramatizations</p>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-xl overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  className="w-full h-96" 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">The River Between</h3>
                <p className="text-gray-600">Complete dramatization of Ngugi wa Thiong'o's classic novel</p>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-xl overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  className="w-full h-96" 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Blossoms of the Savannah</h3>
                <p className="text-gray-600">Powerful performance highlighting key themes</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/gallery"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-yellow-500 hover:bg-yellow-600 transition duration-300"
            >
              View Full Gallery
              <i data-feather="arrow-right" className="ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 playfair">What Our Partners Say</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500 mr-2 flex">
                  <i data-feather="star" className="fill-current"></i>
                  <i data-feather="star" className="fill-current"></i>
                  <i data-feather="star" className="fill-current"></i>
                  <i data-feather="star" className="fill-current"></i>
                  <i data-feather="star" className="fill-current"></i>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "The students' understanding of the setbooks improved dramatically after the performances. Exam results showed significant improvement."
              </p>
              <div className="flex items-center">
                <img 
                  src="http://static.photos/people/200x200/1" 
                  alt="Principal" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Mr. Kamau</h4>
                  <p className="text-gray-500 text-sm">Principal, Nairobi School</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500 mr-2 flex">
                  <i data-feather="star" className="fill-current"></i>
                  <i data-feather="star" className="fill-current"></i>
                  <i data-feather="star" className="fill-current"></i>
                  <i data-feather="star" className="fill-current"></i>
                  <i data-feather="star" className="fill-current"></i>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "Their HIV awareness program was the most engaging we've ever had at our school. Students were talking about it for weeks."
              </p>
              <div className="flex items-center">
                <img 
                  src="http://static.photos/people/200x200/2" 
                  alt="Teacher" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Ms. Atieno</h4>
                  <p className="text-gray-500 text-sm">Guidance Teacher, Mombasa High</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500 mr-2 flex">
                  <i data-feather="star" className="fill-current"></i>
                  <i data-feather="star" className="fill-current"></i>
                  <i data-feather="star" className="fill-current"></i>
                  <i data-feather="star" className="fill-current"></i>
                  <i data-feather="star" className="fill-current"></i>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "Working with BrightStarz has allowed us to reach schools with our GBV prevention message in a way that truly resonates with students."
              </p>
              <div className="flex items-center">
                <img 
                  src="http://static.photos/people/200x200/3" 
                  alt="Director" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Dr. Wanjiku</h4>
                  <p className="text-gray-500 text-sm">Director, Women's Rights CBO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 playfair">Ready to Bring Theater to Your School?</h2>
          <p className="text-xl mb-8">Contact us today to schedule performances or discuss partnership opportunities.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-white hover:bg-gray-100 text-yellow-600 px-8 py-3 rounded-full font-medium transition duration-300"
            >
              Contact Us
            </Link>
            <a 
              href="tel:+254700123456" 
              className="bg-transparent hover:bg-yellow-600 border-2 border-white px-8 py-3 rounded-full font-medium transition duration-300"
            >
              Call +254 700 123456
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;