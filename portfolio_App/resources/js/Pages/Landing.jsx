import React, { useState, useEffect } from "react";
import { MagnifyingGlass, ListBullets , Bell, List, Browsers, CheckSquare, Swap, FileText, Globe, ClipboardText, Package , Lightning, FireSimple, File, Drop, CaretDown, CaretRight } from 'phosphor-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin, faTwitterSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Landing({auth}) {
  const [navbarBackground, setNavbarBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBackground(true);
      } else {
        setNavbarBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className={`h-[10%] fixed top-0 left-0 w-full z-10 flex justify-between items-center p-4 transition-all duration-300 ${navbarBackground ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="flex items-center ml-10">
        <Link href="/">
          <ApplicationLogo className={`${navbarBackground ? 'text-black' : 'text-white'}`} /> {/* ApplicationLogo component */}
        </Link>
        </div>
        <div className="flex space-x-4 mr-10">
        {auth.user ? (
              <Link
                  href={route('dashboard')}
                  className={`${navbarBackground ? 'text-black' : 'text-white'} hover:text-gray-500 rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:focus-visible:ring-white`}
              >
                  Dashboard
              </Link>
             ) : (
              <>
                  <Link
                      href={route('login')}
                      className={`${navbarBackground ? 'text-black' : 'text-white'} rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:focus-visible:ring-white`}
                  >
                      Log in
                  </Link>
                  <Link
                      href={route('register')}
                      className={`${navbarBackground ? 'text-black' : 'text-white'} rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:focus-visible:ring-white`}
                  >
                      Register
                  </Link>
              </>
          )}
        </div>
      </nav>
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
              minHeight: "75vh"
            }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')"
              }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div className="pr-12">
                    <h1 className="text-white font-semibold text-5xl">
                      Simplify Your Utility Payments
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                       Your trusted platform for managing and paying your water and electricity bills online, all in one place.
                    </p>
                  </div>
                </div>
              </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-primary fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-primary -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-secondary w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <Drop/>
                    </div>
                    <h6 className="text-xl font-semibold text-white">Water Bill Payments</h6>
                    <p className="mt-2 mb-4 text-gray-400">
                      Easily view and pay your water bills online. Stay updated with your usage and payment history at your convenience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-secondary w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-yellow-500">
                    <Lightning/>
                    </div>
                    <h6 className="text-xl font-semibold text-white">
                      Electricity Bill Payments
                    </h6>
                    <p className="mt-2 mb-4 text-gray-400">
                      Manage your electricity bills with ease. Our platform allows you to track and pay your electricity bills promptly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-secondary w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-500">
                      <i className="fas fa-shield-alt"><CheckSquare/></i>
                    </div>
                    <h6 className="text-xl font-semibold text-white">
                      Secure Transactions
                    </h6>
                    <p className="mt-2 mb-4 text-gray-400">
                      We ensure that all your payments are processed securely and efficiently, giving you peace of mind with every transaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-300 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-green-600">
                  <i className="fas fa-sync-alt text-xl"><CheckSquare/></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                  Seamless Payment Process
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-400">
                  we streamline your utility payments by allowing you to manage and pay your bills from one easy-to-use platform.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-400">
                  Whether it's your water or electricity bill, our platform ensures that the payment process is fast, simple, and secure.
                </p>
                <a
                  href="#"
                  className="font-bold text-blue-500 mt-8"
                >
                  Learn more about our services!
                </a>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-secondary w-full mb-6 shadow-lg rounded-lg">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px"
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-secondary fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Why Choose us?
                    </h4>
                    <p className="text-md font-light mt-2 text-gray-300">
                      We are dedicated to providing a hassle-free experience for managing your utility payments. Our platform is designed with the user in mind, offering convenience, security, and transparency in every transaction.
                    </p>
                  </blockquote>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="relative py-20 bg-customGray">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-customGray fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                    <i className="fas fa-rocket text-xl text-white"><Package /></i>
                  </div>
                  <h3 className="text-3xl font-semibold text-white">
                    Reliable Service
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-400">
                    we are committed to delivering reliable and accurate billing services. Our platform ensures that you receive up-to-date information on your water and electricity usage.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-400">
                            User-Friendly Interface
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-400">Easy Navigation</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-400">Quick Payments</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="relative bg-gray-300 pt-8 pb-6">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
                <h5 className="text-lg mt-0 mb-2 text-gray-700">
                  Find us on any of these platforms, we respond in 1-2 business days.
                </h5>
                <div className="mt-6">
                  <a
                    href="https://mobile.twitter.com/ahmedhmimida/with_replies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  >
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </a>
                  <a
                    href="https://www.facebook.com/Klechkowski_Ahmed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  >
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </a>
                  <a
                    href="https://www.instagram.com/Klechkowski_Ahmed/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  >
                       <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  {/* <a
                    href="https://www.linkedin.com/company/AhmedHmimida"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a> */}
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="flex flex-wrap items-top mb-6">
                  <div className="w-full lg:w-4/12 px-4 ml-auto">
                    <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                      Useful Links
                    </span>
                    <ul className="list-unstyled">
                      <li>
                        <Link
                          className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                          href="/"
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                          href={route('privacyPolicy')}
                        >
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <a
                          className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                          href="#"
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                      Contact Information
                    </span>
                    <ul className="list-unstyled">
                      <li className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                        <i className="fas fa-envelope mr-2"></i>
                        Ahmed0hmimida@gmail.com
                      </li>
                      <li className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                        <i className="fas fa-phone mr-2"></i>
                        +212 123 456 789
                      </li>
                      <li className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                        <i className="fas fa-phone mr-2"></i>
                        +212 987 654 321
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-400" />
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                <div className="text-sm text-gray-600 font-semibold py-1">
                  Copyright © {new Date().getFullYear()}{" "}.Alx Se All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </footer>

      </main>
    </>
  );
}
