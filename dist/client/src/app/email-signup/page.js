"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Signup = () => {
    const [formData, setFormData] = (0, react_1.useState)({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [message, setMessage] = (0, react_1.useState)('');
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }
        setMessage('');
        try {
            const response = await fetch('/api/email-signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: formData.email, password: formData.password }),
            });
            if (response.ok) {
                setMessage('Signup successful!');
            }
            else {
                setMessage('Signup failed.');
            }
        }
        catch (error) {
            setMessage('An error occurred during signup.');
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "signup-container", children: [(0, jsx_runtime_1.jsx)("h1", { children: "Sign Up" }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "email", children: "Email:" }), (0, jsx_runtime_1.jsx)("input", { type: "email", id: "email", name: "email", value: formData.email, onChange: handleInputChange, required: true })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "password", children: "Password:" }), (0, jsx_runtime_1.jsx)("input", { type: "password", id: "password", name: "password", value: formData.password, onChange: handleInputChange, required: true })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "confirmPassword", children: "Confirm Password:" }), (0, jsx_runtime_1.jsx)("input", { type: "password", id: "confirmPassword", name: "confirmPassword", value: formData.confirmPassword, onChange: handleInputChange, required: true })] }), (0, jsx_runtime_1.jsx)("button", { type: "submit", children: "Sign Up" })] }), message && (0, jsx_runtime_1.jsx)("p", { children: message }), (0, jsx_runtime_1.jsx)("style", { jsx: true, children: `
        .signup-container {
          max-width: 400px;
          margin: 50px auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 10px;
          box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
        }

        form div {
          margin-bottom: 15px;
        }

        label {
          display: block;
          margin-bottom: 5px;
        }

        input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        button {
          width: 100%;
          padding: 10px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        button:hover {
          background-color: #005bb5;
        }

        p {
          margin-top: 15px;
          font-size: 14px;
          color: red;
        }
      ` })] }));
};
exports.default = Signup;
//# sourceMappingURL=page.js.map