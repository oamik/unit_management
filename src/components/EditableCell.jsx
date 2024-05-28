import { Input } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'

const EditableCell = ({ getValue, row, column, table }) => {
    const initialValue = getValue()
    const [value, setValue] = useState(initialValue)

    const onBlur = () => {
        table.options.meta?.updateData(row.index, column.id, value)
    }
    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.target.blur()
        }
    }
    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])
    return (
        <Input
            value={value}
            onChange={e => setValue(e.target.value)}
            onKeyDown={onKeyDown}
            onBlur={onBlur}
            variant='filled'
            size='sm'
            w='90%'
            overflow='hidden'
            textOverflow='ellipsis'
            whiteSpace='nowrap'
        />
    )
}

export default EditableCell
