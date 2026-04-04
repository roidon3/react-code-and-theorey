import React from 'react'
import { memo } from 'react';
//if we use memeo comp wont rerender unless and untill props changes

function ChilcComUseCallback({adjective}) {
    console.log("i'm child comp of usecallBack");
  return (
    <div>child comp {adjective}</div>
  )
}

export default memo(ChilcComUseCallback)