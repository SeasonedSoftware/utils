import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { usePrevious } from '@seasonedsoftware/utils'
import SampleCard from './SampleCard'

export default () => {
  const [count, setCount] = useState(0)
  const prev = usePrevious(count)
  return (
    <SampleCard
      title="usePrevious"
      code={`
import { usePrevious } from '@seasonedsoftware/utils'

const MyComponent = () => {
  const [count, setCount] = useState(0)
  const prev = usePrevious(count)
  return (
    <Button
      onClick={() => setCount(count + 1)}
    >
      +1
    </Button>
  )
}`}
    >
      <p>
        Current value: <strong>{count}</strong>
        <br />
        Previous value: <strong>{prev}</strong>
      </p>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setCount(count + 1)}
      >
        +1
      </Button>
    </SampleCard>
  )
}