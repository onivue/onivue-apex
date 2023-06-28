const Footer = () => {
  return (
    <footer className="">
      <div className="my-6 flex flex-col ">
        <div className="mx-auto flex flex-col items-center ">
          <p className="leading-125 text-sm font-light lg:block">created by Albin Hoti</p>
        </div>

        <p className="block text-center text-xs font-light lg:block">
          © {new Date().getFullYear().toString()} •{" "}
          <a href="https://www.onivue.ch" className="decoration-2 hover:underline">
            onivue
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
