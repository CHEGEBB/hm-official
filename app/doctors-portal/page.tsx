// DoctorPortal.tsx
'use client'
import React, { useState, useEffect } from 'react';
import { Client, Account, Databases, Query } from 'appwrite';
import "../sass/home.scss";
interface Appointment {
  $id: string;
  patientName: string;
  date: string;
  time: string;
  reason: string;
  status: string;
}

interface DoctorSession {
  $id: string;
  name: string;
  email: string;
}

const DoctorPortal: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('doctor');
  const [password, setPassword] = useState('doctor');
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('appointments');
  const [session, setSession] = useState<DoctorSession | null>(null);

  const Config = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.health-master.healthmaster",
    projectId: "6704d37c003c8a2f6a36",
    databaseId: "670a2468000caae299eb",
    userCollectionId: "670a248800049761218e",
    appoinmentsCollectionId: "670a254100339e546aa4",
    medicationCollectionId: "670a256a00336a73c6d3",
    remindersCollectionId: "670a259c000d92ef0f0a",
    storageId: "670a2a300017fdaee701",
    avatarId : "670b98c80004f12b1c7e",  
    soundsBucketId: "67120aaf001924753893",
    userProfileCollectionId :"67138639002d243031e0",
    feedbackCollectionId:"6720dc300014a20397e6",
  
  
  };

  // Initialize Appwrite
  const client = new Client()
    .setEndpoint(Config.endpoint)
    .setProject(Config.projectId);

  const account = new Account(client);
  const databases = new Databases(client);

  // Check for existing session
  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      const currentSession = await account.get();
      if (currentSession) {
        setIsLoggedIn(true);
        setSession(currentSession);
        fetchAppointments();
      }
    } catch (error) {
      console.log('Session check error:', error);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const session = await account.createEmailPasswordSession(username, password);
      setIsLoggedIn(true);
      setSession(session);
      fetchAppointments();
    } catch (error) {
      setError('Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await account.deleteSession('current');
      setIsLoggedIn(false);
      setSession(null);
      setAppointments([]);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const fetchAppointments = async () => {
    try {
      const response = await databases.listDocuments(
        Config.databaseId,
        Config.appoinmentsCollectionId,
        [Query.orderDesc('date')]
      );
      setAppointments(response.documents as Appointment[]);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const updateAppointmentStatus = async (appointmentId: string, status: string) => {
    try {
      await databases.updateDocument(
        Config.databaseId,
        Config.appoinmentsCollectionId,
        appointmentId,
        { status }
      );
      fetchAppointments();
    } catch (error) {
      console.error('Error updating appointment:', error);
    }
  };

  if (!isLoggedIn) {
    return (
        <div className="overlay">
      <div className="min-h-screen bg-slate-700 flex items-center justify-center container min-w-full">
        <div className="bg-slate-600/50 p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-center text-white">Doctor Portal Login</h2>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {loading ? 'Loading...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white h-screen shadow-md">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800">Doctor Portal</h2>
            <p className="text-sm text-gray-600 mt-1">{session?.email}</p>
          </div>
          <nav className="mt-6">
            <button
              onClick={() => setActiveTab('appointments')}
              className={`w-full text-left px-6 py-3 ${
                activeTab === 'appointments' ? 'bg-blue-500 text-white' : 'text-gray-700'
              }`}
            >
              Appointments
            </button>
            <button
              onClick={() => setActiveTab('patients')}
              className={`w-full text-left px-6 py-3 ${
                activeTab === 'patients' ? 'bg-blue-500 text-white' : 'text-gray-700'
              }`}
            >
              Patients
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`w-full text-left px-6 py-3 ${
                activeTab === 'profile' ? 'bg-blue-500 text-white' : 'text-gray-700'
              }`}
            >
              Profile
            </button>
          </nav>
          <div className="p-6 mt-auto">
            <button
              onClick={handleLogout}
              className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {activeTab === 'appointments' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Appointments</h2>
              <div className="grid gap-6">
                {appointments.map((appointment) => (
                  <div
                    key={appointment.$id}
                    className="bg-white rounded-lg shadow-md p-6"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold">
                          {appointment.patientName}
                        </h3>
                        <p className="text-gray-600">
                          {new Date(appointment.date).toLocaleDateString()} at{' '}
                          {appointment.time}
                        </p>
                        <p className="text-gray-700 mt-2">{appointment.reason}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          appointment.status === 'Scheduled'
                            ? 'bg-yellow-100 text-yellow-800'
                            : appointment.status === 'Completed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {appointment.status}
                      </span>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <button
                        onClick={() => updateAppointmentStatus(appointment.$id, 'Completed')}
                        className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded"
                      >
                        Complete
                      </button>
                      <button
                        onClick={() => updateAppointmentStatus(appointment.$id, 'Cancelled')}
                        className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'patients' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Patients</h2>
              {/* Add patient list component here */}
            </div>
          )}

          {activeTab === 'profile' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Doctor Profile</h2>
              {/* Add profile component here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorPortal;