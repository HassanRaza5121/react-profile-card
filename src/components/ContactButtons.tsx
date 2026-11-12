import { useState } from "react";

interface ContactButtonsProps {
  email: string;
  github: string;
  linkedin: string;
  resume: string;
  name: string;
}

function ContactButtons({
  email,
  github,
  linkedin,
  resume,
  name,
}: ContactButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert(`You can reach me at: ${email}`);
    }
  };

  const resumeFileName = `${name.replace(/\s+/g, "-")}-Resume.pdf`;

  return (
    <div className="buttons">
      <a
        className="btn btn-primary btn-full"
        href={resume}
        download={resumeFileName}
      >
        📄 Download Resume
      </a>
      <button className="btn btn-outline btn-full" onClick={handleCopyEmail}>
        {copied ? "✅ Email copied!" : "✉️ Copy my email"}
      </button>
      <a
        className="btn btn-outline"
        href={github}
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <a
        className="btn btn-outline"
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </div>
  );
}

export default ContactButtons;