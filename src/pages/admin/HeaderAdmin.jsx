import React from 'react'
import Box from '../companyPenel/component/Box'
import { PiEngineBold, PiStudentBold } from 'react-icons/pi'
import { FcManager } from 'react-icons/fc'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { FaBuildingUser } from 'react-icons/fa6'

function HeaderAdmin() {
    return (
        <div className="flex justify-between gap-x-3 mx-2" >
            <Box
                width="100%"
                titr='12'
                body={" دانشجو   "}
                icon={<PiStudentBold className="text-rose-500" />}

            />

            <Box
                width="100%"
                titr='14'
                body={" شرکت "}
                icon={<FaBuildingUser className="text-emerald-600"  />}

            />

            <Box
                width="100%"
                titr='3'
                body={"مدیر گروه   "}
                icon={<FaChalkboardTeacher  className="text-blue-500" />}
            />


        </div>
    )
}

export default HeaderAdmin