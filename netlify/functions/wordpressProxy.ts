import fetch from 'node-fetch';

const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
let cachedResponse: any = null;
let cacheTimestamp = 0;

exports.handler = async () => {
  const now = Date.now();

  // Check if the cache is still valid
  if (cachedResponse && (now - cacheTimestamp) < CACHE_DURATION) {
    return {
      statusCode: 200,
      body: JSON.stringify(cachedResponse),
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': `max-age=${CACHE_DURATION / 1000}`,
      },
    };
  }

  // Cache is expired or doesn't exist, fetch new data
  try {
      const response = await fetch('https://www.erindtherapy.com/wp-json/wp/v2/posts', {
      headers: {
        Authorization: `Bearer ${process.env.WORDPRESS_JWT_TOKEN}`,
      },
    });
    
    if (!response.ok) {
      throw new Error(`WordPress API request failed with status ${response.status}`);
    }

    const data = await response.json();

    // Update the cache
    cachedResponse = data;
    cacheTimestamp = now;

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': `max-age=${CACHE_DURATION / 1000}`,
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error }),
    };
  }
};
