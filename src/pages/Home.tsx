import { Link } from 'react-router-dom';
import { Users, FlaskConical, CreditCard, ArrowRight } from 'lucide-react';
import home from '../assets/home.jpg';

const Home = () => {
  const services = [
    {
      icon: Users,
      title: 'Doctor Consultation',
      description:
        'Licensed doctors are available in our pharmacy on every day for general checkups and advice.',
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    },
    {
      icon: FlaskConical,
      title: 'Lab Tests at Home',
      description:
        'Book blood tests and other lab services from the comfort of your home with doorstep sample collection.',
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
    },
    {
      icon: CreditCard,
      title: 'Online Payment',
      description:
        'We accept eSewa, Khalti, and QR payments at our store for fast and secure checkout.',
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
    },
  ];

  return (
    <div className="min-h-screen dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInLeft">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Welcome to
              <span className="text-teal-600 dark:text-teal-400"> Dil Maina Pharmacy & Clinic</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
              Providing trusted healthcare,in-store consultation services with care.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="group inline-flex items-center px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-teal-600 dark:text-teal-400 font-semibold rounded-lg border-2 border-teal-600 dark:border-teal-400 hover:bg-teal-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="relative animate-fadeInRight">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
              <img src={home} alt="Modern Pharmacy Interior" className="w-full h-96 object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-110 transition-all duration-500 animate-float">
              <div className="flex items-center space-x-4">
                <div className="bg-teal-100 dark:bg-teal-900/50 p-3 rounded-full">
                  <Users className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">5+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Years of Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Looping Welcome Box Full Width */}
<div className="w-full bg-teal-100 dark:bg-teal-900 py-4 overflow-hidden">
  <div className="w-max animate-marquee whitespace-nowrap text-teal-900 dark:text-teal-100 text-center text-lg sm:text-xl font-semibold px-4">
    Welcome to Dil Maina Pharmacy & Clinic —  Chamati-15,Kathmandu
  </div>

  {/* Marquee Keyframe Styles */}
  <style>
    {`
      @keyframes marquee {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
      .animate-marquee {
        animation: marquee 20s linear infinite;
      }
    `}
  </style>
</div>
      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We provide complete care — from consultations to doorstep deliveries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`inline-flex p-4 rounded-full ${service.bgColor} mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
                >
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600 dark:bg-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need help or more information?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Our team is always ready to assist you with your healthcare needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <a
              href="tel:+977"
              className="group inline-flex items-center px-8 py-4 bg-teal-700 dark:bg-teal-800 text-white font-semibold rounded-lg hover:bg-teal-800 dark:hover:bg-teal-900 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Custom Keyframes */}
      <style>
        {`
          @keyframes slideLoop {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .animate-slideLoop {
            animation: slideLoop 10s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
