import React from "react";

 function Settings() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6 max-w-xl mx-auto">

      <section className="bg-white p-5 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-1">Account</h2>
        <p className="text-sm text-gray-600">Manage your personal information and login details.</p>
      </section>

      <section className="bg-white p-5 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-1">Notifications</h2>
        <p className="text-sm text-gray-600">Choose how you want to receive alerts.</p>
      </section>

      <section className="bg-white p-5 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-1">Privacy</h2>
        <p className="text-sm text-gray-600">Control what data is visible to others.</p>
      </section>

      <section className="bg-white p-5 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-1">Appearance</h2>
        <p className="text-sm text-gray-600">Customize the look and feel of your app.</p>
      </section>
    </div>
  );
}

export default Settings;
