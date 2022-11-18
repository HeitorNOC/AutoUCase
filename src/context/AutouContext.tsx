import { ReactNode, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { createContext } from 'use-context-selector'
import { api } from "../lib/axios"

interface LoginInput {
  email: string
  matricula: string
}

interface ReactionsType {
  count: number
  motivo: string
}

interface User {
  id: number
  matricula: string
  email: string
  nome: string
  sobrenome: string
  departamento: string
  cargo: string
  avatar: string
  reacoes: {
    Like: ReactionsType
    Orgulho: ReactionsType
    Excelente_Trabalho: ReactionsType
    Colaboracao: ReactionsType
  }
}

interface ReactUser {
  matricula: string
  motivo: string
  reactionOrgulho: string
  reactionExcelente_Trabalho: string
  reactionColaboracao: string
  reactionLike: string
}

interface AutoUContextType {
  users: User[]
  verifyLogin: (data:LoginInput) =>  void
  actualUser: User | undefined
  loged: boolean
  totalReacoes: number
  newReactUser: (data:ReactUser) => Promise<string | undefined>
  userTop1: User | undefined
  userTop2: User | undefined
  userTop3: User | undefined
  handleDeleteUser: () => void
}

interface AutoUProviderProps {
  children: ReactNode
}

export const AutoUContext = createContext({} as AutoUContextType)

export function AutoUProvider({ children }: AutoUProviderProps) {
  const [users, setUsers] = useState<User[]>([])
  const [actualUser, setActualUser] = useState<User>()
  const [loged, setLoged] = useState(true)
  const [totalReacoes, setTotalReacoes] = useState(0)
  const [userReacted, setUserReacted] = useState<User>()
  //const [top1, setTop1] = useState(0)
  const [userTop1, setUserTop1] = useState<User>()
  //const [top2, setTop2] = useState(0)
  const [userTop2, setUserTop2] = useState<User>()
  //const [top3, setTop3] = useState(0)
  const [userTop3, setUserTop3] = useState<User>()

  async function fetchUsers(query?: string | number) {
    const response = await api.get('/users', {
      params: {
        q: query
      }
    })

    setUsers(response.data)
    
  }

  

  const navigate = useNavigate()
  function verifyLogin(data: LoginInput) {
    if(users.length != 0) {
      let resetForm = false
      users.map(item => {
        
        if(item.email == data.email) {
        resetForm = true
        setActualUser(item)
        calculaReacoes(item)
        navigate('/profile')
        calculaTop3()
        
      } 
      if(item.matricula == data.matricula) {
        resetForm = true
        setActualUser(item)
        calculaReacoes(item)
        navigate('/profile')
        calculaTop3()
        
      } 
    })
    if (resetForm == false) {
      setLoged(false)
    } 

  }
  }
  let index:number
  let user:User
  async function newReactUser(data: ReactUser) { 
    
    users.map(item => {
      if(item.matricula == data.matricula) {
        setUserReacted(item)
        user = item
      } 
    })
    index = users.findIndex(i => i == user)
    if (userReacted) {
      if(data.reactionColaboracao == "Colaboracao") {
        const response = await api.patch(`/users/${index+1}`, {
          reacoes: {
            Like: {
              count: userReacted.reacoes.Like.count,
              motivo: userReacted.reacoes.Like.motivo
            },
            Orgulho: {
              count: userReacted.reacoes.Orgulho.count,
              motivo: userReacted.reacoes.Orgulho.motivo
            },
            Excelente_Trabalho: {
              count: userReacted.reacoes.Excelente_Trabalho.count,
              motivo: userReacted.reacoes.Excelente_Trabalho.motivo
            },
            Colaboracao: {
              count: userReacted.reacoes.Colaboracao.count += 1,
              motivo: data.motivo != '' ? data.motivo : userReacted.reacoes.Colaboracao.motivo
            }
          }
        })
        calculaTop3()
        return "Reação adicionada com sucesso"
        
      }
      if(data.reactionLike == "Like") {
        
        const response = await api.patch(`users/${index+1}`, {
          reacoes: {
            Like: {
              count: userReacted.reacoes.Like.count += 1,
              motivo: data.motivo 
            },
            Orgulho: {
              count: userReacted.reacoes.Orgulho.count,
              motivo: userReacted.reacoes.Orgulho.motivo
            },
            Excelente_Trabalho: {
              count: userReacted.reacoes.Excelente_Trabalho.count,
              motivo: userReacted.reacoes.Excelente_Trabalho.motivo
            },
            Colaboracao: {
              count: userReacted.reacoes.Colaboracao.count,
              motivo: userReacted.reacoes.Colaboracao.motivo
            }
          }
        })
        calculaTop3()
        return "Reação adicionada com sucesso"
      }
      if(data.reactionOrgulho == "Orgulho") {
        
        const response = await api.patch(`/users/${index+1}`, {
          reacoes: {
            Like: {
              count: userReacted.reacoes.Like.count,
              motivo: userReacted.reacoes.Like.motivo
            },
            Orgulho: {
              count: userReacted.reacoes.Orgulho.count += 1,
              motivo: data.motivo 
            },
            Excelente_Trabalho: {
              count: userReacted.reacoes.Excelente_Trabalho.count,
              motivo: userReacted.reacoes.Excelente_Trabalho.motivo
            },
            Colaboracao: {
              count: userReacted.reacoes.Colaboracao.count,
              motivo: userReacted.reacoes.Colaboracao.motivo
            }
          }
        })
        calculaTop3()
        return "Reação adicionada com sucesso"
      }
      if(data.reactionExcelente_Trabalho == "Excelente_Trabalho") {
        
        const response = await api.patch(`/users/${index+1}`, {
          reacoes: {
            Like: {
              count: userReacted.reacoes.Like.count,
              motivo: userReacted.reacoes.Like.motivo
            },
            Orgulho: {
              count: userReacted.reacoes.Orgulho.count,
              motivo: userReacted.reacoes.Orgulho.motivo
            },
            Excelente_Trabalho: {
              count: userReacted.reacoes.Excelente_Trabalho.count += 1,
              motivo: data.motivo
            },
            Colaboracao: {
              count: userReacted.reacoes.Colaboracao.count,
              motivo: userReacted.reacoes.Colaboracao.motivo
            }
          }
        })
        calculaTop3()
        return "Reação adicionada com sucesso"
      }
      
    } else {
      return "Usuário não encontrado"
    }
  }

  function calculaReacoes(item: User) {
    if (item) {
      setTotalReacoes((prevState) => prevState += item.reacoes.Like.count)
      setTotalReacoes((prevState) => prevState += item.reacoes.Orgulho.count)
      setTotalReacoes((prevState) => prevState += item.reacoes.Excelente_Trabalho.count)
      setTotalReacoes((prevState) => prevState += item.reacoes.Colaboracao.count)
    }
  }

  function handleDeleteUser() {
    setActualUser(undefined)
  }

 
  function calculaTop3() {
    let top1 = 0
    let top2 = 0
    let top3 = 0
    setUserTop3(users[17])
    
    users.map((item) => {
      let actualCount = item.reacoes.Colaboracao.count + item.reacoes.Excelente_Trabalho.count + item.reacoes.Like.count + item.reacoes.Orgulho.count
      if (actualCount > top1) {
        top1 = actualCount
        setUserTop1(item)  
      } else if (actualCount > top2 && actualCount < top1) {
        top2 = actualCount
        setUserTop2(item)
        
      } else if (actualCount > top3 && actualCount < top2) {
        top3 = actualCount
        setUserTop3(item)
      }
      
    })
    
  }

  useEffect(() => {
    if(users.length == 0) {

      fetchUsers()
    }
  }, [])


  return (
    <AutoUContext.Provider value={{
      users,
      verifyLogin,
      loged,
      totalReacoes,
      actualUser,
      newReactUser,
      userTop1,
      userTop2,
      userTop3,
      handleDeleteUser
    }}>
      {children}
    </AutoUContext.Provider>
  )
}