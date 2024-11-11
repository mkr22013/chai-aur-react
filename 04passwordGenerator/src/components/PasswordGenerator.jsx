import React from "react";
import { useState, useCallback, useEffect, useRef } from "react";

export default function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    console.log("Password generator method called....");
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
    console.log("this is password :", pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback((e) => {
    console.log("Copy password method called....");

    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  });

  const passwordRef = useRef(null);

  useEffect(() => {
    console.log("Inside use effect method.....");
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-2xl px-4 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center mb-6 text-4xl my-11">
          Password Generator
        </h1>
        <div className="flex shadow rounded-2xl overflow-hidden mb-4 border-8">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="bg-blue-600 text-white px-3"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1 mb-4">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1 mb-4">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1 mb-4">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="chatInput"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="chatInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}
