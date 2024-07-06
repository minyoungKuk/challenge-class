import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRef, useState } from "react";
import Page from "../components/Page";

const ENDPOINT = "https://jsonplaceholder.typicode.com/todos";

function TodoPage() {
  const [value, setValue] = useState<string>("");
  const inputRef = useRef(null);

  const { isPending, mutate } = useMutation({
    mutationFn: (variables) => {
      return axios.post(ENDPOINT, { value: variables });
    },
    // onSuccess: (result) => {
    //   console.log(result);
    //   alert("상공했어");
    // },
    onError: () => {
      alert("실패했어");
    },
  });

  const handleClickButton = async () => {
    mutate(inputRef.current.value, { onSuccess: () => alert("성공") });
  };

  axios.get(ENDPOINT);
  return (
    <Page>
      <input
        ref={inputRef}
        type="text"
        // value={value}
        // onChange={(e) => setValue(e.target.value)}
        className="border"
        disabled={isPending}
      />
      <button onClick={handleClickButton}>add</button>
    </Page>
  );
}

export default TodoPage;
