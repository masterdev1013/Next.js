import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href='/'>Home</Link>
      <Link href='about'>About</Link>
      <Link href='blog'>Blog</Link>
    </div>
  )
};
