// src/app/contribute/page.js

// This is a Server Component by default
import { logSubmission } from '../../lib/actions';
import Form from '../components/Form';
import Header from '../components/Header';

export default function ContributePage() { // Changed APage to ContributePage based on folder name

  return (
    <div>
      <Header />
      <Form classNames="m-16" />
      
    </div>
  );
}





// import MyInputForm from '../components/MyInputForm';

// export default function APage() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center p-24">
//       <h1 className="text-2xl font-bold mb-6">Page A</h1>
//       <MyInputForm />
//     </main>
//   );
// }







// This file is a Server Component by default

// Import the client component from the components directory
// import MyInputForm from '../components/MyInputForm';

// export default function ContributePage() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center p-24">
//       <h1 className="text-2xl font-bold mb-6">Contribute to Our Project</h1>
//       <p className="mb-4">Please provide your details below.</p>
      
//       {/* Render the client component */}
//       <MyInputForm /> 
      
//     </main>
//   );
// }


// app/page.tsx
    // import MyInputForm from '../components/MyInputForm';

    // export default function HomePage() {
    //   return (
    //     <div>
    //       <h1>Welcome!</h1>
    //       <MyInputForm />
    //     </div>
    //   );
    // }

// import Header from '../components/Header'

// export default function Home() {
//   return (
//     <div>
//       <div className="p-8">
//         <Header h1='Contribute'>
//           Soon, you'll be able to use the form below to add you're own poems
//         </Header>
//       </div>
//     </div>
//   )
// }
