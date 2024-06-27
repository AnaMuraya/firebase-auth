"use client";

import React from "react";
import Link from "next/link";

interface Props {
    page:string, title:string, content:string
}
export default function Navigation({ page, title, content }:Props) {
  return (
    <>
      <Link href={`/${page}`}>
        <h2>
          {title} <span>-&gt;</span>
        </h2>
        <p> {content}</p>
      </Link>
    </>
  );
}
