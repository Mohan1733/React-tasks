import React, { useState } from "react";

const Employee = () => {
  const [employee, setEmployee] = useState([]);
  const [form, setForm] = useState({
    id: null,
    name: "",
    department: "",
    email: "",
  });
  const [search, setSearch] = useState("");
  const [edit, setEdit] = useState(false);

  const filteredEmployees = employee.filter(
    (emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.department.toLowerCase().includes(search.toLowerCase()),
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!form.name || !form.department || !form.email) {
      alert("successfully added");
      return;
    }
    setEmployee([...employee, { ...form, id: Date.now() }]);
    setForm({ id: null, name: "", department: "", email: "" });
  };

  const handleEdit = (employee) => {
    setForm(employee);
    setEdit(true);
  };

  const handleupdate = () => {
    if (!form.name || !form.department || !form.email) {
      alert("successfully update");
      return;
    }
    const updateEmployee = employee.map((emp) =>
      emp.id === form.id ? form : emp,
    );
    setEmployee(updateEmployee);
    setForm({ id: null, name: "", department: "", email: "" });
    setEdit(true);
  };

  const handleDelete = (id) => {
    const filteredEmployees = employee.filter((emp) => emp.id !== id);
    setEmployee(filteredEmployees);
  };
  return (
    <>
      <div className="max-w-5xl mx-auto p-6 min-h-screen font-sans bg-gray-50">
        <h1 className="font-bold text-3xl text-center mb-8 capitalize">
          Employee Management System
        </h1>
        {/* search */}
        <div className="mb-6">
          <input
            type="search"
            placeholder="Search by name or department..."
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {/* form section */}
        <div className="bg-white">
          <div className="grid grid-cols-1 md:grid-col-3 gap-3 mb-8">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Department"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              name="department"
              value={form.department}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            {edit ? (
              <button
                className="w-full bg-yellow-400 hover:bg-yellow-600 rounded py-2 px-4 text-white font-semibold"
                onClick={handleupdate}
              >
                Update Employee
              </button>
            ) : (
              <button
                className="w-full bg-red-500 hover:bg-red-600 rounded py-2 px-4 text-white font-semibold"
                onClick={handleAdd}
              >
                Add Employee
              </button>
            )}
          </div>
        </div>
        {/* table section */}

        <div className="bg-white min-w-full shadow">
          <table className="min-w-full border-collapse text-left">
            <thead>
              <tr className="bg-gray-100 text-sm uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Department</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.length > 0 ? (
                filteredEmployees.map((emp) => (
                  <tr key={emp.id}>
                    <td className="py-3 px-6 text-left">{emp.name}</td>
                    <td className="py-3 px-6 text-left">{emp.department}</td>
                    <td className="py-3 px-6 text-left">{emp.email}</td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex item-center justify-center gap-3">
                        <button
                          className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600 transition"
                          onClick={() => handleEdit(emp)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition"
                          onClick={() => handleDelete(emp.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-4">
                    no employee found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Employee;
