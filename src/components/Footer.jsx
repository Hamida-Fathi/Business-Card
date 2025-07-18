const Footer = () => {
  return (
    <div className="footer-contianer flex justify-center gap-x-[2.5rem] items-center h-[64px] bg-[#161619] rounded-b-lg relative top-12">
      <a href="https://x.com/fathihamid17338?s=11">
        <img
          src="/src/assets/twitter.svg"
          alt="twitter photo"
          className="h-[20px] w-auto"
        />
      </a>
      <a href="#">
        <img
          src="/src/assets/facebook.svg"
          alt="facebook photo"
          className="h-[20px] w-auto transition duration-300 ease-in-out
           group-hover:scale-125
           filter grayscale
           group-hover:filter-none
           group-hover:saturate-[1.5] group-hover:hue-rotate-[190deg] group-hover:brightness-[1.2] group-hover:contrast-[1.2]"
        />
      </a>
      <a href="https://www.instagram.com/hamida.fathi?igsh=MWNlOXF3N3M4M3p0dQ%3D%3D&utm_source=qr">
        <img
          src="/src/assets/instagram.svg"
          alt="instagram photo"
          className="h-[20px] w-auto"
        />
      </a>
      <a href="https://github.com/Hamida-Fathi">
        <img
          src="/src/assets/github.svg"
          alt="github photo"
          className="h-[20px] w-auto"
        />
      </a>
    </div>
  );
};

export default Footer;
