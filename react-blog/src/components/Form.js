import { useId } from "react";

export default function Form() {
  const postTitleId = useId();
  const postTextId = useId();

  function handleSubmit(e) {
    e.preventDefault();

    console.log(e.target);
  }
  return (
    <form method="post" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Blog title:</label>
        <input
          type="text"
          name="postTitle"
          min="3"
          max="24"
          required
          id={postTitleId}
        />
      </div>
      <div>
        <label htmlFor="">Blog post:</label>
        <textarea name="postText" required id={postTextId} />
      </div>

      <button type="submit">POST</button>
    </form>
  );
}
