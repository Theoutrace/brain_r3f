import Link from "next/link";

const NavBar = () => {
  return (
    <div className="bg-slate-800 flex gap-4 p-2">
      <Link href={`/home`}>Home</Link>
      <Link href="/about">About</Link>
      <Link href="/services">Services</Link>
      <Link href="/blogs">blogs</Link>
    </div>
  );
};

export default NavBar;
