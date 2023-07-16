"use client";

import { Box, Card, Container } from "@mui/material";
import { NAV_LINKS } from "@/assets/mock";
import { IClickProp } from "@/@types";
import { colors } from "@/assets/colors/mainGradient";
import Toggler from "@/components/toggler";
import Link from "next/link";

export default function Navbar({ darkMode, handleClick }: IClickProp) {
  return (
    <Box component={"nav"} width={"100%"} p={1}>
      <Container>
        <Card
          sx={{
            padding: "15px 0",
            borderRadius: "10px",
            backgroundColor: "gray",
          }}
        >
          <Box
            component={"ul"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={{ xs: "2rem", md: "8rem" }}
            fontSize={"1rem"}
          >
            {NAV_LINKS.map((link, index) => (
              <Box
                key={index}
                component={"li"}
                sx={{
                  borderImageSource: `-webkit-linear-gradient(135deg, ${colors})`,
                }}
              >
                <Link href={link.to}>
                  {!link.type && (
                    <p style={{ padding: "0.5rem 0" }}>{link.name}</p>
                  )}
                  {link.type && <p>{link.name}</p>}
                </Link>
              </Box>
            ))}
            <li>
              <Toggler darkMode={darkMode} handleClick={handleClick} />
            </li>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}
