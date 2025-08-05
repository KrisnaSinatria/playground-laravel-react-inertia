import Sidebar from "../Layouts/Sidebar";
import { useTheme } from "../Utils/theming"
import { useSidebar } from '../Utils/theming'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { Link } from '@inertiajs/react'
// import Index from "../components/Student/Index";

const Index = ({ students }) => {
  const { theme, toggleTheme } = useTheme();
  useSidebar();
  return (
    <>
      <Sidebar />

      <main className="w-full xl:w-[calc(100%-240px)] bg-body dark:bg-bodyDark dark:text-white xl:ml-60 main duration-200">
        <div
          className="py-4 px-6 bg-white flex items-center sticky top-0 left-0 z-30 border-b-2 border-black/10 dark:bg-bgDark dark:border-white/10 duration-200">
          <button type="button" className="text-lg sidebar-toggle">
            <Bars3Icon className="w-5 cursor-pointer" />
          </button>
          <div className="ml-4">
            <h1 className="text-xl font-semibold line-clamp-1">Murid</h1>
          </div>
          <ul className="flex items-center gap-5 text-sm ml-auto">
            <div className="flex">
              <button onClick={toggleTheme} className="dark-mode-toggle hidden xl:block focus:outline-none">
                {theme === 'dark' ? (
                  <img src="/img/white_toggle-flowkas.svg" alt="Dark Mode" className="w-7 lg:w-9 2xl:w-11" />
                ) : (
                  <img src="/img/dark_toggle-flowkas.svg" alt="Light Mode" className="w-7 lg:w-9 2xl:w-11" />
                )}
              </button>
            </div>
            <ul className="ml-4 flex items-center">
              <div className="relative w-full max-w-md">
                <input
                  className="w-full xl:w-full pr-4 pl-12 py-2.5 bg-body placeholder:text-sm rounded-md shadow-sm border-2 border-black/10 dark:bg-bgDark dark:border-white/10 duration-200"
                  type="search" placeholder="Pencarian" id="searchTransport" aria-label="Search" />
                <div className="absolute inset-y-0 left-0 flex items-center pr-3 ml-4 cursor-pointer">
                  <MagnifyingGlassIcon className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </ul>
          </ul>
        </div>
        <div className="p-4 xl:p-6">
          <div className="">
            <div className="bg-white p-4 xl:px-6 rounded-lg border-2 border-black/10 dark:bg-bgDark dark:border-white/10 duration-200">

              <div className="flex justify-between mt-4 xl:mt-6 items-center mb-1 xl:mb-2">
                <h1 className="font-semibold text-base xl:text-lg text-nowrap">Data Murid</h1>
                <Link href="/dashboard/student/create"
                  className="font-medium text-xs xl:text-sm tracking-wide block bg-primary rounded-sm text-white px-2 xl:px-4 py-2.5">
                  <p className=" line-clamp-1">Buat Murid Baru</p>
                </Link>
              </div>
              <div className="table-wrap">
                <table id="example" data-ordering="false"
                  className="table-auto w-full mx-6 md:mx-auto justify-center text-left mt-6">
                  <thead className="border-b-2 border-black/10 dark:border-white/10">
                    <tr className="justify-between">
                      <th className="font-semibold py-3 text-[16px]">
                        <p className="text-left pr-6">No</p>
                      </th>
                      <th className="font-semibold py-3 text-[16px]">
                        <p className="text-left pr-6">Nama</p>
                      </th>
                      <th className="font-semibold py-3 text-[16px]">
                        <p className="text-left pr-6 text-nowrap">No Absen</p>
                      </th>
                      <th className="font-semibold py-3 text-[16px]"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student, index) => (
                      <tr className="justify-between text-left" key={index}>v54red\


                        <td className="py-3 text-[16px]">
                          <p className="text-left pr-6">{index + 1}</p>
                        </td>
                        <td className="py-3 text-[16px]">
                          <p className="text-left pr-6 text-nowrap">{student.number}</p>
                        </td>
                        <td className="py-3 text-[16px] max-w-[90px]">
                          <p className="text-left pr-6 max-w-40 break-words truncate">
                            {student.name}
                          </p>
                        </td>
                        <td className="py-3 text-[16px] flex gap-2 w-32 items-start">
                          <a href="" className="">
                            <img src="/img/kotak lihat.svg" className="w-14 h-14 object-contain"
                              alt="" />
                          </a>
                          <a href="" className="">
                            <img src="/img/kotak edit.svg" className="w-14 h-14 object-contain"
                              alt="" />
                          </a>
                          <form id="delete-form-{{ $income->id }}"
                            action="" method="post">
                            <button type="button"
                              className="w-full">
                              <img src="/img/kotak hapus.svg" className="w-14 h-14 object-contain"
                                alt="" />
                            </button>
                          </form>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <Index /> */}
    </>
  );
};

export default Index;
