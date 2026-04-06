export default function Header() {
  return (
    <header className="w-full bg-white shadow sticky top-0 z-20">
      <div className="max-w-2xl mx-auto flex items-center gap-3 p-4">
        <img src="/logo.png" alt="logo" className="h-10 w-10 rounded-full border border-gray-200" />
        <h1 className="text-xl md:text-2xl font-bold text-[#7b2d26]">
          Steffi’s Soap Stories: Master Batch Calculator
        </h1>
      </div>
    </header>
  );
}