"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";


export default function Home() {

  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center">
        <div className="mx-auto mb-4 max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">
            FNTASTIC ya está disponible.
          </p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl text-center">
          Ofrecé tus <span className="text-blue-600">servicios</span> a toda tu ciudad.
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg text-center">
          FNTASTIC te permite dar a conocer tu negocio a todo el mundo y gestionar tu negocio en una plataforma integral. Simplemente cargá tus servicios y empezá a generar ventas.
        </p>

        <Link
          className={buttonVariants({
            size: "lg",
            className: "mt-5",
          })}
          href="/dashboard"
          target="_blank"
        >
          Empezar <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </MaxWidthWrapper>

      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[16.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-45 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>

          <div>
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mt-16 flox-root sm:mt-24">
                <div className="-m-2 rounded-lg bg-gray-900/5 p-2 ring-1 ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src="/dashboard-preview.jpg"
                    width={1364}
                    height={866}
                    alt="product review"
                    quality={100}
                    className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[16.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-45 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-3xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl">
              Atraé a más clientes y gestioná tus reservas fácilmente
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Lograr que más gente te conozca, gestionar tus reservas, tus servicios y tus ventas nunca fue tan fácil con FNTASTIC.
            </p>
          </div>
        </div>

        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0 md:px-4">
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600">Paso 1</span>
              <span className="text-xl font-semibold">Regístrate</span>
              <span className="mt-2 text-zinc-700">
                Registrá tu negocio en la plataforma.{" "}
                {/* <Link
                  href="/pricing"
                  className="text-blue-700 underline underline-offset-2"
                >
                  plan Pro
                </Link>
                . */}
              </span>
            </div>
          </li>

          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600">Paso 2</span>
              <span className="text-xl font-semibold">
                Carga tu información
              </span>
              <span className="mt-2 text-zinc-700">
                Indicá cuales son los servicios que ofreces junto con sus precios, los horarios en los que estás disponible, tus empleados, etc.
              </span>
            </div>
          </li>

          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600">Paso 3</span>
              <span className="text-xl font-semibold">
                Empezá a atraer clientes
              </span>
              <span className="mt-2 text-zinc-700">
                ¡Es así de sencillo! Llegá a un público más amplio y gestioná todas tus reservas en FNTASTIC.
              </span>
            </div>
          </li>
        </ol>

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mt-16 flox-root sm:mt-24">
            <div className="-m-2 rounded-lg bg-gray-900/5 p-2 ring-1 ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src="/file-upload-preview.jpg"
                width={1419}
                height={732}
                alt="uploading preview"
                quality={100}
                className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
