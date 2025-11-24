// Make sure React is imported (usually implicitly in Next.js 14+, but good practice)
import React from 'react';
import { fullPoems } from '../../../data/elements';
import { notFound } from 'next/navigation';
import GradientBg from '../../components/GradientBg'

// This function generates the static paths
export async function generateStaticParams() {
  return fullPoems.map((poem) => ({
    id: poem.id,
  }));
}

// Keep this as a standard function signature receiving the Promise wrapped 'params'
export default function ElementPage({ params }) {

  // Use React.use() to synchronously unwrap the params Promise
  const resolvedParams = React.use(params);
  const idToFind = resolvedParams.id;

  console.log(fullPoems);
  console.log(idToFind); // This should now log '1'

  // Find the element
  const poem = fullPoems.find((e) => e.id === idToFind);

  if (!poem) {
    notFound();
  }

  return (
    <div className="rounded-sm transition-all shadow-lg border-2 border-blue-200">
      <div className="p-4">
        <GradientBg className="text-xl font-bold text-blue-600">{poem.title}</GradientBg>
        <pre className='p-6 font-serif text-blue-600'>{poem.poemLines}</pre>
      </div>
    </div>
  );
}