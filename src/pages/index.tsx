import Link from 'next/link';

export default function Page() {
  return <div>
    <h1>Homepage!</h1>
    <div>
      <Link href="account/login">Login</Link>
    </div>
    <div>
      <Link href="account/signup">Signup</Link>
    </div>

    <hr />
    <label htmlFor="search">Search</label>
    <input type="text" placeholder="search" />
  </div>
}