import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import PageHeader from '../../components/PageHeader';
import BadRequest from '../BadRequest';

export default function Page1 () {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {

      try {
        const { data } = await axios.get('/cardRequestData.json');
        setResponse(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }

    })();

  }, []);

  if (error) { return <BadRequest />; }

  const responseMapper = ({ image, id, title }) => (
    <Card
      imageUrl={image}
      key={id}
      title={title}
    />
  );

  return (
    <div>
      <PageHeader text='Page 1' />
      { !loading && response.map(responseMapper) }
    </div>
  );
}
