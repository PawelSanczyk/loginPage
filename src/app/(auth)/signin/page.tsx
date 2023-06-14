import { Button } from "@/components/atoms/Button";
import { SigningForm } from "@components/organism/SigninForm";

export default function Signin() {

  return (
    <main>
      <h1>LinkedIn</h1>
      <div className="w-800 h-1200 border border-gray-300 shadow-md flex items-center justify-center">
        <SigningForm/>
      </div>
    </main>
  )
}