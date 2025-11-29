'use client';

import { useEffect, useRef } from 'react';
import { logSubmission } from '../../lib/actions'; 

export default function Form({ classNames }) {
  const textareaRef = useRef(null);

  const resizeTextarea = () => {
    if (textareaRef.current) {
      // Reset height to calculate accurate scroll height
      textareaRef.current.style.height = 'auto'; 
      // Set height based on content
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  // Run once on mount to set initial height if there's pre-filled value
  useEffect(() => {
    resizeTextarea();
  }, []);

  return (
    <form action={logSubmission} className={`p-4 border-4 border-blue-300 rounded shadow-sm bg-gray-50 ${classNames}`}>
        <label htmlFor="poem-title" className="block mb-2 text-xl font-semibold text-indigo-400">
          Enter the title and lines of your poem:
        </label>
        <div className='p-2 text-gray-600'>
          <input
            id="poem-title"
            type="text"
            name="poem-title"
            placeholder={"Type poem title here. If you don't specify a title, it will default to \"Untitled\"."}
            className="bg-white block w-full p-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
          />
          <textarea
          id="poem-lines"
          name="poem-lines"
          placeholder="Type poem lines here."
          // Attach the ref and the onInput handler
          ref={textareaRef}
          onInput={resizeTextarea}
          // Add resize-none and overflow-hidden classes
          className="bg-white block w-full p-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none overflow-hidden"
          rows={1}
          required
        />
        </div>
        
        
        <button 
          type="submit" 
          className="mt-2 p-2 bg-green-300 text-white rounded hover:bg-blue-400 transition font-semibold"
        >
          Submit
        </button>
      </form>
  )
}