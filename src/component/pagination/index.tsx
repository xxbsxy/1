import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { PageHeader, Pagination as AntdPagination } from 'antd'

interface IProps {
  children?: ReactNode
  total: number
  pageSize?: number
  pageSizeChange: (page: number) => void
}

const Pagination: FC<IProps> = (props) => {
  const [currentPage, setCurrentPage] = useState(1)
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    props.pageSizeChange(page)
  }
  return (
    <PageHeader>
      <AntdPagination
        className="a"
        current={currentPage}
        showSizeChanger={false}
        total={props.total}
        defaultPageSize={props.pageSize ? props.pageSize : 50}
        onChange={handlePageChange}
      />
    </PageHeader>
  )
}

export default memo(Pagination)
