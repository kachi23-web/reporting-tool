"use client"; 
import { useState, ChangeEvent, FormEvent } from 'react';
import axios, { AxiosError } from 'axios';



// Define types for form data and error message
interface SignupFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup = () => {
  // Set up state for form data and message
  const [formData, setFormData] = useState<SignupFormData>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [message, setMessage] = useState<string>('');
  // const [message, setMessage] = useState(''); // Holds success or error message
  const [isError, setError] = useState(false); // Holds whether it's an error


  // Handle input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic client-side validation
    if (formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    // Reset message
    setMessage('');

  
    try {
      const response = await axios.post('http://localhost:3000/api/user', formData);
      setMessage('User registered successfully');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMsg = error.response ? error.response.data : error.message;
        setMessage(`Error registering user: ${errorMsg}`); // Error message
        setError(true); // Indicating it's an error
      } else {
        setMessage('An unexpected error occurred.'); // Handle non-Axios errors
        setError(true);
      }
    }
  };


  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit">Sign Up</button>
      </form>

      {/* Display message */}
      {message && <p>{message}</p>}

      <style jsx>{`
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
      `}</style>
    </div>
  );
};

export default Signup;
