import {component$} from "@builder.io/qwik";



export const ButtonHome = component$(() => {
  return (
    <button class="bg-blue-500 ml-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Home
    </button>
  );
});