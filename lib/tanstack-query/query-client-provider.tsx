'use client'

import {  type ReactNode } from 'react'
import {  QueryClientProvider as TanstackQueryClientProvider } from '@tanstack/react-query'
import getQueryClientRef from '@/lib/tanstack-query/get-query-client'

export default function QueryClientProvider({ children }: { children: ReactNode }) {
  return (
    <TanstackQueryClientProvider client={getQueryClientRef()}>
      {children}
    </TanstackQueryClientProvider>
  )
}