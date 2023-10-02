import _ from 'lodash';
import { cacheMemoize } from '../utils/cache.js';

const search = async (blogs, query) => {
  const queryBlogs = [];
  blogs.filter((blog) => {
    const queryTrue = blog.title.toLowerCase().includes(query.toLowerCase());
    if (queryTrue) {
      queryBlogs.push(blog);
    }
  });

  return queryBlogs;
};

const cacheSearchBlogs = cacheMemoize(search, 'searchBlogsCache');

export const searchBlogs = async (req, res) => {
  try {
    const query = req.query.query;
    const blogs = req.blogData.blogs;
    if (!query) {
      return res.status(400).json({ error: 'query parameter required!' });
    }

    const queryBlogs = await cacheSearchBlogs(blogs, query);

    res.status(200).json(queryBlogs);
  } catch (err) {
    res
      .status(500)
      .json({ error: 'An error occurred making request to search!' });
    console.error(err);
  }
};
