import RoundRushLogo from "@/core/assets/svgs/RoundRushLogo.svg";
import subLogo from "@/subLogo.svg";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Round Rush",
  description: "Round Rush",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #e8f0fe 100%)",
        }}
      >
        <div className="flex flex-col gap-6 justify-center items-center mt-10 mb-10">
          <Image src={RoundRushLogo} alt="longLogo" width={200} height={200} />
          <Image src={subLogo} alt="subLogo" width={350} height={350} />
        </div>
        {children}
      </body>
    </html>
  );
}
