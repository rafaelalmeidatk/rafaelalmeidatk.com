type PostBodyProps = {
  content: string;
};

const PostBody = ({ content }: PostBodyProps) => (
  <div dangerouslySetInnerHTML={{ __html: content }} />
);

export default PostBody;
