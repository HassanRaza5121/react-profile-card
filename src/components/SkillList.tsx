interface SkillListProps {
  skills: string[];
}

function SkillList({ skills }: SkillListProps) {
  return (
    <>
      <h2 className="section-title">Skills</h2>
      <ul className="skills">
        {skills.map((skill) => (
          <li key={skill} className="skill">
            {skill}
          </li>
        ))}
      </ul>
    </>
  );
}

export default SkillList;