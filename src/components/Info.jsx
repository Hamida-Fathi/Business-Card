const Info = () => {
  return (
    <>
      <img
        src="/src/assets/profile.jpeg"
        alt="profile photo"
        className=" w-[317px] rounded-t-xl

h-[315} object-cover "
      />
      <h2 className="font-[700] w-[178px] text-[25px] text-center mx-auto">
        Hamida Fathi
      </h2>
      <h3 className="text-[12.8px] text-[#F3BF99] text-center">
        Frontend Developer
      </h3>
      <a
        href="https://hamida-fathi.github.io/CSS-Portfolio/"
        className="h-[16px] text-[10.24px] mt-2 text-white  hover:text-white visited:text-white"
      >
        hamidafathi.website
      </a>
      <div className="relative z-30 flex items-center justify-center gap-[25px] m-3">
        <button className="flex items-center w-[115px] h-[34px] px-[11px] py-[9px] box-border rounded-[6px] !bg-white !text-black  gap-[8px]">
          <img
            src="/src/assets/email.svg"
            alt="email icon"
            className="h-[20px] w-auto"
          />
          <a href="mailto:hamidafathi62@gmail.com" className=" text-black">
            Email
          </a>
        </button>

        <button className="flex items-center w-[115px] h-[34px]  py-[9px] rounded-[6px] bg-[#5093E2] text-white gap-[8px]">
          <img
            src="/src/assets/linkedin.svg"
            alt="linkedin icon"
            className="h-[20px] w-auto pl-0"
          />
          <a href="https://www.linkedin.com/in/hamida-fathi/">LinkedIn</a>
        </button>
      </div>
    </>
  );
};

export default Info;
