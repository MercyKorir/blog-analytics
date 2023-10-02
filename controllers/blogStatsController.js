import _ from 'lodash';
import { cacheMemoize } from '../utils/cache.js';

const getStats = async (blogs) => {
  const totalBlogs = blogs.length;

  const longestTitle = _.maxBy(blogs, 'title.length');

  let privacyBlogs = [];

  _.filter(blogs, (blog) => {
    const privacy = blog.title.toLowerCase().includes('privacy');
    if (privacy) {
      privacyBlogs.push(blog);
    }
  });

  const uniqueBlogs = _.uniqBy(blogs, 'title').map((blog) => blog.title);

  return {
    totalBlogs,
    longestTitle: longestTitle.title,
    privacyBlogs: privacyBlogs.length,
    uniqueBlogs,
  };
};

const cacheBlogStats = cacheMemoize(getStats, 'blogStatsCache');

export const getBlogStats = async (req, res) => {
  try {
    const blogs = req.blogData.blogs;

    const blogStats = await cacheBlogStats(blogs);

    res.status(200).json(blogStats);
  } catch (err) {
    res.status(500).json({ error: 'An Error occurred making the request!' });
    console.error(err);
  }
};
