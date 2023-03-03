import Head from "next/head";
import { FC, ReactNode } from "react";
import { Navbar } from "../ui";

interface Props {
  title?: string;
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children, title }) => (
  <>
    <Head>
      <title>{title || "PokemonApp"}</title>
      <meta name="author" content="Pablo"></meta>
      <meta name="description" content="Informacion de pokemones"></meta>
      <meta name="keywords" content=""></meta>
    </Head>
    <Navbar />
    <main style={{ padding: "0px 20px" }}>{children}</main>
  </>
);
