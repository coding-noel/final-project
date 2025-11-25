'use server'; // This directive at the top marks all functions in this file as server actions

export async function logSubmission(formData) {
  const poemTitle = formData.get('poem-title');
  const poemLines = formData.get('poem-lines');
  
  // This console.log runs in your terminal (the server)
  if(poemTitle && poemLines) {
    console.log('Submitted title (Server-Side):', poemTitle);
    console.log('Submitted lines (Server-Side):', poemLines);
  }
  else {
    console.log('input error')
  }
  

  // You can return data to the client component if needed
  // return { status: 'success', message: 'Logged to server terminal!' };
}
