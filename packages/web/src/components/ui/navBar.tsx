import { Search } from "lucide-react";
import Logo from "../icons/logo";
import avatar from "@assets/avatar.png";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { NavLink, Outlet } from "react-router";

const NavBar = () => {
  return (
    <>
      <nav className="bg-background flex justify-between py-6 *:flex *:items-center *:gap-5">
        <Logo />
        <div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-foreground font-bold" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/for-you"
            className={({ isActive }) =>
              isActive ? "text-foreground font-bold" : ""
            }
          >
            For you
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive ? "text-foreground font-bold" : ""
            }
          >
            Movies
          </NavLink>
          <NavLink
            to="/series"
            className={({ isActive }) =>
              isActive ? "text-foreground font-bold" : ""
            }
          >
            Series
          </NavLink>
          <NavLink
            to="/watchlist"
            className={({ isActive }) =>
              isActive ? "text-foreground font-bold" : ""
            }
          >
            WatchList
          </NavLink>
        </div>
        <div>
          <Search height={24} />
          <Avatar>
            <AvatarImage src={avatar} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default NavBar;
