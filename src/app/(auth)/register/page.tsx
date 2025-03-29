import { RegisterForm } from "@/app/_components";
import { Back } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import RegisterBanner from "@/../public/images/register.jpg";

const RegisterPage: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row pb-4 lg:pb-0">
      <section className="flex items-center justify-between lg:hidden p-8 sticky top-0 z-10 bg-white shadow">
        <Link href="/">
          <Back size="40" color="#615EF0" />
        </Link>

        <Link
          href="/login"
          className="px-8 py-4 z-10 bg-primary text-white rounded-full"
        >
          Login
        </Link>
      </section>
      <section className="w-full lg:w-2/5 h-screen flex justify-between items-center xl:p-14 p-8">
        <section className="w-full">
          <div className="space-y-4 lg:space-y-2">
            <h2 className="2xl:text-[40px] text-[34.5px] font-PoppinsBold">
              Create an account
            </h2>
            <h3 className="text-[#545454] font-InterRegular">
              Please register your account to freedom communicate with world
            </h3>
          </div>
          <div className="mt-[60px] lg:mt-8">
            <RegisterForm />
          </div>
        </section>
      </section>
      <section className="hidden w-3/5 lg:flex relative">
        <Image
          src="/images/register.jpg"
          alt="freedom communicate with world"
          className="w-full h-screen object-cover rounded-[48px] p-8"
          width={1000}
          height={1000}
        />
        <div className="flex items-center justify-between">
          <Link href="/" className="absolute top-14 left-12">
            <Back size="40" color="#615EF0" />
          </Link>

          <Link
            href="/login"
            className="px-8 py-4 z-10 border border-primary bg-primary text-white rounded-full absolute right-12 top-12 hover:bg-transparent hover:border-white transition"
          >
            Login
          </Link>
        </div>
      </section>
    </section>
  );
};

export default RegisterPage;
