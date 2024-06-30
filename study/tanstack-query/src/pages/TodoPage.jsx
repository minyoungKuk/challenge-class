import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useRef } from "react";
import Page from "../components/Page";

const ENDPOINT = "https://jsonplaceholder.typicode.com/todos";

function TodoPage() {
  // const [value, setValue] = useState("");
  const inputRef = useRef(null);

  const { isPending, mutate } = useMutation({
    mutationFn: (...args) => {
      console.log(args);
      return axios.post(ENDPOINT);
    },
    onSuccess: (result) => {
      console.log(result);
      alert("성공");
    },
    onError: () => {
      alert("실패");
    },
  });

  const handleClickButton = async () => {
    try {
      mutate(inputRef.current.value);
      // const response = await axios.post(ENDPOINT, { value });
      // const data = response.data;
      // console.log(data);
    } catch {}
  };
  // axios.get(ENDPOINT);

  return (
    <Page>
      <input
        type="test"
        className="border-black m-4 p-4"
        ref={inputRef}
        disabled={isPending}
      />
      <button onClick={handleClickButton} className="text-white bg-black p-4">
        눌러주세요
      </button>
    </Page>
  );
}

export default TodoPage;
