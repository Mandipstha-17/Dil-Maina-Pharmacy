import { 
  Users, 
  Scissors, 
  FlaskConical, 
  CreditCard, 
  Clock, 
  MapPin,
  Phone,
  Calendar
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: 'Doctor Consultation at Pharmacy',
      description: 'Professional medical consultation with experienced doctors available at our pharmacy.',
      details: [
        'Available on Everyday',
        'Consultation hours: May vary according to doctor',
        'General health checkups and consultations',
        'Prescription reviews and medication counseling',
        'Blood pressure and basic health monitoring'
      ],
      schedule: 'Sun, Mon, Tue, Wed, Thurs, Fri, Sat | 9:00 AM - 12:00 PM',
      color: 'blue'
    },
    {
      icon: Scissors,
      title: 'Minor Surgery & Dressing Room',
      description: 'Professional minor surgical procedures and wound care services in a sterile environment.',
      details: [
        'Wound cleaning and dressing',
        'Minor surgical procedures',
        'Suture removal and aftercare',
        'Injection administration',
        'First aid and emergency care'
      ],
      schedule: 'Available during pharmacy hours',
      color: 'red'
    },
    {
      icon: FlaskConical,
      title: 'Home Lab Test Booking',
      description: 'Convenient laboratory testing services with home sample collection available.',
      details: [
        'Blood tests and analysis',
        'Urine and stool examinations',
        'Home sample collection service',
        'Fast and accurate results',
        'Digital report delivery'
      ],
      schedule: 'Collection: 7:00 AM - 2:00 PM daily',
      color: 'green'
    },
    {
      icon: CreditCard,
      title: 'Online Payment Support',
      description: 'Modern digital payment solutions for your convenience and safety.',
      details: [
        'eSewa digital wallet payments',
        'QR code payment system',
        'Mobile banking integration',
        'Secure transaction processing',
        'Instant payment confirmation'
      ],
      schedule: 'Available 24/7',
      color: 'purple'
    },
    {
      icon: Clock,
      title: 'Video X-ray Service',
      description: 'Real-time diagnostic imaging with advanced video X-ray technology.',
      details: [
        'High-resolution imaging',
        'On-site and on-demand scanning',
        'Expert technician assistance',
        'Quick report generation',
        'Doctor-reviewed reports'
      ],
      schedule: 'Available during working hours',
      color: 'blue'
    },
    {
      icon: Clock,
      title: 'ECG & ECHO',
      description: 'Cardiac diagnostic services including Electrocardiogram and Echocardiogram.',
      details: [
        'Heart rhythm and electrical activity monitoring',
        'Non-invasive heart imaging (ECHO)',
        'Performed by trained professionals',
        'Result consultation with doctors',
        'Safe and quick procedure'
      ],
      schedule: '8:00 AM - 1:00 PM, Sun–Fri',
      color: 'red'
    },
    {
      icon: FlaskConical,
      title: 'Pathology Lab Services',
      description: 'Comprehensive pathology services for accurate diagnostics.',
      details: [
        'Complete blood counts',
        'Thyroid, liver, kidney tests',
        'Diabetes and cholesterol panels',
        'Pregnancy and hormone testing',
        'Certified lab technicians'
      ],
      schedule: 'Samples collected 7:00 AM – 12:00 PM daily',
      color: 'green'
    },
    {
      icon: Calendar,
      title: 'Vaccination Services',
      description: 'Routine and travel vaccinations for all age groups.',
      details: [
        'Immunizations for children and adults',
        'COVID-19 vaccine support',
        'Travel health vaccines',
        'Maintained cold chain supply',
        'Certified practitioners'
      ],
      schedule: '9:00 AM - 5:00 PM, Sun–Fri',
      color: 'purple'
    },
    {
      icon: Users,
      title: 'Free Medical Counselling',
      description: 'Get professional health guidance free of charge from our in-house staff.',
      details: [
        'Lifestyle and wellness advice',
        'Medication and treatment guidance',
        'No appointment needed',
        'Walk-in anytime',
        'Friendly staff and environment'
      ],
      schedule: 'Available during pharmacy hours',
      color: 'blue'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-100',
        text: 'text-blue-600',
        border: 'border-blue-200',
        accent: 'bg-blue-600'
      },
      red: {
        bg: 'bg-red-100',
        text: 'text-red-600',
        border: 'border-red-200',
        accent: 'bg-red-600'
      },
      green: {
        bg: 'bg-green-100',
        text: 'text-green-600',
        border: 'border-green-200',
        accent: 'bg-green-600'
      },
      purple: {
        bg: 'bg-purple-100',
        text: 'text-purple-600',
        border: 'border-purple-200',
        accent: 'bg-purple-600'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare services designed to meet all your medical needs 
            with professional care and modern convenience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 ${colors.border} overflow-hidden`}
              >
                <div className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`p-4 rounded-full ${colors.bg}`}>
                      <service.icon className={`h-8 w-8 ${colors.text}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Service Includes:</h4>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className={`w-2 h-2 rounded-full ${colors.accent} mt-2`}></div>
                          <span className="text-gray-700 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`p-4 ${colors.bg} rounded-lg flex items-center space-x-3`}>
                    <Clock className={`h-5 w-5 ${colors.text}`} />
                    <span className={`font-medium ${colors.text}`}>{service.schedule}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Ready to Book a Service?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-teal-100 p-4 rounded-full w-fit mx-auto mb-4">
                <Phone className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <a href="tel:+97714567890" className="text-gray-600 hover:underline">
                +977-01-4977991
              </a>
              <p className="text-sm text-gray-500">For appointments and inquiries</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">Chamati</p>
              <p className="text-sm text-gray-500">Kathmandu, Nepal</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-4">
                <Calendar className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Schedule</h3>
              <p className="text-gray-600">Sun-Sat: 7AM-9PM</p>
              <p className="text-sm text-gray-500">Extended weekend hours</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="tel:+977-01-4977991"
              className="inline-flex items-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors duration-200"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now to Book
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
