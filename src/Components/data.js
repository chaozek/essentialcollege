import { FaCreditCard, FaBook, FaBriefcase } from "react-icons/fa";
import React from "react";

const sublinks = [
  {
    page: "O škole",
    links: [
      {
        label: "Fakulta praktického vzdělávání      ",
        icon: <FaCreditCard />,
        url: "/products",
      },
      {
        label: "Fakulta profesního vzdělávání ​",
        icon: <FaCreditCard />,
        url: "/products",
      },
    ],
  },
  {
    page: "Katedry",
    links: [
      { label: "Podnikání a obchod", icon: <FaBook />, url: "/products" },
      {
        label: "Management a leadership",
        icon: <FaBook />,
        url: "/products",
      },
      {
        label: "Informační systémy a technologie",
        icon: <FaBook />,
        url: "/products",
      },
      { label: "PR a marketing", icon: <FaBook />, url: "/products" },
      {
        label: "Psychologie a komplexní personalistika",
        icon: <FaBook />,
        url: "/products",
      },
      { label: "Ekonomika a finance", icon: <FaBook />, url: "/products" },
      { label: "Právo ", icon: <FaBook />, url: "/products" },
      { label: "Kvalita", icon: <FaBook />, url: "/products" },
      { label: "Výroba a produkce", icon: <FaBook />, url: "/products" },
      {
        label: "Historie, politologie a vývoj chování organizací",
        icon: <FaBook />,
        url: "/products",
      },
      { label: "Jazykové vzdělávání", icon: <FaBook />, url: "/products" },
      { label: "Biohacking", icon: <FaBook />, url: "/products" },
    ],
  },
  {
    page: "Partneři",
    links: [
      { label: "Naši partneři", icon: <FaBriefcase />, url: "/products" },
      { label: "Staňte se partnerem", icon: <FaBriefcase />, url: "/products" },
    ],
  },
];

export default sublinks;
