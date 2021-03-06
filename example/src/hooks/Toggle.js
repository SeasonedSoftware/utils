import React from 'react'
import { useToggle } from '@seasonedsoftware/utils/hooks'
import { Switch } from '@material-ui/core'
import SampleCard from 'example/SampleCard'

export default () => {
  const [on, toggle] = useToggle(true)
  return (
    <SampleCard
      title="useToggle"
      code={`
import { useToggle } from '@seasonedsoftware/utils/hooks'

const MyComponent = () => {
  const [on, toggle] = useToggle(true)
  return <Switch checked={on} onChange={toggle} />
}`}
    >
      <Switch checked={on} onChange={toggle} />
    </SampleCard>
  )
}
