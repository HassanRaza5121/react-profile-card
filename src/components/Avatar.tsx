interface AvatarProps {
  src: string;
  alt: string;
}

function Avatar({ src, alt }: AvatarProps) {
  return <img className="avatar" src={src} alt={alt} />;
}

export default Avatar;