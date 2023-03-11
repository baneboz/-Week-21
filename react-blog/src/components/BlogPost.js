import "../css/BlogPost.css";

const blogPosts = [
  {
    id: 1,
    title: "Blog post",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    title: "Blog post",
    text: "Diam quis enim lobortis scelerisque fermentum dui. Pellentesque habitant morbi tristique senectus et netus et. Nec dui nunc mattis enim ut tellus elementum. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Habitant morbi tristique senectus et netus et malesuada. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Egestas congue quisque egestas diam. Mattis rhoncus urna neque viverra justo nec ultrices dui. Orci a scelerisque purus semper eget. Iaculis nunc sed augue lacus. Amet consectetur adipiscing elit pellentesque habitant morbi tristique. Justo nec ultrices dui sapien eget. Velit scelerisque in dictum non consectetur a. Lectus nulla at volutpat diam ut. Sagittis vitae et leo duis. Massa enim nec dui nunc.",
  },
  {
    id: 3,
    title: "Blog post",
    text: "Dolor purus non enim praesent elementum facilisis leo vel. Mattis enim ut tellus elementum sagittis vitae et. Pharetra massa massa ultricies mi. Vitae nunc sed velit dignissim sodales ut. Consequat ac felis donec et. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Pulvinar neque laoreet suspendisse interdum. Senectus et netus et malesuada fames ac turpis. Amet commodo nulla facilisi nullam vehicula. Ligula ullamcorper malesuada proin libero nunc consequat interdum. Nisl vel pretium lectus quam id leo in vitae turpis. Viverra justo nec ultrices dui. Morbi non arcu risus quis varius quam. Elementum nisi quis eleifend quam adipiscing vitae proin. Neque egestas congue quisque egestas. Imperdiet sed euismod nisi porta. Purus gravida quis blandit turpis. Duis ultricies lacus sed turpis tincidunt.",
  },
  {
    id: 4,
    title: "Blog post",
    text: "Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Sed turpis tincidunt id aliquet risus feugiat in. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. At urna condimentum mattis pellentesque id nibh tortor id aliquet. Quis lectus nulla at volutpat diam ut venenatis. Suspendisse potenti nullam ac tortor vitae purus. Ullamcorper eget nulla facilisi etiam. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Vitae tempus quam pellentesque nec nam aliquam sem et tortor. Quisque id diam vel quam elementum pulvinar etiam non quam. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Nec feugiat nisl pretium fusce id velit ut tortor pretium. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis. Eros donec ac odio tempor orci dapibus ultrices in iaculis. Aliquet nec ullamcorper sit amet risus nullam. A diam sollicitudin tempor id eu nisl nunc.",
  },
  {
    id: 5,
    title: "Blog post",
    text: "Duis at consectetur lorem donec. Quam id leo in vitae turpis massa sed elementum tempus. Quis viverra nibh cras pulvinar. Adipiscing vitae proin sagittis nisl rhoncus. Sed sed risus pretium quam vulputate dignissim suspendisse in. Nulla posuere sollicitudin aliquam ultrices. Habitant morbi tristique senectus et. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Nisi lacus sed viverra tellus in. Pellentesque sit amet porttitor eget dolor morbi. Suspendisse faucibus interdum posuere lorem ipsum",
  },
];

// {
//   id: 1,
//   title: "Blog post",
//   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
// },

const blogPost = blogPosts.map(post => (
  <article className="blog__post" key={post.id}>
    <h3>
      {post.title} #{post.id}
    </h3>
    <p>{post.text}</p>
  </article>
));

export default function BlogPost() {
  return <>{blogPost}</>;
}
