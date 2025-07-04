// src/components/LinkShortener.jsx
import { useState } from 'react';

const LinkShortener = () => {
  const [originalLink, setOriginalLink] = useState('');
  const [shortLink, setShortLink] = useState('');

  const handleShorten = () => {
    if (!originalLink.startsWith('http')) {
      alert('Please enter a valid URL starting with http or https.');
      return;
    }

    const hash = Math.random().toString(36).substring(2, 8); // random 6-char code
    const short = `https://sho.rt/${hash}`;
    setShortLink(short);
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Link Shortener</h1>
      <input
        type="text"
        placeholder="Enter full URL"
        value={originalLink}
        onChange={(e) => setOriginalLink(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <button
        onClick={handleShorten}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Shorten Link
      </button>

      {shortLink && (
        <div className="mt-4">
          <p className="text-green-600">Shortened Link:</p>
          <a
            href={originalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            {shortLink}
          </a>
        </div>
      )}
    </div>
  );
};

export default LinkShortener;
