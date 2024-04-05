import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

const FounderAndMentorInfo = () => {
  return (
    <div className="w-full pt-6">
      <div className="text-purple-600 font-semibold flex justify-center">
        Taught By
      </div>
      <div className="text-black font-semibold flex justify-center">
        Mayank Arora
      </div>
      <div className="flex justify-around pt-10">
        <div className="flex justify-center flex-col items-center gap-y-1">
          <Image src="/soarx-logo.png" alt="logo" width={50} height={50} />
          <div>Founder- Soarx</div>
        </div>
        <div className="flex justify-center flex-col items-center gap-y-2">
          <Image
            src="https://th.bing.com/th/id/R.3d6a2ad56bc3403c5cfcc3efe09b741b?rik=gnNKMMZSvZ3uMA&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-microsoft-logo-iconlogobrand-logoiconslogos-251519939091wmudn.png&ehk=1%2fl4i5MeDLTCpvZhUZlCefvhSzsGR16HIPqagpDxYDg%3d&risl=&pid=ImgRaw&r=0"
            alt="logo"
            width={50}
            height={50}
            className="p-1"
          />
          <div>Ex-Microsoft, Software Engineer</div>
        </div>
        <div className="flex justify-center flex-col items-center gap-y-3">
         <FcGoogle className="text-4xl"/>
          <div>Google SPS, India </div>
        </div>
      </div>
    </div>
  );
};

export default FounderAndMentorInfo;
