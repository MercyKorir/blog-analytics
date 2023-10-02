import fetch from "node-fetch";

const fetchBlogData = async (req, res, next) => {
  const options = {
    method: 'GET',
    headers: {
      'x-hasura-admin-secret':
        '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6',
    },
  };

  try {
    const response = await fetch(
      'https://intent-kit-16.hasura.app/api/rest/blogs',
      options,
    );
    if (response.ok) {
      const data = await response.json();
      req.blogData = data;
      next();
    }
  } catch (err) {
    res.status(500).json({ error: 'Error fetching blog data!' });
    console.error(err);
  }
};

export default fetchBlogData;
