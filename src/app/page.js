import { QRCode } from "./QRCode";

export default function Home() {
  return (
    <div>
      <Challenge title="Challenge 1">
        <QRCode />
      </Challenge>
      <Challenge title="Challenge 2"></Challenge>
    </div>
  );
}

function Challenge({ title, children }) {
  return (
    <div>
      <h2 className="bg-black h-24 text-white text-center font-Figtree flex items-center justify-center">
        {title}
      </h2>
      <p>{children}</p>
    </div>
  );
}
