import Logo from "./assets/HobbyCue Logo.png";
import SearchBox from "./assets/SearchBox.png";
import NavElements from "./assets/nav-elements.png";
import mobileBell from "./assets/notifications_black_24dp 1.png";
import mobileSearch from "./assets/icons8_search 1.png";
import Menu from "./assets/menu_black_24dp 1.png";
import SignIn from "./assets/Sign In Form.png";
import GroupPic from "./assets/Group 27.png";
import People from "./assets/People.png";
import Place from "./assets/Place.png";
import Product from "./assets/Product.png";
import Program from "./assets/Program.png";
import Add from "./assets/Add.png";
import Testimonials from "./assets/testimonials.png";
import Player from "./assets/Audio Track.png";
import UserPhoto from "./assets/User.png";
import Banner from "./assets/Banner.png";
import Links from "./assets/Bottom-links.png";




function App() {
  return (
    <div className=" h-screen w-screen bg-slate-50">
      <nav className=" flex items-center justify-around bg-white p-2 ">
        <div>
          <img className=" w-[220px]" src={Logo} alt="logo" />
        </div>
        <div className=" sm:block hidden">
          <img src={SearchBox} alt="SearchBox" />
        </div>
        <div className=" sm:block hidden">
          <img src={NavElements} alt="navEl" />
        </div>
        <div className=" flex flex-row gap-2 sm:hidden">
          <div>
            <img src={mobileSearch} alt="search" />
          </div>
          <div>
            <img src={mobileBell} alt="bellicon" />
          </div>
          <div>
            <img src={Menu} alt="menu" />
          </div>
        </div>
      </nav>
      <main className="bg-[#F7F5F9] w-screen grid sm:grid-cols-4 gap-6 pt-10 sm:pl-12 ">
        <div className=" sm:col-span-2 min-h-[200px]">
          <div className=" flex flex-col gap-3  items-center sm:items-start ">
            <h1 className=" text-2xl font-extrabold italic">
              Explore your{" "}
              <span className="text-[#0096C8] text-2xl font-bold italic">
                hobby
              </span>{" "}
              or{" "}
              <span className="text-[#8064A2] text-2xl font-bold italic">
                passion
              </span>
            </h1>

            <p className=" text-sm sm:text-start leading-loose text-center  ">
              Sign-in to interact with a community of fellow hobbyists and an
              eco-system of experts, teachers, suppliers, classes, workshops,
              and places to practice, participate or perform. <br />{" "}
              <span className=" sm:inline hidden">
                Your hobby may be about visual or performing arts, sports,
                games, gardening, model making, cooking, indoor or outdoor
                activities…
              </span>
            </p>
            <p className=" text-sm leading-loose  sm:block hidden">
              If you are an expert or a seller, you can Add your Listing and
              promote yourself, your students, products, services or events. Hop
              on your hobbyhorse and enjoy the ride.
            </p>
          </div>
        </div>
        <div className=" min-h-[100px]  sm:col-span-2 sm:row-span-2">
          <div className=" flex flex-row justify-center">
            <img className=" w-[340px] " src={SignIn} alt="signin" />
          </div>
        </div>
        <div className="sm:col-span-2 mt-4">
          <img src={GroupPic} alt="photo" />
        </div>
      </main>
      {/* {second layer} */}

      <main className=" grid sm:grid-cols-4 mt-10 gap-2 my-6">
        <div className=" min-h-[100px] mx-24 sm:mx-0 sm:col-start-2 sm:col-end-3 ">
          
          <div className=" flex flex-col gap-4 border rounded-md p-4">
            <div className="flex flex-row sm:justify-start justify-center">
              <img className=" w-[100px]" src={People} alt="people" />
            </div>
            <p className=" text-xs sm:text-start text-center">
              Find a teacher, coach, or expert for your hobby interest in your
              locality. Find a partner, teammate, accompanist or collaborator.
            </p>
            <div className="flex sm:justify-start justify-center">
              <button className=" w-[240px] sm:w-[85px] sm:text-start text-xs px-4 py-2 font-bold rounded-md border border-[#8064A2] text-[#8064A2]">
                Connect
              </button>
            </div>
          </div>
          

        </div>
        <div className="min-h-[100px] mx-24 sm:mx-0  sm:col-start-3 sm:col-end-4">
          <div className=" flex flex-col gap-4 border rounded-md p-4">
            <div className=" flex flex-row sm:justify-start justify-center ">
              <img className=" w-[90px]" src={Place} alt="place" />
            </div>
            <p className=" text-xs sm:text-start text-center">
              Find a class, school, playground, auditorium, studio, shop or an
              event venue. Book a slot at venues that allow booking through
              hobbycue.
            </p>
            <div className=" flex sm:justify-start justify-center">
              <button className=" w-[240px] sm:w-[85px] sm:text-start text-xs px-4 py-2 font-bold rounded-md border border-[#8064A2] text-[#8064A2]">
                Meet up
              </button>
            </div>
          </div>
        </div>


        <div className=" min-h-[100px] mx-24 sm:mx-0  sm:col-start-2 sm:col-end-3">
          <div className=" flex flex-col gap-4 border rounded-md p-4">
            <div className="flex flex-row sm:justify-start justify-center">
              <img className=" w-[100px]" src={Product} alt="product" />
            </div>
            <p className=" text-xs sm:text-start text-center">
              Product Find equipment or supplies required for your hobby. Buy,
              rent or borrow from shops, online stores or from community
              members.
            </p>
            <div className=" flex sm:justify-start justify-center">
              <button className=" w-[240px] sm:w-[85px] sm:text-start text-xs px-4 py-2 font-bold rounded-md border border-[#8064A2] text-[#8064A2]">
               Get it
              </button>
            </div>
          </div>
        </div>
        <div className="min-h-[100px] mx-24 sm:mx-0 sm:col-start-3 sm:col-end-4">
        <div className=" flex flex-col gap-4 border rounded-md p-4 min-h-[170px]">
            <div className="flex flex-row sm:justify-start justify-center">
              <img className=" w-[100px]" src={Program} alt="program" />
            </div>
            <p className=" text-xs sm:text-start text-center">
            Find events, meetups and workshops related to your hobby.  Register or buy tickets online.
            </p>
            <div className=" flex sm:justify-start justify-center">
              <button className=" w-[240px] sm:w-[85px] sm:text-start text-xs px-4 py-2 font-bold rounded-md border border-[#8064A2] text-[#8064A2] mt-2">
               Attend
              </button>
            </div>
          </div>
        </div>

        
      </main>

      {/* {third layer} */}

      <main className=" min-h-[250px] grid grid-cols-4 sm:pl-8  mt-8">
         <div className=" bg-[#F7FDFF] col-span-4 mx-8 my-6 ">
            <div className=" bg-white mx-8 my-10 sm:mx-36 sm:my-14 flex flex-col gap-3 border rounded-md p-3">
              <div>
              <img className=" w-[200px]" src={Add} alt="Add" />
              </div>
              <p className=" text-xs sm:text-start text-center">Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should <br className=" sm:inline hidden" /> be on hobbycue?  Go ahead and Add your Own page</p>
              <div className=" flex sm:justify-start justify-center">
              <button className=" w-[220px] sm:w-[80px] sm:text-start text-xs px-4 py-2 font-bold rounded-md border border-[#8064A2] text-[#8064A2] mt-2">
               Attend
              </button>
              </div>
            </div>
         </div>
      </main>

      {/* {fourth layer } */}

      <main className=" grid sm:grid-cols-4  mt-8 p-6 bg-[#F7F5F9] rounded-md mx-11 sm:mx-40">
            <div className=" min-h-[100px]  sm:col-span-4 ml-9 my-2 ">
            <div className=" flex flex-row sm:justify-start justify-center ">
              <img className=" w-[180px] " src={Testimonials} alt="Testimonials" />
            </div>
            <p className=" text-sm sm:text-start text-center sm:py-4">
            In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like <br className=" sm:inline hidden" /> minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and <br className=" sm:inline hidden" /> exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I <br className=" sm:inline hidden" /> can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have <br className=" sm:inline hidden" /> discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an <br className=" sm:inline hidden" /> excellent idea and I highly recommend it.
            </p>
            </div>
            <div className=" min-h-[100px]  sm:col-span-4 ">
              <div className=" flex sm:flex-row flex-col-reverse sm:justify-around sm:items-center gap-3 mt-4">

            <div className=" flex flex-row sm:justify-start justify-center  ">
              <img className="sm:w-[640px] sm:h-[80px]" src={Player} alt="Testimonials" />
            </div>
            <div className="flex flex-row sm:justify-start justify-center">
            <img className=" w-[180px] sm:h-[60px] " src={UserPhoto} alt="Testimonials" />
            </div>
              </div>
            </div>
           

      </main>

      {/* {banner} */}
      <main className=" mt-10 mx-12">
      <img src={Banner} alt="Banner" />
      </main>

      {/* {Last layer} */}

      <main className="grid sm:grid-cols-5 gap-8 mt-12 mx-12">
        <div className=" min-h-[100px] col-span-1">
          <div className=" flex flex-col">
            <div className=" flex flex-row justify-between">

          <h3 className=" font-bold mb-3">Hobbycue</h3>
          <div className=" sm:hidden block">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_1506)">
<path d="M5.41335 9.80646L8.00001 7.2198L10.5867 9.80646C10.8467 10.0665 11.2667 10.0665 11.5267 9.80646C11.7867 9.54646 11.7867 9.12647 11.5267 8.86647L8.46668 5.80647C8.20668 5.54647 7.78668 5.54647 7.52668 5.80647L4.46668 8.86647C4.20668 9.12647 4.20668 9.54646 4.46668 9.80646C4.72668 10.0598 5.15335 10.0665 5.41335 9.80646Z" fill="#08090A"/>
</g>
<defs>
<clipPath id="clip0_1_1506">
<rect width="16" height="16" fill="white" transform="matrix(-1 0 0 -1 16 16)"/>
</clipPath>
</defs>
</svg>

          </div>
            </div>
          <ul className=" flex flex-col gap-1 text-gray-500">
            <li>About Us</li>
            <li>Our Services</li>
            <li>Work with Us</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
          </div>
        </div>
        <div className=" min-h-[100px] sm:col-span-1">
        <div className=" flex flex-col">
            <div className=" flex flex-row justify-between">

          <h3 className=" font-bold mb-3">How Do I</h3>
          <div className=" sm:hidden block">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_1506)">
<path d="M5.41335 9.80646L8.00001 7.2198L10.5867 9.80646C10.8467 10.0665 11.2667 10.0665 11.5267 9.80646C11.7867 9.54646 11.7867 9.12647 11.5267 8.86647L8.46668 5.80647C8.20668 5.54647 7.78668 5.54647 7.52668 5.80647L4.46668 8.86647C4.20668 9.12647 4.20668 9.54646 4.46668 9.80646C4.72668 10.0598 5.15335 10.0665 5.41335 9.80646Z" fill="#08090A"/>
</g>
<defs>
<clipPath id="clip0_1_1506">
<rect width="16" height="16" fill="white" transform="matrix(-1 0 0 -1 16 16)"/>
</clipPath>
</defs>
</svg>

          </div>
            </div>
          <ul className=" flex flex-col gap-1 text-gray-500">
            <li>Sign Up</li>
            <li>Add a listing</li>
            <li>Claim Listing</li>
            <li>Post a Query</li>
            <li>Add a Blog Post</li>
            <li>Other Queries</li>
          </ul>
          </div>
        </div>
        <div className=" min-h-[100px]  sm:col-span-1">
        <div className=" flex flex-col">
            <div className=" flex flex-row justify-between">

          <h3 className=" font-bold mb-3">Quick Links</h3>
          <div className=" sm:hidden block">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_1506)">
<path d="M5.41335 9.80646L8.00001 7.2198L10.5867 9.80646C10.8467 10.0665 11.2667 10.0665 11.5267 9.80646C11.7867 9.54646 11.7867 9.12647 11.5267 8.86647L8.46668 5.80647C8.20668 5.54647 7.78668 5.54647 7.52668 5.80647L4.46668 8.86647C4.20668 9.12647 4.20668 9.54646 4.46668 9.80646C4.72668 10.0598 5.15335 10.0665 5.41335 9.80646Z" fill="#08090A"/>
</g>
<defs>
<clipPath id="clip0_1_1506">
<rect width="16" height="16" fill="white" transform="matrix(-1 0 0 -1 16 16)"/>
</clipPath>
</defs>
</svg>

          </div>
            </div>
          <ul className=" flex flex-col gap-1 text-gray-500">
            <li>Listings</li>
            <li>Blog Posts</li>
            <li>Shop / Store</li>
            <li>Community</li>
            
          </ul>
          </div>
        </div>
        <div className=" min-h-[100px]  sm:col-span-2 my-6">
          <img   src={Links} alt="links" />
        </div>
      </main>
      <div className=" mt-4 bg-[#F7F5F9] w-screen min-h-[80px] flex justify-center items-center font-semibold mx-8 " > © Purple Cues Private Limited </div>

    </div>
  );
}

export default App;
