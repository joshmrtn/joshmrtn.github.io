export default function Page() {
  return (
    <main className="m-2 grow">
      <h1 className="mb-4 text-xl">Contact Me</h1>
      <div className="flex flex-col gap-1">
        <p>Drop me a line and get in touch!</p>
        <div className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
          <strong className="font-bold">Note:</strong>
          <p className="block">
            This form isn't wired up to anything just yet! This site is under
            construction.
          </p>
        </div>
        <form
          action=""
          className="flex flex-col gap-3 rounded border border-gray-400 px-1 py-3 shadow-md inset-shadow-sm shadow-gray-500 inset-shadow-indigo-500"
        >
          <h2>Lets get in touch</h2>
          <div className="flex flex-col gap-1">
            <label htmlFor="yourName">Name</label>
            <input
              type="text"
              name="yourName"
              id="yourName"
              placeholder="e.g., Josh Martin"
              className="border shadow"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="yourEmail">Email</label>
            <input
              type="email"
              name="yourEmail"
              id="yourEmail"
              placeholder="e.g., coolemail@example.com"
              className="border border-gray-500"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              className="border border-gray-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
