import React, { ReactNode, useState } from 'react'

type Props = {
  children: ReactNode
}

export const FormContext = React.createContext({})

export const FormProvider = ({ children }: Props) => {
  const [corPele, setCorPele] = useState(null)
  const [corCabelo, setCorCabelo] = useState(null)
  const [corOlhos, setCorOlhos] = useState(null)
  const [quantidadeSardas, setQuantidadeSardas] = useState(null)
  const [bronze, setBonze] = useState(null)
  const [intencidadeBronze, setIntencidadeBronze] = useState(null)
  const [reacaoSolar, setReacaoSolar] = useState(null)
  const [sensibilidadeFacial, setSensibilidadeFacial] = useState(null)

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
