interface CommitteeCardType {
    imageUrl: string,
    person: string,
    affiliation: string,
    socialLink: string
}

type Person = {
    name: string,
    age: number
}


export type { CommitteeCardType }