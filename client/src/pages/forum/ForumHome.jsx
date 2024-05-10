export default function ForumHome() {
  return (
    <div className="min-h-screen">
      <div className="h-60 bg-gradient-to-tr from-appBlue to-appRed">
        <div className="h-60 overflow-hidden flex float-end">
          <img src="/care.png" alt="customer care" className="object-cover" />
        </div>
      </div>
      <main className="flex p-5">
        <div className="w-[30%]">one</div>
        <div className="flex-1">two</div>
      </main>
    </div>
  );
}
