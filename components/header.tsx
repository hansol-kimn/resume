export default function Header() {
  return (
    <>
      <div className="w-full z-40 bg-white border-b border-primary/15 h-14 flex justify-center items-center md:h-12 fixed top-0 left-0">
        <div className="max-w-[1000px] w-full px-6 flex justify-between items-center">
          <div>logo</div>
          <a href="/resume.pdf" download="이력서.pdf" className="bg-accent text-primary font-semibold px-3.5 py-1.5 text-[14px]">
            이력서 다운로드
          </a>
        </div>
      </div>
      <div className="w-full h-11 fixed top-8 md:top-10 left-0 z-30 bg-linear-to-b from-primary/10 to-transparent pointer-events-none" />
    </>
  );
}
