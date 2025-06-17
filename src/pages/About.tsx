
import { Clock, MapPin, Award, Heart } from 'lucide-react';
import waiting from '../assets/waiting.jpg'

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Dil Maina Pharmacy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to serving our community with exceptional healthcare services and 
            pharmaceutical care.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Established in 2020, Dil Maina Pharmacy began as a small neighborhood 
                pharmacy with a simple mission: to provide accessible, quality healthcare 
                services to our community.
              </p>
              <p>
                Over the years, we have expanded our services to include doctor consultations, 
                laboratory testing, minor surgical procedures, and modern digital payment 
                solutions. Our commitment to innovation while maintaining personal care 
                has made us a cornerstone of our community's health and wellness.
              </p>
              <p>
                Today, we continue to uphold the same values that founded our pharmacy: 
                compassion, reliability, and excellence in pharmaceutical care. Every 
                prescription filled and every patient served reflects our dedication 
                to your health and well-being.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={waiting}
              alt="Pharmacy team at work"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="bg-teal-100 p-3 rounded-full">
                  <Award className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">1000+</p>
                  <p className="text-sm text-gray-600">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-lg text-gray-600">
              Guiding principles that shape everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="bg-teal-100 p-4 rounded-full w-fit mb-6">
                <Heart className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                "To provide exceptional pharmaceutical care and comprehensive healthcare 
                services that improve the quality of life for every individual in our 
                community, ensuring accessibility, affordability, and excellence in 
                everything we do."
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="bg-blue-100 p-4 rounded-full w-fit mb-6">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Values</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Compassion:</strong> Treating every patient with empathy and care</li>
                <li>• <strong>Integrity:</strong> Maintaining the highest ethical standards</li>
                <li>• <strong>Excellence:</strong> Pursuing continuous improvement in our services</li>
                <li>• <strong>Community:</strong> Being an active partner in community health</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Location & Hours */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <MapPin className="h-8 w-8 text-teal-600 mr-3" />
              <h3 className="text-2xl font-semibold text-gray-900">Our Location</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">
                <strong>Address:</strong><br />
                Dil Maina Pharmacy & Clinic,<br />
                Kathmandu, Nepal<br />
                Postal Code: 44600
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> +977-01-4977991-<br />
                <strong>Emergency:</strong> +977-9818068544/9851186986<br />
                <strong>Email:</strong> pharmacy.dilmaina78@gmail.com
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <Clock className="h-8 w-8 text-teal-600 mr-3" />
              <h3 className="text-2xl font-semibold text-gray-900">Working Hours</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="font-medium text-gray-900">Sunday - Saturday</span>
                <span className="text-gray-600">7:00 AM - 9:30 PM</span>
              </div>
              <div className="mt-4 p-4 bg-red-50 rounded-lg">
                <p className="text-sm font-medium text-red-800">
                  Emergency services available 24/7
                </p>
                <p className="text-sm text-red-600">Call: +977-9818068544</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;