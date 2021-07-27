export function TagToString(tag: Tag) {
    return tag.value;
}
export function StringToTag(value: string) {
    return {
        id: 0,
        value: value
    }
}

export function TagsToStrings(tags: Tag[]) {
    let result: string[] = []
    tags.map((tag) => {
        result.push(tag.value)
    })
    return result
}

export function StringsToTags(values: string[]) {
    let result: Tag[] = []
    values.map((value) => {
        result.push(
            {
                id: 0,
                value: value
            }
        )
    })
    return result
}