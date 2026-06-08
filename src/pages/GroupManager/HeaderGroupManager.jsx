import React from 'react'
import Box from '../companyPenel/component/Box'
import { FaUserClock } from 'react-icons/fa'
import { FaBuildingUser } from 'react-icons/fa6'
import { PiStudentBold } from 'react-icons/pi'
import useGet from '../../hooks/useGet'

function HeaderGroupManager() {


    const { data: student, isSuccess } = useGet(
        "department_head/students",
        "getStudent"
    );

    

    const students = student?.data?.students || [];


    const totalCount = students.length;




    return (
        <div className="flex justify-between gap-x-3 mx-2" >
            <Box
                width="100%"
                titr='0'
                body={" دانشجوی تایید شده "}
                icon={<PiStudentBold className="text-rose-500" />}
            />

            <Box
                width="100%"
                titr={totalCount}
                body={"موقعیت فعال"}
                icon={<FaBuildingUser className="text-blue-600" />}

            />

            <Box
                width="100%"
                titr='0'
                body={" دانشجوی انتظار تایید "}

                icon={<FaUserClock className="text-emerald-600" />}
            />
        </div>
    )
}

export default HeaderGroupManager