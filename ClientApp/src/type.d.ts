interface IUser{
    name: string | undefined,
    password: string | undefined
}
abstract class Content{
}
class Text extends Content{
    value: string
}
class Image extends Content{
    url: string
}