import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">

      <h1 className="text-7xl font-bold text-[#244D3F]">404</h1>
      
      <h2 className="text-2xl font-semibold mt-4 text-gray-800">Not Found</h2>

      <p className="text-gray-500 mt-2">Could not find requested resource</p>

      <Link
        href="/"
        className="mt-6 bg-[#244D3F] text-white px-6 py-3 rounded-lg hover:opacity-90 transition"> Return Home</Link>

    </div>
  );
}