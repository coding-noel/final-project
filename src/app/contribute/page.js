
import Form from '../components/Form';
import Header from '../components/Header';
import Main from '../components/Main';

export default function ContributePage() {

  return (
    <div className='p-8'>
      <Header />
      <Main>
        <Form classNames="my-12" />
      </Main>
    </div>
  );
}