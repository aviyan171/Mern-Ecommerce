import React, { useCallback, useState } from 'react'
import Button from 'shared/components/Button'
// import { List, AutoSizer, ListRowProps } from 'react-virtualized'
import { FixedSizeList as List, ListChildComponentProps } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'

const generateList = (size: number) => {
  const Arrays = Array.from({ length: size }, (_, index) => `Item${index + 1}`)
  console.log(Arrays, '...........')
  return Arrays
}

export function Virtualizedd() {
  const [items, setItems] = useState<string[]>([])
  const [triggerRerender, setTriggerRerender] = useState<boolean>(false)

  console.log('rerendered')

  const handleGenerateList = useCallback(() => {
    setItems(generateList(100000))
    setTimeout(() => {
      setTriggerRerender(prev => !prev)
    }, 1000)
  }, [triggerRerender])

  const rowRenderer = ({ index, style }: ListChildComponentProps<any>) => {
    return (
      <div style={style} key={index}>
        {items[index]}
      </div>
    )
  }

  return (
    <div className="p-5">
      <Button text="Generate" onClick={handleGenerateList} />

      <div className="mt-2 w-full h-100">
        {/* <AutoSizer>
          {({ width, height }) => (
            <List width={width} height={height} itemCount={items.length} itemSize={20}>
              {rowRenderer}
            </List>
          )}
        </AutoSizer> */}
        <List height={400} width="100%" itemCount={items.length} itemSize={20}>
          {rowRenderer}
        </List>
      </div>
    </div>
  )
}
