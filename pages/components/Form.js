import React, { useState } from "react";
import Swal from "sweetalert2";
import { supabase } from "../../service/supabase";

export default function Form() {
  const [urlKey, setUrlKey] = useState("");
  const [destination, setDestination] = useState("");
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  let handleUrlKey = (e) => {
    setUrlKey(e.target.value);
  };
  let handleDestination = (e) => {
    setDestination(e.target.value);
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    supabase
      .from("links")
      .insert({ url_key: urlKey, destination: destination })
      .then((e) => {
        console.log(e);
        if (e.error != null) {
          Toast.fire({
            icon: "error",
            title: "Gagal, tapi senyum dulu Delia ❤",
          });
        } else {
          Toast.fire({
            icon: "success",
            title: "Sukses,Senyum dulu Delia ❤",
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
    console.log(urlKey, destination);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <form className="w-1/2">
        <h1 className="text-center font-semibold text-3xl mb-6">
          Persingkat Kata 📚
        </h1>

        <div>
          <div class="mb-6">
            <input
              autocomplete="off"
              type="email"
              id="url_key"
              onChange={(e) => handleDestination(e)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="dellalucu.com/hihakulagimalessamamaspokoknyamalespluskeselsamamas"
              required
            />
          </div>
          <div className="flex  justify-center">
            <p className="mb-6 text-2xl">👇</p>
          </div>
          <div className="flex justify-center">
            <div className="flex  items-center">
              <p className="mr-2 font-medium">wacana.in/</p>
            </div>
            <div className="flex  items-center">
              <div className="w-1/2 mr-2">
                <input
                  autocomplete="off"
                  type="email"
                  id="email"
                  onChange={(e) => handleUrlKey(e)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="mls"
                  required
                />
              </div>
              <button
                type="submit"
                onClick={(e) => handleSubmit(e)}
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Pendekin
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
