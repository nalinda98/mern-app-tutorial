export default function Preloader({
  gif = "/preloader.gif",
  alt = "Loading…",
}) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "grid",
        placeItems: "center",
        background: "white", // or your brand background
        zIndex: 9999,
      }}
      aria-label="Loading"
      role="status"
    >
      <img
        src={gif}
        alt={alt}
        width={200}
        height={200}
        style={{ maxWidth: "90vw", maxHeight: "90vh" }}
      />
    </div>
  );
}
