"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Input,
} from "@nextui-org/react";
import { PiShoppingCartBold } from "react-icons/pi";
import { SearchIcon } from "./SearchIcon.jsx";
import Logo from "./../../public/logo.png";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation.js";
import { logoutUser } from "@/redux/reducerSlices/userSlice.js";
import { products } from "./selectcategorylist/data.js";
import { FaAngleDown } from "react-icons/fa";
import Link from "next/link.js";
export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const { userDetails } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const router = useRouter();

  const logout = () => {
    dispatch(logoutUser());
    router.push("/");
  };

  const menuItems = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "Shop", link: "/products" },
    { id: 3, name: "Contact Us", link: "/contactus" },
    { id: 4, name: "About Us", link: "/aboutus" },
    { id: 4, name: "Log Out", link: "/" },
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="block lg:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="hidden lg:flex" justify="start">
        <Image
          className="hidden  lg:block"
          src={Logo}
          width={80} // Set the width you desire
          height={40}
        />
      </NavbarContent>
      <NavbarContent className="hidden lg:flex gap-8 " justify="center">
        <NavbarItem>
          <Link color="foreground" href="/home">
            Home
          </Link>
        </NavbarItem>
        <Dropdown>
          <DropdownTrigger>
            <div className="flex items-center gap-1 cursor-pointer">
              Category <FaAngleDown />
            </div>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Dynamic Actions"
            items={products}
            className="max-h-60 overflow-y-auto"
          >
            {(item) => (
              <DropdownItem
                key={item.key}
                color={item.key === "delete" ? "danger" : "default"}
                className={item.key === "delete" ? "text-danger" : ""}
              >
                {item.label}
              </DropdownItem>
            )}
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link href="/products" color="foreground">
            Shop Now
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contactus" color="foreground">
            Contact Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="aboutus" color="foreground">
            About Us
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" className="items-center ml-10" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem]  w-[20rem] h-10 hidden lg:block ",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Dropdown placement="bottom-end ">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform hidden lg:block"
              color="secondary"
              name={userDetails.fullName}
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{userDetails.email}</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={() => logout()}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarContent>
        <div className="flex">
          <Link href="/cart">
            <button className="relative">
              <PiShoppingCartBold size={27} color="blue" />
              <span className="rounded-full bg-orange-400 text-white px-[1.5px] py-[1.5px] text-[11px] absolute bottom-[14px] left-[20px]">
                {cartItems.length}
              </span>
            </button>
          </Link>
        </div>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href={item.link}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
