import { useRouter } from "next/router";
import { useEffect } from "react";
import { supabase } from "./service/supabase";
const Link = () => {
  const router = useRouter();
  const { code } = router.query;
  let url = "";

  useEffect(() => {
    supabase
      .from("links")
      .select()
      .eq("url_key", code)
      .then((e) => {
        console.log(e);
        if (e.hasOwnProperty("data")) {
          window.location.replace(e.data[0].destination);
        }
      })
      .catch((e) => console.log(e));
  }, [code]);
  return <p>Not Found</p>;
};

export default Link;
