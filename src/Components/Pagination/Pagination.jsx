import React from 'react';
import {useActions} from "../../hooks/useActions";
import {Pagination} from "antd";

const Paginator = ({currentPage, isPostLoading, totalCount, getPosts}) => {
    const {setCurrentPage, setLimit} = useActions()

    const onPageChange = (page, pageSize) => {
        setCurrentPage(page)
        setLimit(pageSize)
    }

    return (
        <div>
            {isPostLoading ?
                <Pagination
                    disabled
                    current={currentPage}
                    onChange={onPageChange}
                    defaultCurrent={1}
                    total={totalCount}/>
                :
                <Pagination
                    current={currentPage}
                    onChange={onPageChange}
                    defaultCurrent={1}
                    total={totalCount}/>
            }
        </div>
    );
};

export default Paginator;