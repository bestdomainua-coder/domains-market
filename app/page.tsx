async function getDomains() {
  const res = await fetch("https://domains.in.ua/api/domains.php", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Home() {
  const domains = await getDomains();

  return (
    <div style={{ background: "#0B0B0B", minHeight: "100vh", color: "white", padding: 40 }}>
      <h1 style={{ fontSize: 40, marginBottom: 20 }}>
        Domains Market
      </h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
        {domains.map((d: any) => (
          <div key={d.id} style={{ background: "#111", padding: 20, borderRadius: 12 }}>
            <h3>{d.name}</h3>
            <p style={{ color: "#3B82F6" }}>${d.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
