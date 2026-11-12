interface FooterProps {
  name: string;
}

function Footer({ name }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      © {year} {name} · Built with React + TypeScript
    </footer>
  );
}

export default Footer;