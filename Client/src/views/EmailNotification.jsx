import React, { useState } from 'react';

const dummyEmails = [
  { id: 1, subject: 'Welcome to the LMS!', time: '2 hours ago', content: 'Thanks for joining our platform.' },
  { id: 2, subject: 'Assignment Due', time: '1 day ago', content: 'Don’t forget to submit your assignment.' },
];

const dummyNotifications = [
  { id: 1, title: 'New Class Scheduled', time: '10 mins ago' },
  { id: 2, title: 'Holiday Announcement', time: '3 hours ago' },
];

export default function EmailNotification() {
  const [activeTab, setActiveTab] = useState('emails');

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between mb-6">
          <button
            onClick={() => setActiveTab('emails')}
            className={`px-4 py-2 font-semibold rounded ${
              activeTab === 'emails' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            Emails
          </button>
          <button
            onClick={() => setActiveTab('notifications')}
            className={`px-4 py-2 font-semibold rounded ${
              activeTab === 'notifications' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            Notifications
          </button>
        </div>

        {/* Emails */}
        {activeTab === 'emails' && (
          <div>
            {dummyEmails.map((email) => (
              <div key={email.id} className="border-b py-4">
                <h3 className="text-lg font-bold">{email.subject}</h3>
                <p className="text-sm text-gray-500">{email.time}</p>
                <p className="mt-2">{email.content}</p>
              </div>
            ))}
          </div>
        )}

        {/* Notifications */}
        {activeTab === 'notifications' && (
          <div>
            {dummyNotifications.map((note) => (
              <div key={note.id} className="border-b py-4">
                <h3 className="text-md font-semibold">{note.title}</h3>
                <p className="text-sm text-gray-500">{note.time}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
