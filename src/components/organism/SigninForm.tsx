"use client"

import { Button } from '@/components/atoms/Button';

// export const SigningForm: React.FC = () => { return (
//   <div className="flex flex-col items-center justify-center min-h-screen py-2">
//     <div className="flex flex-col items-center justify-center w-full px-20 text-center">
//       <h1 className="text-6xl font-bold">
//         Sign In
//       </h1>
//       <div className="flex flex-col items-center justify-center w-full px-20 text-center">
//         <form className="flex flex-col items-center justify-center w-full px-20 text-center">
//           <label className="text-2xl font-bold">
//             Email
//           </label>
//           <input className="text-2xl font-bold" type="text" name="email" />
//           <label className="text-2xl font-bold">
//             Password
//           </label>
//           <input className="text-2xl font-bold" type="text" name="password" />
//           <Button text={"Signing"}/>
//         </form>
//       </div>
//     </div>
//   </div>
// ) }

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Ustalamy schemat walidacji za pomocą biblioteki yup
const schema = yup.object().shape({
  email: yup.string().email("Wprowadź poprawny adres e-mail").required("Adres e-mail jest wymagany"),
  password: yup.string().min(8, "Hasło musi mieć co najmniej 8 znaków").required("Hasło jest wymagane"),
});

export const SigningForm = ()  =>{
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  // @ts-ignore
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input {...register("email")} placeholder="Adres e-mail" className="w-full p-2 border border-gray-300 rounded" />
        <p className="text-red-500 text-xs">{errors.email?.message}</p>
      </div>

      <div>
        <input {...register("password")} placeholder="Hasło" type="password" className="w-full p-2 border border-gray-300 rounded" />
        <p className="text-red-500 text-xs">{errors.password?.message}</p>
      </div>

      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-400">Zaloguj</button>

      <div>
        <a href="/reset-password" className="text-blue-500 hover:bg-blue-100 rounded p-1">
          Nie pamiętasz hasła?
        </a>
      </div>

      <div className="h-px bg-gray-200 my-4 relative">
        <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2">
          lub
        </span>
      </div>

      <button className="w-full p-2 bg-red-500 text-white rounded cursor-pointer hover:bg-red-400">
        Zaloguj za pomocą Google
      </button>

      <button className="w-full p-2 bg-black text-white rounded cursor-pointer hover:bg-gray-900">
        Zaloguj się przez Apple
      </button>
    </form>
  );
}
