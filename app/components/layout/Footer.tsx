import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" bg-dark mt-34 border-1 border-primaryBorder ">
      <div className=" text-white pt-16 px-14 ">
        <div className=" max-w-[90rem]   mx-auto ">
          <div className="flex flex-wrap justify-between mb-8">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <Link className="text-3xl text-primary font-semibold flex" href="/">
                <span>C</span>
                <p className="text-white">rypto</p>
                <span>V</span>
                <p className="text-white">erse</p>
                <span>.</span>
              </Link>
              <p className="mt-4 text-md text-gray-400">Our vision is to provide convenience and help increase your sales business.</p>
            </div>
            <div className="w-[40%] flex  justify-between">
              <ul>
                <h2 className="font-semibold text-lg text-gray-400 mb-4 ">About</h2>
                <li className="p-1 hover:text-gray-700 hover:cursor-pointer transition duration-200">How it works</li>
                <li className="p-1 hover:text-gray-700 hover:cursor-pointer transition duration-200">Featured</li>
                <li className="p-1 hover:text-gray-700 hover:cursor-pointer transition duration-200">Partnership</li>
                <li className="p-1 hover:text-gray-700 hover:cursor-pointer transition duration-200">Business Relation</li>
              </ul>
              <ul>
                <h2 className="font-semibold text-lg text-gray-400 mb-4 ">Community</h2>
                <li className="p-1 hover:text-gray-700 hover:cursor-pointer transition duration-200">Events</li>
                <li className="p-1 hover:text-gray-700 hover:cursor-pointer transition duration-200">Blog</li>
                <li className="p-1 hover:text-gray-700 hover:cursor-pointer transition duration-200">Podcast</li>
                <li className="p-1 hover:text-gray-700 hover:cursor-pointer transition duration-200">Invite a friend</li>
              </ul>
              <ul>
                <h2 className="font-semibold text-lg text-gray-400 mb-4 ">Socials</h2>
                <li className="p-1 hover:text-gray-700 hover:cursor-pointer transition duration-200">Discord</li>
                <li className="p-1 hover:text-gray-700 hover:cursor-pointer transition duration-200">Instagram</li>
                <li className="p-1 hover:text-gray-700 hover:cursor-pointer transition duration-200">Twitter</li>
                <li className="p-1 hover:text-gray-700 hover:cursor-pointer transition duration-200">Facebook</li>
              </ul>
            </div>
          </div>
          <div className=" border-t-1  border-primaryBorder  py-8  text-sm flex justify-between items-center">
            <div>©2022 MORENT. All rights reserved</div>
            <div className="flex gap-6">
              <div>Privacy &amp; Policy</div>
              <div>Terms &amp; Conditions</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
