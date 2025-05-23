'use client';

import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const PrivacyPolicy = () => {
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const sections = [
    { id: '1', title: 'WHAT INFORMATION DO WE COLLECT?', content: 'section1' },
    { id: '2', title: 'HOW DO WE PROCESS YOUR INFORMATION?', content: 'section2' },
    { id: '3', title: 'WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?', content: 'section3' },
    { id: '4', title: 'WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?', content: 'section4' },
    { id: '5', title: 'DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?', content: 'section5' },
    { id: '6', title: 'HOW DO WE HANDLE YOUR SOCIAL LOGINS?', content: 'section6' },
    { id: '7', title: 'HOW LONG DO WE KEEP YOUR INFORMATION?', content: 'section7' },
    { id: '8', title: 'HOW DO WE KEEP YOUR INFORMATION SAFE?', content: 'section8' },
    { id: '9', title: 'DO WE COLLECT INFORMATION FROM MINORS?', content: 'section9' },
    { id: '10', title: 'WHAT ARE YOUR PRIVACY RIGHTS?', content: 'section10' },
    { id: '11', title: 'CONTROLS FOR DO-NOT-TRACK FEATURES', content: 'section11' },
    { id: '12', title: 'DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?', content: 'section12' },
    { id: '13', title: 'DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?', content: 'section13' },
    { id: '14', title: 'DO WE MAKE UPDATES TO THIS NOTICE?', content: 'section14' },
    { id: '15', title: 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?', content: 'section15' },
    { id: '16', title: 'HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?', content: 'section16' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600 mb-2">Health Master</p>
          <p className="text-sm text-gray-500">Last updated: May 23, 2025</p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-100">
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              This Privacy Notice for Health Master (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), describes how and why we might access, collect, store, use, and/or share (&quot;process&quot;) your personal information when you use our services (&quot;Services&quot;), including when you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Download and use our mobile application (Health Master), or any other application of ours that links to this Privacy Notice</li>
              <li>Use Health Master. A medication adherance and medication interactions checker app aimed at helping you adhere to medications while educating you about your various types of medications.</li>
              <li>Engage with us in other related ways, including any sales, marketing, or events</li>
            </ul>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
              <p className="text-blue-800">
                <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:chegephil24@gmail.com" className="text-blue-600 hover:text-blue-800 underline">chegephil24@gmail.com</a>.
              </p>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            Summary of Key Points
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by using our table of contents below to find the section you are looking for.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">What personal information do we process?</h3>
                  <p className="text-sm text-gray-600">When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Do we process any sensitive personal information?</h3>
                  <p className="text-sm text-gray-600">We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Do we collect any information from third parties?</h3>
                  <p className="text-sm text-gray-600">We do not collect any information from third parties.</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">How do we keep your information safe?</h3>
                  <p className="text-sm text-gray-600">We have adequate organizational and technical processes and procedures in place to protect your personal information.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">What are your rights?</h3>
                  <p className="text-sm text-gray-600">Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">How do you exercise your rights?</h3>
                  <p className="text-sm text-gray-600">The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </div>
            Table of Contents
          </h2>
          <div className="grid md:grid-cols-2 gap-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => toggleSection(section.id)}
                className="text-left p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-blue-600 hover:text-blue-800 text-sm"
              >
                {section.id}. {section.title}
              </button>
            ))}
          </div>
        </div>

        {/* Expandable Sections */}
        <div className="space-y-6">
          {/* Section 1 */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <button
              onClick={() => toggleSection('section1')}
              className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
            >
              <h2 className="text-xl font-bold text-gray-900">1. WHAT INFORMATION DO WE COLLECT?</h2>
              {expandedSections['section1'] ? (
                <ChevronUpIcon className="w-6 h-6 text-gray-500" />
              ) : (
                <ChevronDownIcon className="w-6 h-6 text-gray-500" />
              )}
            </button>
            {expandedSections['section1'] && (
              <div className="px-8 pb-8">
                <div className="prose max-w-none text-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal information you disclose to us</h3>
                  <p className="mb-4"><strong>In Short:</strong> We collect personal information that you provide to us.</p>
                  
                  <p className="mb-4">We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
                  
                  <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Personal Information Provided by You:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      <ul className="list-disc pl-4 space-y-1 text-sm">
                        <li>names</li>
                        <li>phone numbers</li>
                        <li>email addresses</li>
                        <li>usernames</li>
                      </ul>
                      <ul className="list-disc pl-4 space-y-1 text-sm">
                        <li>passwords</li>
                        <li>contact preferences</li>
                        <li>contact or authentication data</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Sensitive Information:</h4>
                    <p className="text-sm">When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information: <strong>health data</strong></p>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Application Data:</h4>
                    <p className="text-sm mb-3">If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:</p>
                    <ul className="list-disc pl-4 space-y-1 text-sm">
                      <li><strong>Mobile Device Access:</strong> We may request access to camera, reminders, storage, social media accounts, and other features.</li>
                      <li><strong>Mobile Device Data:</strong> Device information, operating system, browser type, IP address, and mobile carrier information.</li>
                      <li><strong>Push Notifications:</strong> We may request to send push notifications regarding your account or app features.</li>
                    </ul>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Information automatically collected</h3>
                  <p className="mb-4"><strong>In Short:</strong> Some information is collected automatically when you visit our Services.</p>
                  <p className="mb-4">We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity but may include device and usage information, such as your IP address, browser and device characteristics, operating system, and technical information.</p>
                  
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Google API</h4>
                    <p className="text-sm">Our use of information received from Google APIs will adhere to Google API Services User Data Policy, including the Limited Use requirements.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <button
              onClick={() => toggleSection('section2')}
              className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
            >
              <h2 className="text-xl font-bold text-gray-900">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
              {expandedSections['section2'] ? (
                <ChevronUpIcon className="w-6 h-6 text-gray-500" />
              ) : (
                <ChevronDownIcon className="w-6 h-6 text-gray-500" />
              )}
            </button>
            {expandedSections['section2'] && (
              <div className="px-8 pb-8">
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4"><strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">We process your personal information for:</h4>
                    <ul className="list-disc pl-4 space-y-2 text-sm">
                      <li>To facilitate account creation and authentication and otherwise manage user accounts</li>
                      <li>To deliver and facilitate delivery of services to the user</li>
                      <li>To save or protect an individual&apos;s vital interest, such as to prevent harm</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Section 3 */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <button
              onClick={() => toggleSection('section3')}
              className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
            >
              <h2 className="text-xl font-bold text-gray-900">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</h2>
              {expandedSections['section3'] ? (
                <ChevronUpIcon className="w-6 h-6 text-gray-500" />
              ) : (
                <ChevronDownIcon className="w-6 h-6 text-gray-500" />
              )}
            </button>
            {expandedSections['section3'] && (
              <div className="px-8 pb-8">
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-6"><strong>In Short:</strong> We only process your personal information when we believe it is necessary and we have a valid legal reason to do so under applicable law.</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">EU/UK Legal Bases:</h4>
                      <ul className="list-disc pl-4 space-y-2 text-sm">
                        <li><strong>Consent:</strong> With your permission for specific purposes</li>
                        <li><strong>Performance of Contract:</strong> To fulfill our contractual obligations</li>
                        <li><strong>Legal Obligations:</strong> For compliance with legal requirements</li>
                        <li><strong>Vital Interests:</strong> To protect your safety or others</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">Canada Legal Bases:</h4>
                      <ul className="list-disc pl-4 space-y-2 text-sm">
                        <li>Express or implied consent</li>
                        <li>Fraud detection and prevention</li>
                        <li>Business transactions under certain conditions</li>
                        <li>Insurance claim processing</li>
                        <li>Emergency situations for individual safety</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Section 4 */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <button
              onClick={() => toggleSection('section4')}
              className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
            >
              <h2 className="text-xl font-bold text-gray-900">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
              {expandedSections['section4'] ? (
                <ChevronUpIcon className="w-6 h-6 text-gray-500" />
              ) : (
                <ChevronDownIcon className="w-6 h-6 text-gray-500" />
              )}
            </button>
            {expandedSections['section4'] && (
              <div className="px-8 pb-8">
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4"><strong>In Short:</strong> We may share information in specific situations described in this section.</p>
                  
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Business Transfers</h4>
                    <p className="text-sm">We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Section 5 */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <button
              onClick={() => toggleSection('section5')}
              className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
            >
              <h2 className="text-xl font-bold text-gray-900">5. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</h2>
              {expandedSections['section5'] ? (
                <ChevronUpIcon className="w-6 h-6 text-gray-500" />
              ) : (
                <ChevronDownIcon className="w-6 h-6 text-gray-500" />
              )}
            </button>
            {expandedSections['section5'] && (
              <div className="px-8 pb-8">
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4"><strong>In Short:</strong> We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">AI Technologies</h4>
                      <p className="text-sm mb-3">We provide AI Products through third-party service providers, including Google Cloud AI.</p>
                      <p className="text-sm"><strong>Our AI Products are designed for:</strong> AI automation</p>
                    </div>
                    
                    <div className="bg-indigo-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">Data Processing</h4>
                      <p className="text-sm">All personal information processed using our AI Products is handled in line with our Privacy Notice and ensures high security and safeguards throughout the process.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl shadow-lg p-8 text-white">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Need Help or Have Questions?</h2>
              <p className="mb-6 text-blue-100">If you have questions or comments about this privacy notice, feel free to contact us.</p>
              
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="font-semibold mb-3">Email Us</h3>
                  <a href="mailto:chegephil24@gmail.com" className="text-blue-200 hover:text-white underline">chegephil24@gmail.com</a>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="font-semibold mb-3">Mailing Address</h3>
                  <address className="text-blue-200 not-italic text-sm">
                    Health Master<br />
                    Kigali<br />
                    Kenya<br />
                    Eldoret, Rift Valley 30100<br />
                    Rwanda
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Rights and Data Management */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Your Data Rights</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Access Your Data</h3>
                <p className="text-sm text-gray-600">Request access to the personal information we have about you</p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Correct Information</h3>
                <p className="text-sm text-gray-600">Request corrections to inaccurate personal information</p>
              </div>
              
              <div className="text-center p-6 bg-red-50 rounded-lg">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Delete Data</h3>
                <p className="text-sm text-gray-600">Request deletion of your personal information</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500 text-sm">
          <div className="border-t border-gray-200 pt-8">
            <p>&copy; 2025 Health Master. All rights reserved.</p>
            <p className="mt-2">This privacy policy was last updated on May 23, 2025.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;