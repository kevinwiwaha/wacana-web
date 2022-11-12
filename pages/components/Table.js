import React, { useEffect, useState } from "react";
import { supabase } from "../service/supabase";
export default function Table() {
  const [links, setLinks] = useState([]);
  useEffect(() => {
    fetchLinks();
  }, []);
  let fetchLinks = () => {
    supabase
      .from("links")
      .select()
      .then((e) => {
        setLinks(e);
      })
      .catch((e) => console.log(e));
    setTimeout(() => {}, 1000);
  };
  //   let handleClick = () => {
  //     setLinks(links + 1)
  //   };
  let data = links.data;
  if (links.hasOwnProperty("data")) {
  }
  return (
    <div className="container py-5">
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 px-5">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Code
              </th>
              <th scope="col" className="py-3 px-6">
                Link
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}
