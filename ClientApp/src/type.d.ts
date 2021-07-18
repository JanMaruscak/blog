interface IUser{
    UserName: string | undefined,
    Password: string | undefined,
    EmailAddress: string | undefined
}
abstract class Content{
}
class Text extends Content{
    value: string
}
class Image extends Content{
    url: string
}