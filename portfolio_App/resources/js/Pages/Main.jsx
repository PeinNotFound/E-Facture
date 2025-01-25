import React, { useState, useEffect } from 'react';
import { MagnifyingGlass, ListBullets , Bell, List, Browsers, CheckSquare, Swap, FileText, Globe, Money, UserGear, Cookie, ClipboardText, Lightning, FireSimple, File, Drop, CaretDown, CaretRight } from 'phosphor-react';
import './../../css/style.css'; 
import { Link, usePage } from '@inertiajs/react';


const Main = () => {
  const { user } = usePage().props;

  return (
    <div className="app h-[20rem]" >
      <header className="app-header">
            <div className="app-header-logo">
          <div className="logo">
            <span className="logo-icon">
              <img src="images/radeemaLogo.png" alt="Logo" />
            </span>
            <h1 className="logo-title">
              <span>Radeema</span>
              <span>راديما</span>
            </h1>
          </div>
        </div>
        <div className="app-header-navigation">
          <div className="tabs">
            <Link href="/">Overview</Link>
            <Link href={route('dashboard')} className="active">Payments</Link>
            <Link href={route('electricity')} className="">Electricity</Link>
            <Link href={route('water')} className="">Water</Link>
            <Link href={route('profile.edit')}>Account</Link>
            <Link href="/">About</Link>
            <Link href={route('privacyPolicy')}>Privacy Policy</Link>
          </div>
        </div>
        <div className="app-header-actions">
          <Link href={route('profile.edit')}>
          <button className="user-profile">
            <span>{user.name}</span>
            <span>
              <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" alt="User Avatar" />
            </span>
          </button>
          </Link>
          <span className='pl-7'><Link href={route('logout')} method="post" as="button">Log Out</Link></span>
          {/* <div className="app-header-actions-buttons">
            <button className="icon-button large">
              <MagnifyingGlass />
            </button>
            <button className="icon-button large">
              <Bell />
            </button>
          </div> */}
        </div>
        <div className="app-header-mobile">
          <button className="icon-button large">
            <List />
          </button>
        </div>
      </header>
      <div className="app-body">
        <div className="app-body-navigation">
          <nav className="navigation">
            <Link href={route('dashboard')}>
              <Browsers />
              <span>Dashboard</span>
            </Link>
            <Link href={route('dashboard')}>
              <Money />
              <span>Payments</span>
            </Link>
            <Link href={route('electricity')}>
              <Lightning />
              <span>Electricity</span>
            </Link>
            <Link href={route('water')}>
              <Drop />
              <span>Water</span>
            </Link>
            <Link href={route('profile.edit')}>
              <UserGear />
              <span>Account</span>
            </Link>
            <Link href="/">
              <ClipboardText />
              <span>About</span>
            </Link>
            <Link  href="/">
              <Cookie />
              <span>Privacy Policy</span>
            </Link>
          </nav>
          <footer className="footer">
            <h1>Radeema<small>©</small></h1>
            <div>
              Radeema ©<br />
              All Rights Reserved 2024
            </div>
          </footer>
        </div>
        <div className="ml-5 app-body-main-content">
          <section className="service-section">
            <h2>Services</h2>
            <div className="service-section-header">
              <div className="info-box bg-secondary rounded-lg shadow-lg pl-8 pt-4 pb-4">
                <h3 className="text-xl font-semibold text-gray-200">Welcome to Radeema Services</h3>
                <p className="text-md text-white mt-2 w-[50rem]">
                  Below, you can access your latest bills, view your payment history, and manage your account. For any assistance, our support team is always ready to help.
                </p>
                <p className="text-md text-white mt-2">
                  Remember to keep your contact information up to date to receive timely notifications about your services.
                </p>
                <p className="text-md text-white mt-2">
                  Thank you for choosing Radeema!
                </p>
              </div>
            </div>
            <div className="tiles">
              <article className="tile">
                <div className="tile-header">
                  <Lightning size={40} weight="light"/>
                  <h3>
                    <span>Electricity</span>
                    <span>Latest Bill.</span>
                  </h3>
                </div>
                <Link href={route('latest_bill')}>
                  <span>Go to service</span>
                  <span className="icon-button">
                    <CaretRight />
                  </span>
                </Link>
              </article>
              <article className="tile">
                <div className="tile-header">
                  <Drop size={40} weight="light" />
                  <h3>
                    <span>Water</span>
                    <span>Latest Bill.</span>
                  </h3>
                </div>
                <Link href={route('latest_bill_water')}>
                  <span>Go to service</span>
                  <span className="icon-button">
                    <CaretRight/>
                  </span>
                </Link>
              </article>
              {/*<-- hide when user is not admin */}
              {user.role == 'admin' && (
              <article className="tile">
                <div className="tile-header">
                  <ListBullets  size={42} weight="light"/>
                  <h3>
                    <span>Bills List</span>
                    <span>Admin Work Area</span>
                  </h3>
                </div>
                <Link href={route('admin.bills')}>
                  <span>Go to service</span>
                  <span className="icon-button">
                    <CaretRight />
                  </span>
                </Link>
              </article>
               )}
              {/* --> */}
            </div>
            {/* fill the side bar */}
            {/* <div className='app-body-sidebar'>
              <div className='payments'>test</div>
            </div> */}
            <div className="service-section-footer">
              <p>Services are paid according to the current state of the currency and tariff.</p>
            </div>
          </section>
        </div>
        <div className="app-body-sidebar"></div>
      </div>
    </div>
  );
};

export default Main;
