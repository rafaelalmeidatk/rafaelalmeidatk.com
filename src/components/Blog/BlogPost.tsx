import { format } from 'date-fns';

const BlogPost = ({ slug, title, date }: any) => (
  <a className="blog-post" href={`/blog/${slug}`}>
    <div className="title">{title}</div>
    <div className="date">{format(date, 'MMMM d, yyyy')}</div>

    <style jsx>{`
      .blog-post {
        margin: 1.2rem 0;
        display: block;
        text-decoration: none;
      }

      .title {
        font-size: 1.3rem;
      }

      .date {
        font-size: 1rem;
      }
    `}</style>
  </a>
);

export default BlogPost;
