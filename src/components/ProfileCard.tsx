import Avatar from "./Avatar";
import SkillList from "./SkillList";
import ContactButtons from "./ContactButtons";
import type { Profile } from "../types/profile";

function ProfileCard({
  name,
  role,
  location,
  bio,
  photo,
  skills,
  email,
  github,
  linkedin,
  resume,
}: Profile) {
  return (
    <article className="card">
      <Avatar src={photo} alt={`Photo of ${name}`} />
      <h1 className="name">{name}</h1>
      <p className="role">{role}</p>
      <p className="location">📍 {location}</p>
      <p className="bio">{bio}</p>
      <SkillList skills={skills} />
      <ContactButtons
        email={email}
        github={github}
        linkedin={linkedin}
        resume={resume}
        name={name}
      />
    </article>
  );
}

export default ProfileCard;