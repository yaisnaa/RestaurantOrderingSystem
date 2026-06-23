import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { useSignal } from "@builder.io/qwik";
import { ButtonHome } from "~/components/buttonHome";
export default component$(() => {
  const count = useSignal(0);
  const todos = useSignal<string[]>([]);
  const inputtext = useSignal("");
  return (
    <>
      <h1>HELLO ini project latihan</h1>
      <div>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
        <h1 class="flex p-4 mt-4 mb-4 bg-gray-100 text-4x6 font-bold text-blue-500">HELLO ini project latihan</h1>
      </div>   
      <Link href = "/">
      <ButtonHome ></ButtonHome>
      </Link>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
