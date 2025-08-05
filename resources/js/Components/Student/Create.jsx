import { useTheme } from "../../Utils/theming"
import { useSidebar } from '../../Utils/theming'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { Link } from '@inertiajs/react'
import { useForm } from '@inertiajs/react'


const Student = () => {
    const { theme, toggleTheme } = useTheme();
    useSidebar();

    const { data, setData, post, processing, errors } = useForm({
        number: '',
        name: '',
        remember: false,
    })

    function submit(e) {
        e.preventDefault()
        post('/dashboard/student')
    }

    return (
        <>
            <main
                class="w-full xl:w-[calc(100%-240px)] bg-body dark:bg-bodyDark dark:text-white xl:ml-60 main duration-200">
                <div
                    class="py-4 px-6 bg-white flex items-center sticky top-0 left-0 z-30 border-b-2 border-black/10 dark:bg-bgDark dark:border-white/10 duration-200">
                    <button type="button" className="text-lg sidebar-toggle">
                        <Bars3Icon className="w-5 cursor-pointer" />
                    </button>
                    <div class="ml-4">
                        <h1 class="text-xl font-semibold">Murid</h1>
                    </div>
                    <ul class="flex items-center gap-2 md:gap-5 text-sm ml-auto">
                        <div class="flex">
                            <button onClick={toggleTheme} className="dark-mode-toggle hidden xl:block focus:outline-none">
                                {theme === 'dark' ? (
                                    <img src="/img/white_toggle-flowkas.svg" alt="Dark Mode" className="w-7 lg:w-9 2xl:w-11" />
                                ) : (
                                    <img src="/img/dark_toggle-flowkas.svg" alt="Light Mode" className="w-7 lg:w-9 2xl:w-11" />
                                )}
                            </button>
                        </div>
                    </ul>
                </div>
                <div class="p-4 xl:p-6">
                    <div class="">
                        <div class="bg-white p-6 xl:px-8 rounded-lg border-2 border-black border-opacity-10 dark:bg-bgDark dark:border-white dark:border-opacity-10 duration-200">
                            <div class="flex justify-between items-center mb-4 xl:mb-8">
                                <h1 class="font-semibold text-lg">Tambah Murid</h1>
                            </div>
                            <div class="jantuk">
                                <form onSubmit={submit} class="">
                                    <div class="w-full flex flex-wrap justify-between">
                                        <div class="w-[48.5%] mb-5">
                                            <label for="number" class="font-semibold text-base mb-4 block">No Absen</label>
                                            <input type="number" id="number" value={data.number} onChange={e => setData('number', e.target.value)}
                                                class="text-sm p-3 rounded-md w-full border-[1.5px] font-medium border-black border-opacity-[16%] dark:bg-bodyDark duration-200"
                                                placeholder="Masukkan nomor" required />
                                            {errors.number && <div className="text-red-500 text-sm">{errors.number}</div>}
                                        </div>
                                        <div class="w-[48.5%] mb-5">
                                            <label for="name" class="font-semibold text-base mb-4 block">Nama Murid</label>
                                            <input type="text" id="name" value={data.name} onChange={e => setData('name', e.target.value)}
                                                class="text-sm p-3 rounded-md w-full border-[1.5px] font-medium border-black border-opacity-[16%] dark:bg-bodyDark duration-200"
                                                placeholder="Masukkan Nama" required />
                                            {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
                                        </div>
                                        <div class="hidden w-[48.5%] mb-5">
                                            <label for="slug_name" class="font-semibold text-base mb-4 block">Nama Slug
                                                Murid</label>
                                            <input type="text" name="slug_name" id="slug_name" value="{{ old('slug_name') }}"
                                                class="text-sm p-3 rounded-md w-full border-[1.5px] font-medium border-black border-opacity-[16%]"
                                                placeholder="Masukkan Nama" required readonly />
                                            {/* <div class="text-red-500 text-sm">
                                                {{ $message }}
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button type="submit" disabled={processing}
                                            class="text-white bg-primary hover:bg-primary focus:outline-none focus:ring-fourth font-medium rounded-lg text-sm px-5 py-2.5 text-center">Tambah
                                            Murid</button>
                                        <Link href="/dashboard/student"
                                            class="p-3 text-sm rounded-lg bg-gray-500 text-white font-medium">kembali</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Student;