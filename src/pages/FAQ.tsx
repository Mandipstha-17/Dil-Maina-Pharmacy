import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: "Do you accept prescriptions via phone?",
      answer:
        "Yes, we accept prescription orders over the phone for your convenience. Simply call us at +977-1-4567890 with your prescription details, and we'll prepare your medications for pickup or delivery. Please have your prescription information ready when you call, and ensure that the prescription is valid and not expired.",
    },
    {
      question: "When is the doctor available for consultation?",
      answer:
        "Our resident doctor is available for consultations every day throughout the day, based on the doctor's availability. We recommend calling ahead to book an appointment.",
    },
    {
      question: "How can I pay online for my purchases?",
      answer:
        "We offer multiple convenient online payment options including eSewa digital wallet, QR code payments, and mobile banking integration. All transactions are processed securely with instant confirmation. You can also pay through our QR code system for contactless payments at the pharmacy.",
    },
    {
      question: "Do you offer home delivery services?",
      answer:
        "Home delivery is not available at the moment. We're working on it and hope to offer the service soon—thank you for your patience!",
    },
    {
      question: "What types of lab tests can I book for home collection?",
      answer:
        "We offer a comprehensive range of lab tests including blood tests (CBC, blood sugar, lipid profile), urine analysis, stool examination, and other routine diagnostic tests. Our trained technicians collect samples from your home between 7:00 AM and 2:00 PM daily. Reports are typically available within 24 hours and can be delivered digitally.",
    },
    {
      question: "What should I do in case of a medical emergency?",
      answer:
        "For medical emergencies, call our 24/7 emergency line at +977-1-4567899. If it's a life-threatening emergency, please call 911 or go to the nearest hospital emergency room immediately. Our emergency line can provide guidance, medication information, and direct you to appropriate care when needed.",
    },
  ];

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our services, operating hours,
            and policies. Can't find what you're looking for? Contact us directly.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full px-8 py-6 text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-inset"
                onClick={() => toggleItem(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.includes(index) ? (
                      <ChevronUp className="h-6 w-6 text-teal-600" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                </div>
              </button>

              {openItems.includes(index) && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our friendly staff is always ready to help you with any questions or concerns.
            Don't hesitate to reach out to us through any of the following methods.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+97714567890"
              className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors duration-200"
            >
              Call: +977-1-4567890
            </a>
            <a
              href="mailto:gorkhalipathology75@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-white text-teal-600 font-semibold rounded-lg border-2 border-teal-600 hover:bg-teal-50 transition-colors duration-200"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
