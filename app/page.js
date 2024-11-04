import Link from "next/link";
export default function Home() {
  return (
    <div className="w-full h-screen bg-white flex justify-center items-center">
      <div className="bg-black h-[400px] w-[300px] rounded-md">
        <h1 className="font-sans text-white text-center text-2xl font-semibold m-2 mb-10">Authentication Project</h1>
        <div className="flex flex-col gap-8 mx-auto w-full ">
          <Link href={"/login"} className="text-black mx-auto  w-[140px] bg-white py-2 px-3 cursor-pointer">Login Page</Link>
          <Link href={"/signup"} className="text-black mx-auto  w-[140px]  bg-white py-2 px-3 cursor-pointer">SignUp Page</Link></div>
      </div>
    </div>
  );
}
