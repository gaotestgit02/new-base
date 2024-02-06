import { Dialog } from '@mui/material'
import React, { useCallback, useState } from 'react'
import { PDialogTitle } from '../components/Dialog/PDialogTitle'
import { DialogParams } from '../contexts/ApplicationContext'

let modalCount = 0

const generateId = () => `managed-modal-${modalCount++}`

export interface MountItems {
  component: JSX.Element
  id: string
}

export interface DialogBodyProps<T> {
  onSubmit?: (data: T) => void
  onClose?: () => void
}

export const useModalManager = () => {
  const [modals, setModals] = useState<MountItems[]>([])

  const mount = useCallback((component: JSX.Element, id?: string) => {
    if (!id) {
      id = generateId()
    }
    setModals((existingModals) => {
      return [...existingModals, { component, id: id! }]
    })
    return id
  }, [])

  const unMount = useCallback((id: string) => {
    setModals((modalItems) => modalItems.filter((item) => item.id !== id))
  }, [])

  const showDialog = useCallback(
    <T,>(
      component: JSX.Element,
      params: DialogParams
    ): Promise<T | boolean> => {
      let onSubmit
      let onClose
      const promise = new Promise<T | boolean>((resolve) => {
        onSubmit = (data: T | boolean) => {
          resolve(data)
        }
        onClose = () => {
          resolve(false)
        }
      })

      const id = generateId()
      mount(
        <Dialog open maxWidth={params.size || 'xl'}>
          {params.title && (
            <PDialogTitle id={id} onClose={onClose as unknown as () => void}>
              {params.title}
            </PDialogTitle>
          )}
          {React.cloneElement(
            component,
            {
              ...component.props,
              onSubmit,
              onClose,
            },
            component.props.children
          )}
        </Dialog>,
        id
      )

      return promise.finally(() => {
        unMount(id)
      })
    },
    [mount, unMount]
  )

  return {
    modals,
    showDialog,
  }
}
