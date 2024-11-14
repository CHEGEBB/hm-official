'use client'
import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Filter, Plus, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/Card';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Badge } from '../../components/Badge';

const AppointmentsPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [filterStatus, setFilterStatus] = useState<string>('all');

  // Mock appointments data - replace with API call
  const appointments = [
    {
      id: 1,
      patientName: "Alice Johnson",
      date: "2024-11-14",
      time: "09:00 AM",
      type: "Regular Checkup",
      status: "confirmed",
      notes: "Follow-up on previous treatment"
    },
    {
      id: 2,
      patientName: "Bob Smith",
      date: "2024-11-14",
      time: "10:30 AM",
      type: "Consultation",
      status: "pending",
      notes: "New patient consultation"
    },
    // Add more appointments...
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Appointments</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          New Appointment
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Filters */}
        <Card>
          <CardHeader>
            <CardTitle>Filters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-slate-400">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input className="pl-9" placeholder="Search patients..." />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-slate-400">Status</label>
              <div className="flex flex-wrap gap-2">
                {['all', 'confirmed', 'pending', 'cancelled'].map(status => (
                  <Badge
                    key={status}
                    variant={filterStatus === status ? 'default' : 'outline'}
                    className="cursor-pointer"
                    onClick={() => setFilterStatus(status)}
                  >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Calendar */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg"
                >
                  <div className="space-y-1">
                    <p className="font-medium">{appointment.patientName}</p>
                    <div className="flex items-center text-sm text-slate-400">
                      <Clock className="w-4 h-4 mr-1" />
                      {appointment.time}
                    </div>
                    <p className="text-sm text-slate-400">{appointment.type}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant={
                        appointment.status === 'confirmed'
                          ? 'success'
                          : appointment.status === 'pending'
                          ? 'warning'
                          : 'error'
                      }
                    >
                      {appointment.status}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AppointmentsPage;