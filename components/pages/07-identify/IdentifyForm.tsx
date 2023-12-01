'use client';
import { identifyEvent } from '@/lib/clients/segment';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';

const IdentifyForm = () => {
  const [identified, setIdentified] = useState(false);
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value.trim() !== '') {
      identifyEvent(value.toLowerCase());
      setIdentified(true);
    } else {
      alert('Name cannot be empty');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex max-w-xs flex-col gap-2">
      <input
        disabled={identified}
        autoFocus
        placeholder="Enter your name..."
        className={cn(
          'border-b-2 text-xl font-medium outline-none md:text-2xl',
          identified && 'opacity-25'
        )}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        disabled={identified}
        type="submit"
        className={cn(
          'bg-dark py-2 font-medium text-white',
          identified && 'bg-green-600'
        )}
      >
        {identified ? 'Identified' : 'Submit'}
      </button>
    </form>
  );
};

export default IdentifyForm;
