import React from 'react'
import Navbar from "../components/Navbar"
import { Input, Button } from "./index.js"
import { Link } from "react-router-dom"
import Sidenavbar from "../components/Sidenavbar.jsx"


function StudentParentForm() {
   
    return (
        <div className='bg-gray-50 h-screen'>

            <Navbar />
            <Sidenavbar />

           
            <div className='flex justify-center items-center w-full pt-28'>

                <div className='bg-red-50 shadow-lg px-12 py-8 items-center flex flex-col gap-4 rounded-lg'>

                    <h1 className='text-3xl font-serif font-semibold'>Enter your child's details</h1>

                    <form>
                        <div className='flex flex-col items-center justify-center gap-3'>
                            <Input
                                label="FullName: "
                                type="text"
                                className="w-[400px] m-2"
                                labelClassName="text-xl"
                                
                                
                            />
                            <Input
                                label="LastName: "
                                type="text"
                                className="w-[400px] m-2"
                                labelClassName="text-xl"
                              
                                
                            />
                            <Input
                                label="Standard: "
                                type="text"
                                className="w-[400px] m-2"
                                labelClassName="text-xl"
                            />
                            <Input
                                label="Section: "
                                type="text"
                                className="w-[400px] m-2"
                                labelClassName="text-xl"
                            />
                            <Link to="/parent">
                                <Button className='bg-red-600 text-white py-1.5 px-7 rounded-lg '>
                                    Get the details
                                </Button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default StudentParentForm