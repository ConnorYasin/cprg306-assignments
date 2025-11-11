'use client';

import Link from 'next/link';
import { useUserAuth } from "../contexts/AuthContext";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleLogin = async () => {
        try {
            await gitHubSignIn();
        } catch (err) {
            console.error('Login failed', err);
        }
    };

    const handleLogout = async () => {
        try {
            await firebaseSignOut();
        } catch (err) {
            console.error('Logout failed', err);
        }
    };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black p-6">
      <section className="max-w-md w-full border p-4 mb-4 rounded shadow bg-gradient-to-r from-black-100 to-gray-800 capitalize text-white backdrop-blur text-center">
        {!user ? (
          <>
            <h1 className="text-3xl font-semibold mb-3">Welcome</h1>
            <p className="text-sm text-gray-300 mb-6 normal-case">Sign in to manage your shopping list.</p>
            <button
              onClick={handleLogin}
              className="w-full bg-black text-white px-4 py-2 rounded font-bold hover:bg-gray-600 border border-white"
            >
              Log in with GitHub
            </button>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-semibold mb-2 normal-case">Welcome, {user.displayName ?? user.email}</h1>
            <p className="text-sm text-gray-300 mb-6 normal-case">{user.email}</p>

            <div className="flex gap-3">
              <button
                onClick={handleLogout}
                className="flex-1 bg-black text-white px-4 py-2 rounded font-bold hover:bg-gray-600 border border-white"
              >
                Log out
              </button>

              <Link
                href="/week-9/shopping-list"
                className="flex-1 inline-flex items-center justify-center bg-black text-white px-4 py-2 rounded font-bold hover:bg-gray-600 border border-white"
              >
                Go to shopping list
              </Link>
            </div>
          </>
        )}
      </section>
    </main>
  );
}