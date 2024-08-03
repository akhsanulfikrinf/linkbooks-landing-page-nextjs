"use client";
export default function Home() {
  const callAPI = async () => {
    try {
      const res = await fetch(`http://localhost/api/api.php`, {
        method: "GET",
        headers: {
          api_key: "123",
        },
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <main>
        <button onClick={callAPI}>Make API call</button>
      </main>
    </div>
  );
}
