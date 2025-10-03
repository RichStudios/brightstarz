import React from 'react';
import { Link } from 'react-router-dom';

const Partners: React.FC = () => {
  React.useEffect(() => {
    // Initialize feather icons after component mounts
    if (window.feather) {
      window.feather.replace();
    }
  }, []);

  return (
    <div>
      {/* Partners Header */}
      <section className="partners-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 playfair">Our Partners</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Collaborating with organizations to deliver impactful educational programs across Kenya
          </p>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 playfair">Trusted Organizations We Work With</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We partner with dedicated organizations to amplify our impact in schools and communities
            </p>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4"></div>
          </div>

          {/* Current Partners */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {/* Partner 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-yellow-100 rounded-full flex items-center justify-center">
                <i data-feather="heart" className="text-yellow-500 w-10 h-10"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Health Awareness CBO</h3>
              <p className="text-gray-600 mb-6">
                Collaborating on HIV/AIDS and health education programs in Western Kenya schools
              </p>
              <div className="text-yellow-500 font-medium">Since 2021</div>
            </div>

            {/* Partner 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-yellow-100 rounded-full flex items-center justify-center">
                <i data-feather="shield" className="text-yellow-500 w-10 h-10"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Women's Rights Foundation</h3>
              <p className="text-gray-600 mb-6">
                GBV prevention programs reaching over 50 schools in Central and Nairobi regions
              </p>
              <div className="text-yellow-500 font-medium">Since 2020</div>
            </div>

            {/* Partner 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-yellow-100 rounded-full flex items-center justify-center">
                <i data-feather="book-open" className="text-yellow-500 w-10 h-10"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Education Trust Kenya</h3>
              <p className="text-gray-600 mb-6">
                Setbook performance sponsorships for underserved schools across the country
              </p>
              <div className="text-yellow-500 font-medium">Since 2022</div>
            </div>

            {/* Partner 4 */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-yellow-100 rounded-full flex items-center justify-center">
                <i data-feather="users" className="text-yellow-500 w-10 h-10"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Youth Empowerment Network</h3>
              <p className="text-gray-600 mb-6">
                Mental health awareness programs targeting secondary school students
              </p>
              <div className="text-yellow-500 font-medium">Since 2021</div>
            </div>

            {/* Partner 5 */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-yellow-100 rounded-full flex items-center justify-center">
                <i data-feather="droplet" className="text-yellow-500 w-10 h-10"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Clean Water Initiative</h3>
              <p className="text-gray-600 mb-6">
                Hygiene and sanitation education programs in arid and semi-arid regions
              </p>
              <div className="text-yellow-500 font-medium">Since 2022</div>
            </div>

            {/* Partner 6 */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-yellow-100 rounded-full flex items-center justify-center">
                <i data-feather="globe" className="text-yellow-500 w-10 h-10"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Global Education Partners</h3>
              <p className="text-gray-600 mb-6">
                International collaboration bringing innovative theater techniques to Kenyan schools
              </p>
              <div className="text-yellow-500 font-medium">Since 2023</div>
            </div>
          </div>

          {/* Partnership Benefits */}
          <div className="bg-yellow-50 rounded-2xl p-12 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 playfair">Benefits of Partnership</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Why organizations choose to partner with us</p>
              <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-yellow-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i data-feather="target" className="w-8 h-8"></i>
                </div>
                <h3 className="font-bold mb-3">Targeted Impact</h3>
                <p className="text-gray-600">Reach specific demographics with tailored educational messages</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i data-feather="bar-chart-2" className="w-8 h-8"></i>
                </div>
                <h3 className="font-bold mb-3">Measurable Results</h3>
                <p className="text-gray-600">Comprehensive reporting on program impact and student engagement</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i data-feather="award" className="w-8 h-8"></i>
                </div>
                <h3 className="font-bold mb-3">Professional Delivery</h3>
                <p className="text-gray-600">Experienced actors and educators ensuring high-quality program execution</p>
              </div>
            </div>
          </div>

          {/* Become a Partner */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 playfair">Interested in Partnering With Us?</h2>
            <p className="text-gray-600 text-xl mb-8 max-w-3xl mx-auto">
              Join our network of organizations making a difference in Kenyan education through theater
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-yellow-500 hover:bg-yellow-600 transition duration-300"
            >
              Start Partnership Discussion
              <i data-feather="arrow-right" className="ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials from Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 playfair">What Our Partners Say</h2>
            <p className="text-gray-600">Hear from organizations we've collaborated with</p>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
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
                "BrightStarz's ability to engage students through theater has dramatically increased the effectiveness of our health education programs. 
                The students remember the messages long after the performance."
              </p>
              <div className="flex items-center">
                <img 
                  src="http://static.photos/people/200x200/4" 
                  alt="Director" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Dr. Wanjiru</h4>
                  <p className="text-gray-500 text-sm">Director, Health Awareness CBO</p>
                </div>
              </div>
            </div>
            
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
                "The professionalism and creativity of the BrightStarz team have made our partnership incredibly successful. 
                They've helped us reach schools we couldn't access through traditional methods."
              </p>
              <div className="flex items-center">
                <img 
                  src="http://static.photos/people/200x200/5" 
                  alt="Program Manager" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Mr. Ochieng</h4>
                  <p className="text-gray-500 text-sm">Program Manager, Education Trust Kenya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;