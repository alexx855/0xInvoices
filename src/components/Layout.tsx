'use client'

import { ReactNode, useCallback, useEffect, useReducer, useRef, useState } from "react"
import { SideMenu } from "@/components/SideMenu"
import { Drawer } from 'flowbite';
import type { DrawerInterface, DrawerOptions } from 'flowbite';
import { Toaster } from "sonner";

export function Layout({ children }: { children: ReactNode }) {
  const sidebarDrawerRef = useRef<DrawerInterface | undefined>();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleSidebarToggle = useCallback(() => {
    sidebarDrawerRef.current?.toggle();
  }, [sidebarDrawerRef]);

  useEffect(() => {
    const options: DrawerOptions = {
      placement: 'left',
      backdrop: true,
      bodyScrolling: false,
      edge: false,
      backdropClasses: 'md:hidden block bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-10',
      onHide() {
        setIsDrawerOpen(false)
      },
      onShow() {
        setIsDrawerOpen(true)
      }
    };

    const $targetEl: HTMLElement | null = document.getElementById('sidebar');
    sidebarDrawerRef.current = new Drawer($targetEl, options);
  }, [sidebarDrawerRef])

  const closeSidebar = useCallback(() => {
    sidebarDrawerRef.current?.hide();
  }, [sidebarDrawerRef]);


  return (
    <>
      <Toaster closeButton richColors />

      <nav className="md:hidden block absolute h-[60px] left-0 top-0 z-30 w-full bg-white border-b border-gray-200">
        <button
          onClick={handleSidebarToggle}
          aria-controls="sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Open sidebar</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            {!isDrawerOpen ? (
              <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            ) : (
              <path clipRule="evenodd" fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
            )}
          </svg>
        </button>
      </nav>
      <div className="flex md:pt-0 pt-[60px] overflow-hidden">
        <aside id="sidebar" className="md:pt-0 pt-[60px] md:translate-x-0 -translate-x-full fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 w-64 h-full font-normal duration-75 transition-width" aria-label="Sidebar">
          <div className="h-full p-4 overflow-y-auto bg-gray-50">
            <SideMenu onNavigation={closeSidebar} />
          </div>
        </aside>

        <div id="main-content" className="relative w-full h-full p-4 overflow-y-auto md:ml-64">
          <main className="max-w-[1240px] m-auto">
            {children}
          </main>
        </div>
      </div>
    </>
  )
}
