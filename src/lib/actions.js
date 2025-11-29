'use server';

export async function logSubmission(formData) {
  const poemTitle = formData.get('poem-title');
  const poemLines = formData.get('poem-lines');
  
  if(poemTitle && poemLines) {
    console.log('Submitted title (Server-Side):', poemTitle);
    console.log('Submitted lines (Server-Side):', poemLines);
  }
  else {
    console.log('input error')
  }
  
  // return { status: 'success', message: 'Logged to server terminal!' };
}
