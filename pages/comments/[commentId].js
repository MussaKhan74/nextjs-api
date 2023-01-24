import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function SingleComment() {
  const [comment, setComment] = useState('');

  const router = useRouter();
  const commentId = router.query.commentId;
  console.log(commentId);

  const fetchComment = async () => {
    const response = await fetch(`/api/comments/${commentId}`);
    const data = await response.json();
    setComment(data);
  };

  return (
    <>
      <button onClick={fetchComment}>Show Comment</button>
      <h1>{comment && comment.text}</h1>
    </>
  );
}
