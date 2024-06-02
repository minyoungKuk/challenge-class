import React, { useState } from "react";
import { useToast } from "../contexts/toast.context";
import Input from "./Input";

const ToastForm = () => {
  const { addToast } = useToast();

  const [title, setTitle] = useState("Scheduled: Catch up");
  const [content, setContent] = useState(
    "Friday, February 10, 2023 at 5:57 PM"
  );
  const [duration, setDuration] = useState(2000);

  const handleVisibleToast = () => {
    if (!title || !content) {
      alert("제목과 내용을 모두 입력해 주세요");
      return;
    }

    addToast({ title, content, duration: Number(duration) });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-xl font-bold mb-6"> 토스트 컨트롤러 </h1>

      <div className="flex flex-col gap-y-4">
        <div>
          <Input
            label="제목 (필수)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            label="내용 (필수)"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Input
            label="노출 시간(ms) (선택)"
            value={duration}
            type="number"
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <button
          onClick={handleVisibleToast}
          className="py-3 bg-black text-white rounded-md hover:bg-black/80 active:bg-black/80"
        >
          토스트 띄우기
        </button>
      </div>
    </div>
  );
};

export default ToastForm;
