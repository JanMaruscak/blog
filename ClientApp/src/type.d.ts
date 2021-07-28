interface IUser {
    UserName: string | undefined,
    Password: string | undefined,
    EmailAddress: string | undefined
}

type StateUser = {
    UserName: string,
    Password: string,
    EmailAddress: string
}

type Tag = {
    id: number,
    value: string
}
type Article = {
    id: number,
    title: string,
    tags: Tag[],
    created: Date,
    imgUrl: string,
    author: string,
    perex: string
}
const ArticleDefault = {
    id: 0,
    title: "",
    tags: [],
    created: new Date(),
    imgUrl: "",
    author: "",
    perex: ""
}
type Articles = {
    Data: Article[]
}
type StateArticle = {
    Id?: number,
    Title?: string,
    Tags?: Tag[],
    Created?: Date,
    ImgUrl?: string,
    Text?: any,
    Data?: any,
    Author?: string,
    Perex?: string
}
type StateArticle2 = {
    Id?: number,
    Title?: string,
    Tags?: string[],
    Created?: Date,
    ImgUrl?: string,
    Text?: any,
    Data?: any,
    Author?: string,
    Perex?: string
}
type StateArticles = {
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