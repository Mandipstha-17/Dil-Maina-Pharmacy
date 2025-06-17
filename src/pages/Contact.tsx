import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from 'lucide-react';

type ContactItemProps = {
  icon: React.ReactNode;
  title: string;
  details: React.ReactNode;
  bgColor: string;
};

const ContactItem = ({ icon, title, details, bgColor }: ContactItemProps) => (
  <div className="flex items-start space-x-4">
    <div className={`p-3 rounded-full ${bgColor}`}>
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
      <div className="text-gray-600">{details}</div>
    </div>
  </div>
);

type ActionColor = 'teal' | 'green';

interface ActionButtonProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: ActionColor;
}

const ActionButton = ({
  href,
  icon,
  title,
  description,
  color,
}: ActionButtonProps) => {
  const bgMap: Record<ActionColor, string> = {
    teal: 'bg-teal-50 hover:bg-teal-100 text-teal-800',
    green: 'bg-green-50 hover:bg-green-100 text-green-800',
  };

  const bg = bgMap[color];

  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : '_self'}
      rel="noopener noreferrer"
      className={`flex items-center p-4 rounded-xl transition-colors duration-200 ${bg}`}
    >
      <div className="mr-4">{icon}</div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm">{description}</p>
      </div>
    </a>
  );
};

const Contact = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're here to help with your healthcare needs. Reach out or visit us today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <ContactItem
                  icon={<Phone className="h-6 w-6 text-teal-600" />}
                  title="Phone Numbers"
                  bgColor="bg-teal-100"
                  details={
                    <>
                      <p>Main: +977-1-4567890</p>
                      <p>Emergency: +977-9818068544</p>
                      <p className="text-sm text-gray-500 mt-1">Available 24/7</p>
                    </>
                  }
                />
                <ContactItem
                  icon={<Mail className="h-6 w-6 text-blue-600" />}
                  title="Email"
                  bgColor="bg-blue-100"
                  details={
                    <>
                      <p>mandeeparha123@gmail.com</p>
                      <p className="text-sm text-gray-500 mt-1">Reply within 24 hours</p>
                    </>
                  }
                />
                <ContactItem
                  icon={<MapPin className="h-6 w-6 text-green-600" />}
                  title="Address"
                  bgColor="bg-green-100"
                  details={
                    <>
                      <p>Chamati</p>
                      <p>Kathmandu, Nepal</p>
                      <p>Postal Code: 44600</p>
                    </>
                  }
                />
                <ContactItem
                  icon={<Clock className="h-6 w-6 text-purple-600" />}
                  title="Operating Hours"
                  bgColor="bg-purple-100"
                  details={
                    <>
                      <p>Sun–Fri: 7:00 AM – 9:30 PM</p>
                      <p>Saturday: 8:00 AM – 9:00 PM</p>
                    </>
                  }
                />
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Quick Actions
              </h2>
              <div className="space-y-4">
                <ActionButton
                  href="tel:+9771456789"
                  icon={<Phone className="h-6 w-6 text-teal-600" />}
                  title="Call Now"
                  description="Speak directly with our pharmacist"
                  color="teal"
                />
                <ActionButton
                  href="https://wa.me/9818068544"
                  icon={<MessageCircle className="h-6 w-6 text-green-600" />}
                  title="WhatsApp"
                  description="Chat with us instantly"
                  color="green"
                />
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full flex flex-col justify-center">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Us on Map</h2>
              <div className="w-full h-80 rounded-lg overflow-hidden">
                <iframe
                  title="Dil Maina Pharmacy Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.786740964413!2d85.294317!3d27.7166222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19d0ff2e60a3%3A0x7ac2fff8c6481393!2sDil%20Maina%20Pharmacy%20%26%20Clinic!5e0!3m2!1sen!2snp!4v1718619286032!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
