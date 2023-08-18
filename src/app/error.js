"use client"; // Error components must be Client components

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Terjadi kesalahan sistem!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
