import {revalidatePath} from "next/cache";
import {cookies} from "next/headers";

export default function Home() {
  async function handleSubmit(formData: FormData) {
    "use server";
    const bucket = formData.get("bucket");

    cookies().set("bucket", bucket as string);
    revalidatePath("/");
  }

  return (
    <main>
      <form action={handleSubmit}>
        <input name="bucket" type="hidden" value="a" />
        <button type="submit">Set bucket to A</button>
      </form>
      <form action={handleSubmit}>
        <input name="bucket" type="hidden" value="b" />
        <button type="submit">Set bucket to B</button>
      </form>
    </main>
  );
}
