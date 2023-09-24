'use client'
import { ArrowLeftIcon } from "@/components/Icons";
function BackBar(){

    return(
        <div
        className={`w-screen border-y border-black bg-emerald-300 py-6`}
      >
        <a href={'/#projects'} className="flex gap-3 text-white hover:text-black px-4">
          <ArrowLeftIcon  color={'#000'} />
        <h2 className="font-outline text-center font-heading text-xl ">
          BACK
        </h2>
        </a>
      </div>
    )
}

export default BackBar;