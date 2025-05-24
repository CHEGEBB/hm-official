// app/delete-account/page.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Delete Account - Health App',
  description: 'Request account deletion for your Health App account',
}

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Delete Your Account
            </h1>
            <p className="text-lg text-gray-600">
              We&apos;re sorry to see you go. Follow the steps below to delete your account.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">
                    Important: Account deletion is permanent
                  </h3>
                  <div className="mt-2 text-sm text-red-700">
                    <p>This action cannot be undone. All your data will be permanently deleted.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                What will be deleted:
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Your personal profile and account information</li>
                <li>All medication reminders and schedules</li>
                <li>Health data and tracking history</li>
                <li>App preferences and settings</li>
                <li>Any other data associated with your account</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                How to delete your account:
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                    1
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">Contact Support</h3>
                    <p className="text-gray-600 mt-1">
                      Send an email to our support team requesting account deletion.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                    2
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">Verify Identity</h3>
                    <p className="text-gray-600 mt-1">
                      Include your registered email address and any other identifying information to help us locate your account.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                    3
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">Confirmation</h3>
                    <p className="text-gray-600 mt-1">
                      We&apos;ll confirm your identity and process the deletion within 30 days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-300 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Contact Information
              </h2>
              <div className="space-y-3">
                <div>
                  <label className="font-medium text-gray-700">Email:</label>
                  <p className="text-gray-600">info@healthmasterco.com</p>
                </div>
                <div>
                  <label className="font-medium text-gray-700">Subject Line:</label>
                  <p className="text-gray-600">&quot;Account Deletion Request&quot;</p>
                </div>
                <div>
                  <label className="font-medium text-gray-700">Response Time:</label>
                  <p className="text-gray-600">We typically respond within 48 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">
                    Need Help?
                  </h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>
                      If you&apos;re having trouble with the app or have questions about your account, 
                      our support team is here to help before you decide to delete your account.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}