import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <div className="w-full text-center my-10">
      <h1 className="text-3xl">
        Oops! seems like this page dosen&apos;t exist
      </h1>
      <p className="text-xl my-10">
        You can go back to the {""}
        <Link href="/" className="text-primary underline">
          Home
        </Link>
      </p>
    </div>
  );
};

export default notFound;
