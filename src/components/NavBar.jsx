import logo from "../assets/images/logoImage.png"

const NavBar = () => {
  return (
    <div>
      <div className="flex flex-row justify-between p-2 mx-6 md:mx-20 mt-6">
        <div className="flex flex-row gap-4 md:gap-20">
          <h1>Home</h1>
          <h1>About</h1>
          <h1>Products</h1>
        </div>
        <img
          src={logo}
          alt="Can't load image"
          className="w-[50px] h-[50px]"
        />
        <div className="flex flex-row gap-4 md:gap-20">
          <h1>Features</h1>
          <h1>Awards</h1>
          <h1>FAQs</h1>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
