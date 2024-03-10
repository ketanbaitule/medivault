import { List, ListItem, Navbar,  Tabbar, TabbarLink } from "konsta/react";
import Link from "next/link";
import { useUser } from '@auth0/nextjs-auth0/client';


export default function Home() { 
    const { user, error, isLoading } = useUser();
    console.log(user)
  return (
    <main>
      <Navbar title="MediVault" large centerTitle />

      <List inset strong dividers>
        {
            user ? (
                <>
                    <ListItem title="Home" link linkComponent={Link} linkProps={{href: "/home"}} />
                    <ListItem title="Logout" link linkComponent={Link} linkProps={{href: "/api/auth/logout"}} />
                </>
            ):(
                <>
                    <ListItem title="Login" link linkComponent={Link} linkProps={{href: "/api/auth/login"}} />
                    <ListItem title="Register" link linkComponent={Link} linkProps={{href: "/api/auth/login"}} />
                </>
            )
        }
      </List>
    </main>
  );
}
