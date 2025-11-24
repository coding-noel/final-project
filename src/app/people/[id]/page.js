import React from 'react';
import { people } from '../../../data/elements';
import { notFound } from 'next/navigation';
import GradientBg from '../../components/GradientBg'

// This function generates the static paths
export async function generateStaticParams() {
  return people.map((person) => ({
    id: person.id,
  }));
}

// Keep this as a standard function signature receiving the Promise wrapped 'params'
export default function ElementPage({ params }) {

  // Use React.use() to synchronously unwrap the params Promise
  const resolvedParams = React.use(params);
  const idToFind = resolvedParams.id;

  // Find the element
  const person = people.find((e) => e.id === idToFind);

  if (!person) {
    notFound();
  }

  return (
    <div>
      <h1 className='text-lg m-14'>
        {person.name}
      </h1>
    </div>
  );
}

