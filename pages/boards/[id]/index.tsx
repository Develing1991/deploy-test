import { useRouter } from "next/router";
import React from "react";

export default function BoardDetailPage() {
  const router = useRouter();
  return (
    <div>
      동적페이지입니다
      <br />
      게시글 아이디 : {router.query.id}
    </div>
  );
}
