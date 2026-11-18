export default function Page() {
  return (
    <main className="m-2">
      <h1 className="mb-4 text-xl">Projects</h1>
      <div className="flex flex-col gap-1">
        <p>
          Projects will go here. For now, this website is my current project!
        </p>
        <div className="flex flex-col gap-2 md:flex-row">
          <div className="max-w-sm overflow-hidden rounded px-6 py-4 shadow-lg shadow-gray-900">
            <h2 className="mb-2 text-xl font-bold">Example Project Card</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos ad quidem eum eos, aspernatur, quia, nesciunt eaque
              ipsam soluta eveniet optio! Laborum maiores eaque incidunt non
              rerum modi a! Amet?
            </p>
          </div>

          <div className="max-w-sm overflow-hidden rounded px-6 py-4 shadow-lg shadow-gray-900">
            <h2 className="mb-2 text-xl font-bold">Example Project Card</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
              accusantium, fugit obcaecati eos odit modi quisquam qui
              consequuntur laudantium quas, beatae necessitatibus at similique
              sunt excepturi reprehenderit quod voluptatem eveniet.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
