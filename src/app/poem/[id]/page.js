/*// app/elements/[id]/page.js
import { elements } from '../../data/elements'; // Adjust path to data source

// This function replaces getStaticPaths
export async function generateStaticParams() {
  return elements.map((element) => ({
    // The key here 'id' must match your folder name '[id]'
    id: element.id,
  }));
}

// This is an async Server Component that replaces the need for getStaticProps
/*export default async function ElementPage({ params }) {
  // params.id comes from the route parameter
  const element = elements.find((e) => e.id === params.id);

  if (!element) {
    // In App Router, you can use a notFound function or simply render a message
    // For a real 404 status, consider using Next.js's notFound() utility:
    // import { notFound } from 'next/navigation';
    // notFound();
    return <div>Element not found.</div>;
  }

  return (
    <div>
      <h1>{element.title}</h1>
      <p>{element.content}</p>
    </div>
  );
}*//*
export default async function ElementPage({ params }) {
  console.log(elements)
  console.log(params.id)


  // Convert the URL string parameter to the type used in your 'elements' data (if numeric)
  const idToFind = params.id;
  // OR if your IDs in data/elements.js are numbers, use:
  // const idToFind = Number(params.id);

  const element = elements.find((e) => e.id === idToFind); // Check this comparison

  if (!element) {
    // ... notFound() logic ...
    return <div>Element not found.</div>;
  }
  // ... rest of the component ...
  return (
    <div>
      <h1>{element.title}</h1>
      <p>{element.content}</p>
    </div>
  );
}*/











/*// app/elements/[id]/page.js
import { elements } from '../../data/elements';
import { notFound } from 'next/navigation'; // Import notFound utility

// This function replaces getStaticPaths
export async function generateStaticParams() {
  return elements.map((element) => ({
    id: element.id,
  }));
}

// Corrected: You do not need to mark this as 'async'
// if you are only doing synchronous operations after data fetching.
// The data fetching is handled implicitly by being a Server Component.
// The key fix is ensuring 'params' is accessed directly in the signature.

export default function ElementPage({ params }) { // Removed 'async' here
  // The 'params' object can now be accessed directly and synchronously
  const idToFind = params.id;

  console.log(elements); // Your console log from before
  console.log(idToFind); // This should now log '1'

  // Find the element using strict equality (assuming string IDs from data/elements.js)
  const element = elements.find((e) => e.id === idToFind);

  if (!element) {
    // Call Next.js notFound() function for a proper 404 response
    notFound();
  }

  return (
    <div>
      <h1>{element.title}</h1>
      <p>{element.content}</p>
    </div>
  );
}*/








// app/elements/[id]/page.js

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
    <div className="grow w-96 flex flex-col rounded-lg transition-all shadow-lg">
      <div className="p-4">
        <GradientBg className="text-xl font-bold text-blue-600">{poem.title}</GradientBg>
        <pre className='p-6 font-serif text-blue-600'>{poem.poemLines}</pre>
      </div>
    </div>
  );
}

