import Image from "next/image";

export default function venue() {
  return (
    <>
      <div
        style={{
          width: "100vw",
          margin: "-1rem -1rem 1rem -1rem",
        }}
      >
        <Image
          src="/images/temple-of-peace.jpg"
          alt="Temple of Peace"
          width={1080}
          height={753}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <h1>The Temple of Peace</h1>
      <p>
        Founded in 1938, the Temple of Peace was built as a memorial to those
        who died in the First World War. It's home to the Welsh Book of
        Rememberance, containing the names of 35,000 servicemen and woman who
        lost their lives in the conflict. Its founder, Lord David Davies of
        Llandinam, hoped it would become a place of pilgramage to everyone in
        search of justice, health and peace.
      </p>
      <p>
        <a
          href="https://templeofpeace.wales/en/history"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Find out more.
        </a>
      </p>
      <h2>Getting Here</h2>
    </>
  );
}
