import "./PlayerCard.css";

export default function PlayerCard({ children }) {
  return (
    <div className="player-card">
      <img src="src/assets/Hotelcalifornia.jpg" />

      {children}
    </div>
  );
}
