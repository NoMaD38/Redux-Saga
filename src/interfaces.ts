export interface ICharacter {
    readonly id         : number
    name                : string
    status              : string
    species             : string
    type                : string
    gender              : string
    origin              : {name: string, url: string}
    location            : {name: string, url: string}
    image               : string
    episode             : string[]
    url                 : string
    created             : string
}

export interface IStateCharacters {
    characters          : ICharacter[]
}

export interface IAction {
    type                : string,
    payload             ?: any
}

export type StackParamList = {
    ListCharacters: undefined,
    Character: {
        item: ICharacter
    }
  }