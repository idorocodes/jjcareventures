import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigation = [
  { name: "Home", href: "#" },
  { name: "Find Jobs", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Contacts Us ", href: "#" },
];
    return (

         <header className="inset-x-0 -top-3  fixed backdrop-blur z-50">
                <nav
                  aria-label="Global"
                  className="flex items-center justify-between p-4 lg:px-8"
                >
                  <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                      <span className="sr-only">JJ Care Ventures</span>
                      <img
                        alt=""
                        src="https://i.ibb.co/VphC67GL/jjcarelogo.png"
                        className="h-15 w-auto"
                      />
                    </a>
                  </div>
                  <div className="flex lg:hidden">
                    <button
                      type="button"
                      onClick={() => setMobileMenuOpen(true)}
                      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                      <span className="sr-only">Open main menu</span>
                      <Bars3Icon aria-hidden="true" className="size-7 bg-[#02101b] text-white rounded-2xl p-1" />
                    </button>
                  </div>
                  <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-sm/6  text-gray-900"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">
                      Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </nav>
                <Dialog
                  open={mobileMenuOpen}
                  onClose={setMobileMenuOpen}
                  className="lg:hidden bg-[]"
                >
                  <div className="fixed inset-0 z-50" />
                  <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto backdrop-blur-2xl p-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center text-center justify-between">
                      <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                          alt=""
                          src="https://i.ibb.co/VphC67GL/jjcarelogo.png"
                          className="h-15 w-auto"
                        />
                      </a>
                      <button
                        type="button"
                        onClick={() => setMobileMenuOpen(false)}
                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon aria-hidden="true" className=" size-7 bg-[#02101b] text-white rounded-2xl p-1" />
                      </button>
                    </div>
                    <div className="mt-6 flow-root">
                      <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-mx-3 block text-center rounded-lg px-3 py-2 text-base/7 font-medium text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                        <div className="py-6">
                          <a
                            href="#"
                            className="-mx-3 block rounded-lg text-center px-3 py-2.5 text-base/7 font-medium text-gray-900 hover:bg-gray-50"
                          >
                            Log in
                          </a>
                        </div>
                      </div>
                    </div>
                  </DialogPanel>
                </Dialog>
              </header>
        
    )
}


export default NavBar;