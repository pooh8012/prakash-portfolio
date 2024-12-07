import LocalConfig from "@/constants/config";

const ResumeButton = () => {
  return (
    <a
      className="app__outlined_btn min-w-[12rem]"
      href={LocalConfig.values.NEXT_PUBLIC_RESUME_LINK}
      download="Prakash Jha_Software Developer.pdf" // Forces the download with the given file name
    >
      Download Resume
    </a>
  );
};

export default ResumeButton;
