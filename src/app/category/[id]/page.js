import React from 'react';
import { categories, poemsObject } from '../../../data/elements';
import { notFound } from 'next/navigation';
import Poem from '@/app/components/Poem';
import Main from '@/app/components/Main';
import Header from '@/app/components/Header';


// This function generates the static paths
export async function generateStaticParams() {
  return categories.map((category) => ({
    id: category.id,
  }));
}

// Keep this as a standard function signature receiving the Promise wrapped 'params'
export default function ElementPage({ params }) {

  // Use React.use() to synchronously unwrap the params Promise
  const resolvedParams = React.use(params);
  const idToFind = resolvedParams.id;

  // Find the element
  const category = categories.find((e) => e.id === idToFind);

  if (!category) {
    notFound();
  }

  return (
    <div className="p-8">
      <Header h1={"Category: " + category.category}>
        
      </Header>
      <Main>
      <div className="flex gap-x-12 my-12 flex-wrap gap-y-6">
        {
          category.poemIds.length > 0 ? (
            category.poemIds.map((poemId, index) => (
              <Poem key={index} props={poemsObject[poemId]} layer="1" />
            ))
          ) : (
            <p className='text-blue-400 text-xl px-8'>This category hasn't been populated with poems yet.</p>
          )
          
        }
      </div>
    </Main>
    </div>
  );
}
