import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const User = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenSilently({
          audience: 'https://dev-d95owq5x.us.auth0.com//api/v2/users',
          scope: 'read:users',
        });
        const response = await fetch('https://dev-d95owq5x.us.auth0.com/api/v2/users', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPosts(await response.json());
      } catch (e) {
        console.error(e);
      }
    })();
  }, [getAccessTokenSilently]);

  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {posts.map((post, index) => {
        return <li key={index}>{post}</li>;
      })}
    </ul>
  );
};

export default User;