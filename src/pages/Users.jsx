import React from "react";

import { useState } from "react";

function Users() {
  const [users, setUsers] = useState([
    { id: 1, name: "Ali", email: "ali@gmail.com" },
    { id: 2, name: "Sardor", email: "sardor@gmail.com" },
  ]);

  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  const addUser = () => {
    if (!newUser.name || !newUser.email) return;
    setUsers([...users, { id: Date.now(), ...newUser }]);
    setNewUser({ name: "", email: "" });
    setShowModal(false);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Users</h1>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Add User
        </button>
      </div>

      <input
        type="text"
        placeholder="Search users..."
        className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="space-y-3">
        {filtered.map((user) => (
          <div
            key={user.id}
            className="p-4 bg-white shadow rounded-xl flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {user.name[0]}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{user.name}</h3>
                <p className="text-gray-600 text-sm">{user.email}</p>
              </div>
            </div>

            <button
              onClick={() => deleteUser(user.id)}
              className="text-red-600 hover:text-red-800 font-medium"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow w-80">
            <h2 className="text-xl font-bold mb-4">Add User</h2>

            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 mb-3 border rounded-lg"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-4 border rounded-lg"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={addUser}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Users;
