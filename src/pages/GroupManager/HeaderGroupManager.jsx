import React from 'react'
import Box from '../companyPenel/component/Box'

function HeaderGroupManager() {
    return (
        <div className="flex justify-between gap-x-3 mx-2" >
            <Box
                width="100%"
                titr='12'
                body={" دانشجوی تایید شده "}
            />

            <Box
                width="100%"
                titr='14'
                body={"موقعیت فعال"}
            />

            <Box
                width="100%"
                titr='3'
                body={" دانشجوی انتظار تایید "}
            />
        </div>
    )
}

export default HeaderGroupManager