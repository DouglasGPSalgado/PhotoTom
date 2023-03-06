import React, { ReactNode, useState } from 'react'

type Props = {
  children: ReactNode
}

export const FormContext = React.createContext({})

export const FormProvider = ({ children }: Props) => {
  const [corPele, setCorPele] = useState('')
  const [corCabelo, setCorCabelo] = useState('')
  const [corOlhos, setCorOlhos] = useState('')
  const [quantidadeSardas, setQuantidadeSardas] = useState('')
  const [bronze, setBonze] = useState('')
  const [intencidadeBronze, setIntencidadeBronze] = useState('')
  const [reacaoSolar, setReacaoSolar] = useState('')
  const [sensibilidadeFacial, setSensibilidadeFacial] = useState('')

  return (
    <FormContext.Provider
      value={{
        corPele,
        setCorPele,
        corCabelo,
        setCorCabelo,
        corOlhos,
        setCorOlhos,
        quantidadeSardas,
        setQuantidadeSardas,
        bronze,
        setBonze,
        intencidadeBronze,
        setIntencidadeBronze,
        reacaoSolar,
        setReacaoSolar,
        sensibilidadeFacial,
        setSensibilidadeFacial,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
