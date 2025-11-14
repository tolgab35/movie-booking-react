import "./App.css";
import { useBookingStore } from "./stores/bookingStore";

function App() {
  const booking = useBookingStore((state) => state.booking);

  return (
    <div>
      <h1>Movie Booking</h1>
    </div>
  );
}

export default App;
