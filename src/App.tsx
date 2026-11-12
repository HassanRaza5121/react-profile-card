import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";
import { profile } from "./data/profile";

function App() {
  return (
    <>
      <main className="page">
        <ProfileCard {...profile} />
      </main>
      <Footer name={profile.name} />
    </>
  );
}

export default App;