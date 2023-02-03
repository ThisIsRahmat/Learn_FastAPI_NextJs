import React from "react";
import { render } from 'react-dom';
import { ChakraProvider } from "@chakra-ui/react";

import Header from "../components/Header";
import Todos from "../components/Todos";


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <ChakraProvider>
      <Header />
          <Todos />
    </ChakraProvider>
    </>
  )
}
