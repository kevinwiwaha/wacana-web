import React, { useEffect, useState } from "react";
import { supabase } from "../service/supabase";
export default function Table() {
  const [links, setLinks] = useState([{}]);
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
  };

  let data = links.data;
  let listLinks = () => {
    if(links.hasOwnProperty("data")){
      return links.data.map((rows,i) => (
        <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {rows.url_key}
                </th>
                <td className="py-4 px-6" >
                 
                  <a
                href="#"
                className="text-red-500 hover:text-purple-900"
              >
                {rows.destination}
              </a>
                </td>
                <td className="py-4 px-6 ">
                    Laptop PC
                </td>
            </tr>
      ))
    }
    
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
              <th scope="col" className="py-3 px-6 text-black hover:text-red-500">
                Price
              </th>
            </tr>
          </thead>
          <tbody>{listLinks()}</tbody>
        </table>
      </div>
    </div>
  );
}
