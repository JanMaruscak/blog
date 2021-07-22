interface IUser{
    UserName: string | undefined,
    Password: string | undefined,
    EmailAddress: string | undefined
}

type Tag = {
    id: number,
    value: string
}
type Article={
    id: number,
    title: string,
    tags: Tag[],
    created: Date,
    imgUrl: string,
    author: string,
    perex: string
}
type StateArticle = {
    Id?: number,
    Title?: string,
    Tags?: Tag[],
    Created?: Date,
    ImgUrl?: string,
    Text?: any,
    Data?: Article[],
    Author?: string,
    Perex?: string
}