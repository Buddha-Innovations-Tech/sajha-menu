import { Container, Row, Col } from 'react-bootstrap';

const Download = () => {
  return (
    <>
      <Container>
        <section
          style={{ margin: '10rem auto', width: '20rem', textAlign: 'center' }}
        >
          <div>
            <a href='/admin.apk'>
              <button className='bton bton--md bton--primary'>
                Download Manager App
              </button>
            </a>
          </div>

          <div className='mt-4'>
            <a href='/waiter.apk'>
              <button className='bton bton--md bton--primary'>
                {' '}
                Download Waiter App
              </button>
            </a>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Download;
