export default function Profile() {
  return (
    <div className="min-h-screen">
      <div className="md:h-60 h-48 bg-gradient-to-tr from-appBlue to-appRed relative">
        <div className="md:h-60 h-56 overflow-hidden flex absolute top-16 md:top-2">
          <img
            src="/cart.png"
            alt="customer care"
            className="object-cover h-3/5 md:h-full"
          />
        </div>
      </div>
      <main className="flex flex-col md:flex-row gap-3 max-w-7xl mx-auto mt-2">
        <div className="flex-1">
          <div className="flex flex-col gap-1">
            <label>Account Name</label>
            <input type="text" placeholder="Name" className="py-1 px-2" />
          </div>
        </div>
        <div className="flex-1">two</div>
      </main>
    </div>
  );
}
