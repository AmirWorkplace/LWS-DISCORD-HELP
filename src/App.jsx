/* eslint-disable no-alert */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React from 'react';
import './assets/css/App.css';
import viteLogo from './assets/images/vite.svg';
import reactLogo from './assets/images/react.svg';
import seriaLizeArray from './SeriaLizedArray';

function App() {
  function formHandler(event) {
    event.preventDefault();
    const seriaLizeFormData = seriaLizeArray(event.target);
    alert(JSON.stringify(seriaLizeFormData));
    event.target.reset();
    console.log('seriaLizeArray:', seriaLizeFormData);
  }

  return (
    <div className="App">
      <div className="flex gap-5 w-full items-center justify-center text-xl font-bold">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <form onSubmit={formHandler} id="form" className="testing-form">
        <label htmlFor="name">
          <span> Type Your Name:</span>
          <input
            name="customerName"
            placeholder=" Type Your Name"
            type="text"
          />
        </label>

        <label htmlFor="Email">
          <span> Type Your Email:</span>
          <input
            name="customerEmail"
            placeholder=" Type Your Email:"
            type="email"
          />
        </label>

        <label htmlFor="Password">
          <span> Type Your Password:</span>
          <input
            name="customerPassword"
            placeholder=" Type Your Password:"
            type="password"
          />
        </label>

        <label htmlFor="Description">
          <span> Type Your Description:</span>
          <textarea
            name="customerDescription"
            placeholder=" Type Your Description:"
            type="text"
            className="min-h-[140px]"
          />
        </label>

        <label htmlFor="remember">
          <span> Remember The Data:</span>
          <input name="rememberSync" type="checkbox" />
        </label>

        <label htmlFor="remember">
          <span> Accepted Cookies:</span>
          <input name="cookies" type="radio" />
        </label>

        <label htmlFor="remember">
          <span> Set Your Skills:</span>
          <input name="customerSkill" type="range" />
        </label>

        <label htmlFor="select-options">
          <span>select your country </span>
          <select name="customerCountry" id="select">
            <option>Default</option>
            <option>Bangladesh</option>
            <option>India</option>
            <option>China</option>
            <option>Japan</option>
          </select>
        </label>
        <div>
          <button type="submit">Check it Out</button>
        </div>
      </form>
      <form className="w-full max-w-3xl p-5 m-4 border-[0.3px] border-slate-400 shadow-[1px_5px_20px_10px_rgba(0,0,0,0.1)] rounded-xl">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Password
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder="******************"
            />
            <p className="text-gray-600 text-xs italic">
              Make it as long and as crazy as you'd like
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              City
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              placeholder="Albuquerque"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              State
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-zip"
            >
              Zip
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="90210"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
