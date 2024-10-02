import logo from "../assets/open-enter-logo.svg";

function Header() {
  return (
    <header className="w-1440 flex justify-between font-futuraRoundDemi mb-[40px]">
      <div className="flex">
        <img src={logo} alt="Company Logo" />
        <span className="ml-[8px] text-[32px]">Open Enterprise</span>
      </div>
      <ul className="flex text-[20px] items-center">
        <li className="mr-[40px] hover:text-hoverColor">
          <a href="#">Why Open Enterprise</a>
        </li>
        <li className="mr-[40px] hover:text-hoverColor">
          <a href="#">Features</a>
        </li>
        <li className="mr-[40px] hover:text-hoverColor">
          <a href="#">Contribute</a>
        </li>
        <li className="mr-[40px] hover:text-hoverColor">
          <a href="#">Request early access</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
