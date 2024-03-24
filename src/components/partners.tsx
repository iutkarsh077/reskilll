"use client";
import Image from "next/image";
import microsoft from '../../public/images/microsoft.png';
import uber from '../../public/images/uber.png'
import adobe from '../../public/images/Adobe.png'
import github from '../../public/images/github.png'
import spark from '../../public/images/spark.png'
import intuit from '../../public/images/Intuit.png'

const Parnters = () => {
  return (
    <div className="w-full flex flex-col gap-y-4 pl-8 pr-8 items-center">
      <div className="text-2xl font-medium text-center">
        Trusted by 100+ Global <span className="text-blue-500">Corporations</span>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10 p-2">
        <Image src={microsoft} width={100} height={100} alt="Microsoft" className="rounded-lg sm:w-auto w-30" />
        <Image src={github} width={100} height={100} alt="Google" className="rounded-lg sm:w-auto w-30" />
        <Image src={uber} width={100} height={100} alt="Apple" className="rounded-lg sm:w-auto w-30" />
        <Image src={spark} width={100} height={100} alt="Amazon" className="rounded-lg sm:w-auto w-30" />
        <Image src={adobe} width={100} height={100} alt="Facebook" className="rounded-lg sm:w-auto w-30" />
        <Image src={intuit} width={100} height={100} alt="Tesla" className="rounded-lg sm:w-auto w-30" />
      </div>
    </div>
  )
}

export default Parnters;
