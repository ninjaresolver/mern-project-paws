import { SettingsIcon } from "@chakra-ui/icons";
import { Avatar, Badge, Box, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { MdSettings, } from "react-icons/md";
import {IoLogOut} from "react-icons/io5"
import { useNavigate } from "react-router-dom";
import MatchList from "./MatchList"

const MatchContainer = () => {

  const navigate = useNavigate();

  return (
    <Box
      d="flex"
      flexDir="column"
      gap="1em"
      bg="purple.900"
      height="42rem"
      width="24%"
      //color="white"
      borderRadius="7px"
      border="1.5px solid black"
      boxShadow="5px 5px 5px black"
    >
      <Box
        d="flex"
        justifyContent="space-between"
        borderBottom="4px solid black" /* #9B2C2C */
        alignItems="center"
        width="100%"
        height="16%"
        bg="yellow.400"
        borderRadius="5px"

      >
        <Box
          d="flex"
          alignItems="center"
          //justifyContent="space-between"
          flexDir={{ base: "column", md: "row" }}
          gap="0.5rem"
          px={2}
        >
          <Avatar
            //size="lg"
            h={20}
            w={20}
            name="Dog"
            src="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            border="1px solid black"
          />

          <Box
            d="flex"
            flexDir="column"
            alignItems="start"
            justifyContent="space-between"
            gap="0.6rem"
            textAlign="left"
          >
            <Badge
              fontFamily="suez one"
              variant="solid"
              bg="black"
              color="red.600"
              fontSize="2xl"
              px={2}
              borderRadius="7px"
              letterSpacing="1.75px"
              _hover={{ background: "red.600", color:"white"  }}
              //_hover={{ background: "black", color:"red.600"  }}
            >
              Goofie
            </Badge>

            <Text
              color="gray.800"
              fontFamily="suez one"
              fontSize="sm"
              fontWeight="bold"
              //fontWeight="bold"
              marginLeft="2px"
            >
              <u>Matches: 14</u>
            </Text>
          </Box>
        </Box>

        <Box d="flex" flexDir="column" gap="0.2rem" alignItems="center" px={2}>
          <IconButton
            variant="ghost"
            //bg="gray.700"
            color="gray.800"
            size="sm"
            textAlign="center"
            fontSize="3xl"
            _hover={{ backgroundColor: "black", color: "red.600" }}
            aria-label="Settings"
            icon={<MdSettings />}
            onClick={() => console.log("settings profile modal")}
          />

          <IconButton
            variant="ghost"
            //bg="gray.700"
            color="gray.800"
            size="sm"
            textAlign="center"
            fontSize="3xl"
            fontWeight="bold"
            _hover={{ backgroundColor: "black", color: "red.600" }}
            aria-label="Logout"
            icon={<IoLogOut />}
            onClick={() => navigate("/")}
          />

          
        </Box>
      </Box>

      <Box d="flex" flexDir="column" alignItems="center" gap="1.2rem" >
        <Badge variant="outline" colorScheme="yellow" fontSize="xl" fontFamily="bungee" px={1.5}
          letterSpacing="1.25px"
        >
        Matches
        </Badge>

        <Box 
          width="100%" 
          //bg="yellow.300"
        >
          <MatchList/>
        </Box>
      </Box>
    </Box>
  );
};

export default MatchContainer;
