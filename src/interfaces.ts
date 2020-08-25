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

export interface ILocation {
    readonly id         : number
    name                : string
    type                : string
    dimension           : string
    residents           : string[]
    url                 : string
    created             : string

}

export interface IEpisodes {
    readonly id         : number
    name                : string
    air_date            : string
    episode             : string
    characters          : string[]
    url                 : string
    created             : string
}

export interface IStateCharacters {
    characters          : ICharacter[]
}

export interface IStateLocations {
    locations           : ILocation[]
}

export interface IStateEpisodes {
    episodes            : IEpisodes[]
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
    ListLocations: undefined,
    Location: {
        item: ILocation
    }
    ListEpisodes: undefined,
    Episode: {
        item: IEpisodes
    }
  }

export type DrawerParamList = {
    Character: undefined,
    Episode: undefined,
    Location: undefined
}