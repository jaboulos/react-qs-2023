import React, { useState, useMemo } from 'react';
import { UseMemoExample } from './UseMemoExample';
import { UseCallbackExample } from './UseCallbackExample';

export const Solution2 = () => {
  return (
    <div>
      <h1>useMemo EXAMPLE</h1>
      <UseMemoExample />
      <h1 style={{marginTop: '35px'}}>useCallback EXAMPLE</h1>
      <UseCallbackExample />
    </div>
  )
}