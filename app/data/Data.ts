import { AboutCryptoType, NavLinksType } from "../types/DataTypes";

export const navLinks = [
    {id:1,titel:"Home",href:"/"},
    {id:2,titel:"Cryptocurrencies",href:"/coins"},
    {id:3,titel:"About us",href:"/about-us"},
    {id:4,titel:" Contact us",href:"/contact-us"}
] as NavLinksType[];

export const aboutcrypto = [
    {id:1,titel:"What is Cryptocurrency?",image:"/landingPage/what_is_crypto.png",description:"Cryptocurrency is a digital or virtual form of currency that relies on cryptography for security. Unlike traditional currencies issued by governments (like the US dollar or Euro), cryptocurrencies operate on decentralized networks based on blockchain technology. This means that transactions are recorded on a public ledger, providing transparency and security."},
    {id:2,titel:"How Does Cryptocurrency Work?",image:"/landingPage/how_crypto_works.png",description:"Cryptocurrencies operate on a technology called blockchain, a distributed ledger that records all transactions across a network of computers. This technology ensures that all copies of the blockchain are identical and that transactions are verified by a consensus among participants in the network."},
] as AboutCryptoType[];

export const footerLinks = [
    {id:2,titel:"Github",href:"https://github.com/MohamadHosein86-Dev"},
    {id:3,titel:"Linkdin",href:"/about-us"},
    {id:4,titel:"Telegram",href:"*"}
] as NavLinksType[];


export const Links = [
  { titel: "Acount", icon: "user", herf: "/dashboard" },
  { titel: "Favarit coins", icon: "favarit", herf: "/dashboard/favarit" },
];