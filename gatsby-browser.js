import React from 'react'
import { GlobalProvider } from '@Layout/services/context'
export const wrapRootElement = ({ element }) => (
  <GlobalProvider>{element}</GlobalProvider>
)
